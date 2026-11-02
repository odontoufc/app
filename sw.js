/*
 * Guia Clínico — service worker para GitHub Pages (/app/).
 * Versão 02: leitura imediata do cache, download explícito dos livros/capas,
 * recuperação correta entre caches e suporte a leituras parciais de PDF.
 * Substitua somente /sw.js na raiz do repositório.
 */
'use strict';

const VERSION = '2026-11-02-01';
const PREFIX = 'guia-clinico-offline-';
const SHELL_CACHE = `${PREFIX}shell-${VERSION}`;

// Preserva os downloads feitos com as versões anteriores; evita repetir arquivos grandes.
// O header-component.js atual reconhece estes prefixos.
const CONTENT_CACHE = `${PREFIX}content-2026-10-31-01`;
// Revisão das capas compactadas, independente dos PDFs e dos demais materiais offline.
const COVER_REVISION = '2026-11-02-optimized';
const EXTERNAL_CACHE = `${PREFIX}external-2026-10-31-01`;
const BASE = new URL('./', self.location.href);
const absolute = path => new URL(path, BASE).href;

// Núcleo do aplicativo: é preparado ao instalar/atualizar o service worker.
const SHELL_FILES = [
  'index.html', 'dentistica.html', 'periodontia.html',
  'endodontia.html', 'cirurgia.html', 'prescricoes.html', 'leitor.html',
  'style.css', 'app.js', 'manifest.webmanifest', 'favicon.svg',
  'icon-192.png', 'icon-512.png', 'logoufc.png',
  'components/header-component.js', 'components/footer-component.js',
  'banco_de_dados/dentistica.js',
  'banco_de_dados/periodontia.js',
  'banco_de_dados/endodontia.js',
  'banco_de_dados/cirurgia.js',
  'banco_de_dados/prescricoes.js',
  'banco_de_dados/protocolos_dentistica.js',
  'banco_de_dados/protocolos_endodontia.js',
  'banco_de_dados/protocolos_periodontia.js',
  'reabilitacao-oral/index.html',
  'reabilitacao-oral/dados.js',
  'reabilitacao-oral/aplicativo.js',
  'reabilitacao-oral/estilos.css'
];

// Materiais grandes: baixados quando o aluno toca em "Baixar conteúdos".
// O cabeçalho ainda conta os nomes antigos .png. Mantemos esses caminhos
// como chaves de compatibilidade, mas buscamos as imagens reais .webp.
const COVER_ALIASES = new Map([
  ['capas/dentistica.png', 'capas/dentistica.webp'],
  ['capas/periodontia.png', 'capas/periodontia.webp'],
  ['capas/endodontia.png', 'capas/endodontia.webp'],
  ['capas/cirurgia.png', 'capas/cirurgia.webp'],
  ['capas/manual.png', 'capas/manual.webp']
]);
const CONTENT_FILES = [
  'banco_de_dados/livros/manual.pdf',
  'banco_de_dados/livros/odontograma.pdf',
  ...COVER_ALIASES.keys(),
  ...Array.from({ length: 107 }, (_, i) =>
    `reabilitacao-oral/assets/paginas/pagina-${String(i + 1).padStart(3, '0')}.webp`)
];

const EXTERNAL_FILES = [
  ['https://cdn.tailwindcss.com/', 'no-cors'],
  ['https://unpkg.com/lucide@latest', 'no-cors'],
  ['https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.min.mjs', 'cors'],
  ['https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.mjs', 'cors'],
  ['https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf_viewer.min.css', 'no-cors'],
  ['https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap', 'no-cors'],
  ['https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap', 'no-cors']
];

const EXTERNAL_HOSTS = new Set([
  'cdn.tailwindcss.com', 'unpkg.com', 'cdnjs.cloudflare.com',
  'fonts.googleapis.com', 'fonts.gstatic.com'
]);

async function queue(items, fn, concurrent = 3) {
  let cursor = 0;
  let succeeded = 0;
  const runners = Array.from({ length: Math.min(concurrent, items.length) }, async () => {
    while (cursor < items.length) {
      const item = items[cursor++];
      try {
        if (await fn(item)) succeeded++;
      } catch (error) {
        console.warn('[Guia offline] Falha no arquivo:', item, error);
      }
    }
  });
  await Promise.all(runners);
  return { succeeded, total: items.length };
}

async function saveLocal(cache, path, forceRefresh = false) {
  const url = absolute(path);
  const actualUrl = absolute(COVER_ALIASES.get(path) || path);
  try {
    // Reaproveita a capa real caso ela já esteja armazenada.
    if (actualUrl !== url && !forceRefresh) {
      const existing = await cache.match(actualUrl);
      if (existing) {
        await cache.put(url, existing.clone());
        return true;
      }
    }
    // Chamadas feitas pelo próprio SW não são interceptadas por este mesmo SW.
    const response = await fetch(actualUrl, { cache: 'reload' });
    if (!response.ok || response.status === 206) return false;
    if (actualUrl !== url) await cache.put(actualUrl, response.clone());
    await cache.put(url, response);
    return true;
  } catch (error) {
    console.warn('[Guia offline] Não foi possível salvar:', path, error);
    return false;
  }
}

// Atualiza somente as cinco capas que foram substituídas no GitHub.
// Mantém as mesmas chaves .png e .webp para que o contador offline e as páginas
// continuem funcionando. Não mexe em livros nem nas páginas de Reabilitação Oral.
// Se não houver internet, conserva as imagens anteriores e tenta novamente
// na próxima atualização manual dos conteúdos.
async function refreshOptimizedCovers(cache) {
  const marker = absolute(`__covers_revision_${COVER_REVISION}`);
  if (await cache.match(marker)) return true;

  const result = await queue(
    [...COVER_ALIASES.keys()],
    path => saveLocal(cache, path, true),
    3
  );
  if (result.succeeded !== result.total) return false;

  await cache.put(marker, new Response(COVER_REVISION, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  }));
  return true;
}

async function saveExternal(cache, pair) {
  const [url, mode] = pair;
  try {
    const request = new Request(url, { mode, credentials: 'omit' });
    const response = await fetch(request);
    if (!response.ok && response.type !== 'opaque') return false;
    await cache.put(request, response);
    return true;
  } catch (error) {
    console.warn('[Guia offline] Dependência externa indisponível:', url, error);
    return false;
  }
}

async function notify(data) {
  const clients = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
  await Promise.all(clients.map(client => client.postMessage({ type: 'GUIA_OFFLINE_STATUS', ...data })));
}

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const shell = await caches.open(SHELL_CACHE);
    if (!await saveLocal(shell, 'index.html')) {
      throw new Error('É necessário carregar a página inicial com internet para ativar o modo offline.');
    }
    await queue(SHELL_FILES.filter(path => path !== 'index.html'),
      path => saveLocal(shell, path), 4);
    const home = await shell.match(absolute('index.html'));
    await shell.put(absolute(''), home.clone());

    // As capas compactadas têm poucos KB: renova apenas essas cinco imagens.
    // Preserva o mesmo cache de conteúdo e evita baixar novamente livros grandes.
    const contentCache = await caches.open(CONTENT_CACHE);
    await refreshOptimizedCovers(contentCache);

    // O funcionamento de Tailwind, Lucide e PDF.js offline depende dessas
    // bibliotecas externas. Falhas são não fatais; podem ser tentadas pelo botão.
    const external = await caches.open(EXTERNAL_CACHE);
    await queue(EXTERNAL_FILES, pair => saveExternal(external, pair), 3);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    // Preserva downloads anteriores, excluindo somente caches de interface antigos.
    await Promise.all(keys.filter(key =>
      key.startsWith(PREFIX + 'shell-') && key !== SHELL_CACHE
    ).map(key => caches.delete(key)));
    await self.clients.claim();
    // Não inicia automaticamente os downloads grandes na abertura do app.
  })());
});

// Corrige bug da versão anterior: cada match() precisa ser aguardado.
async function cachedLocal(request, ignoreSearch = true) {
  for (const name of [SHELL_CACHE, CONTENT_CACHE]) {
    const cache = await caches.open(name);
    const hit = await cache.match(request, { ignoreSearch });
    if (hit) return hit;
  }
  return null;
}

const pdfBuffers = new Map();
async function rangeResponse(cached, rangeHeader) {
  if (!rangeHeader) return cached;
  const match = /^bytes=(\d*)-(\d*)$/i.exec(rangeHeader.trim());
  if (!match || (!match[1] && !match[2])) return cached;

  const key = cached.url || 'manual.pdf';
  let bytes = pdfBuffers.get(key);
  if (!bytes) {
    bytes = await cached.arrayBuffer();
    // Limita o consumo de memória a um único PDF por vez.
    pdfBuffers.clear();
    pdfBuffers.set(key, bytes);
  }
  const size = bytes.byteLength;
  const suffix = match[1] === '';
  const start = suffix ? Math.max(0, size - Number(match[2])) : Number(match[1]);
  const end = suffix ? size - 1 : (match[2] ? Math.min(size - 1, Number(match[2])) : size - 1);
  if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) ||
      start < 0 || start > end || start >= size) {
    return new Response(null, { status: 416, headers: { 'Content-Range': `bytes */${size}` } });
  }
  const partial = bytes.slice(start, end + 1);
  return new Response(partial, {
    status: 206,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Length': String(partial.byteLength),
      'Content-Range': `bytes ${start}-${end}/${size}`,
      'Accept-Ranges': 'bytes'
    }
  });
}

async function remember(request, response, cacheName) {
  if (!response || response.status === 206 || !(response.ok || response.type === 'opaque')) return;
  try {
    const cache = await caches.open(cacheName);
    await cache.put(request, response.clone());
  } catch (error) {
    console.warn('[Guia offline] Espaço insuficiente ou falha no cache:', error);
  }
}

function unavailablePage() {
  return new Response(
    '<!doctype html><html lang="pt-BR"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Guia Clínico</title>' +
    '<style>body{font:16px system-ui;background:#111827;color:white;text-align:center;min-height:85vh;display:grid;place-items:center;padding:24px}a{color:#67e8f9}</style>' +
    '<main><h1>Esta página ainda não foi salva</h1><p>Conecte-se à internet e use “Baixar conteúdos”.</p><a href="./index.html">Início do Guia Clínico</a></main></html>',
    { status: 503, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
  );
}

async function localFetch(event, url) {
  const request = event.request;
  const isDocument = request.mode === 'navigate' || request.destination === 'document';
  const isPdf = url.pathname.toLowerCase().endsWith('.pdf');
  const lookup = url.pathname === BASE.pathname ? absolute('index.html') : request;
  const hit = await cachedLocal(lookup);

  if (hit) {
    if (isPdf) return rangeResponse(hit, request.headers.get('range'));

    // Abre imediatamente a cópia local. Atualiza páginas/scripts pequenos
    // em segundo plano, sem atrasar a navegação nem mostrar tela de erro offline.
    if (self.navigator?.onLine !== false &&
        (isDocument || /\.(?:html?|js|css|webmanifest)$/i.test(url.pathname))) {
      event.waitUntil((async () => {
        try {
          const response = await fetch(request, { cache: 'no-cache' });
          if (response.ok) await remember(request, response, SHELL_CACHE);
        } catch (_) { /* offline: usa a cópia local sem atraso */ }
      })());
    }
    return hit;
  }

  try {
    const response = await fetch(request);
    if (response.ok && response.status !== 206) {
      const dest = isPdf || /\.(?:png|webp|jpe?g|svg)$/i.test(url.pathname)
        ? CONTENT_CACHE : SHELL_CACHE;
      event.waitUntil(remember(request, response, dest));
    }
    return response;
  } catch (_) {
    return isDocument ? unavailablePage() : Response.error();
  }
}

async function externalFetch(event) {
  const request = event.request;
  const cache = await caches.open(EXTERNAL_CACHE);
  const cached = await cache.match(request, { ignoreVary: true });
  if (cached) return cached;
  try {
    const response = await fetch(request);
    event.waitUntil(remember(request, response, EXTERNAL_CACHE));
    return response;
  } catch (_) {
    return Response.error();
  }
}

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin === self.location.origin && url.pathname.startsWith(BASE.pathname)) {
    event.respondWith(localFetch(event, url));
  } else if (EXTERNAL_HOSTS.has(url.hostname)) {
    event.respondWith(externalFetch(event));
  }
});

let activeDownload = null;
async function downloadAll() {
  const shell = await caches.open(SHELL_CACHE);
  const core = await queue(SHELL_FILES, path => saveLocal(shell, path), 3);
  const externalCache = await caches.open(EXTERNAL_CACHE);
  const external = await queue(EXTERNAL_FILES, item => saveExternal(externalCache, item), 3);
  const contentCache = await caches.open(CONTENT_CACHE);
  await refreshOptimizedCovers(contentCache);
  // Download incremental: evita repetir os arquivos grandes já armazenados.
  const content = await queue(CONTENT_FILES, async path => {
    if (await contentCache.match(absolute(path))) return true;
    return saveLocal(contentCache, path);
  }, 3);
  await notify({ phase: 'ready', shell: core, external, content });
}

self.addEventListener('message', event => {
  if (event.data?.type !== 'GUIA_CACHE_AGAIN') return;
  if (!activeDownload) {
    activeDownload = downloadAll().catch(async error => {
      console.warn('[Guia offline] Download interrompido:', error);
      await notify({ phase: 'ready', content: { succeeded: 0, total: CONTENT_FILES.length },
        external: { succeeded: 0, total: EXTERNAL_FILES.length } });
    }).finally(() => { activeDownload = null; });
  }
  event.waitUntil(activeDownload);
});
