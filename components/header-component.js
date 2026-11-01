/**
 * Guia Clínico — cabeçalho compartilhado com instalação PWA.
 * Caminho: /components/header-component.js
 *
 * O botão "Instalar" usa beforeinstallprompt quando disponível.
 * Nos demais navegadores, apresenta instruções de instalação manual.
 * Não usa Firebase, não altera o tema nem as funções do app.js.
 */
(function () {
    'use strict';

    if (customElements.get('site-header')) return;

    let installPrompt = null;
    let installationConfirmed = false;

    function runningAsInstalledApp() {
        return installationConfirmed ||
            (typeof window.matchMedia === 'function' &&
                window.matchMedia('(display-mode: standalone)').matches) ||
            window.navigator.standalone === true;
    }

    function updateInstallButton() {
        document.querySelectorAll('site-header #install-app-btn').forEach((button) => {
            button.classList.toggle('hidden', runningAsInstalledApp());
        });
    }

    // Escutar antes de montar o botão, para não perder o evento do navegador.
    window.addEventListener('beforeinstallprompt', (event) => {
        event.preventDefault();
        installPrompt = event;
        updateInstallButton();
    });

    window.addEventListener('appinstalled', () => {
        installationConfirmed = true;
        installPrompt = null;
        updateInstallButton();
        document.querySelector('#guia-install-dialog')?.close();
    });

    function installInstructions() {
        const agent = navigator.userAgent || '';
        const appleMobile = /iPad|iPhone|iPod/i.test(agent) ||
            (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        const android = /Android/i.test(agent);

        if (appleMobile) {
            return {
                heading: 'Adicionar à Tela de Início',
                instructions: 'Abra o menu Compartilhar do navegador, procure “Adicionar à Tela de Início” e confirme. Se não encontrar a opção, tente abrir o site no Safari.'
            };
        }
        if (android) {
            return {
                heading: 'Instalar no Android',
                instructions: 'No Chrome, abra o menu (⋮) e escolha “Instalar aplicativo” ou “Adicionar à tela inicial”. Se a opção não aparecer, confira se o navegador permite instalar este site.'
            };
        }
        return {
            heading: 'Instalar no computador',
            instructions: 'Abra o menu do Chrome ou Edge e procure “Instalar aplicativo”, “Instalar esta página” ou uma opção de instalação na barra de endereços. A disponibilidade depende do navegador.'
        };
    }

    function showInstallInstructions() {
        const { heading, instructions } = installInstructions();
        const existing = document.getElementById('guia-install-dialog');
        if (existing) {
            if (typeof existing.showModal === 'function' && !existing.open) existing.showModal();
            return;
        }
        const dialog = document.createElement('dialog');
        dialog.id = 'guia-install-dialog';
        dialog.className = 'w-[calc(100%-2rem)] max-w-md rounded-2xl border border-gray-200 dark:border-gray-700 p-0 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-2xl backdrop:bg-black/50';
        dialog.innerHTML = `
            <div class="p-6 sm:p-7 space-y-4">
                <div class="flex items-start gap-3">
                    <span class="p-3 rounded-xl bg-cyan-50 text-primary dark:bg-cyan-900/30 dark:text-cyan-400" aria-hidden="true">
                        <i data-lucide="download" class="w-6 h-6"></i>
                    </span>
                    <div>
                        <h2 id="guia-install-title" class="text-lg font-bold">${heading}</h2>
                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Guia Clínico — UFC Sobral</p>
                    </div>
                </div>
                <p class="text-sm leading-relaxed text-gray-700 dark:text-gray-300" id="guia-install-instructions"></p>
                <button type="button" id="guia-install-close"
                    class="w-full py-2.5 px-4 bg-primary hover:bg-secondary text-white rounded-lg font-semibold text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                    Entendi
                </button>
            </div>
        `;
        // A instrução é texto plano; evita interpolação de HTML não confiável.
        dialog.querySelector('#guia-install-instructions').textContent = instructions;
        dialog.setAttribute('aria-labelledby', 'guia-install-title');
        document.body.appendChild(dialog);
        dialog.querySelector('#guia-install-close').addEventListener('click', () => dialog.close());
        dialog.addEventListener('close', () => dialog.remove(), { once: true });
        if (typeof dialog.showModal === 'function') {
            dialog.showModal();
            if (window.lucide && typeof window.lucide.createIcons === 'function') {
                window.lucide.createIcons();
            }
        } else {
            dialog.remove();
            window.alert(`${heading}\n\n${instructions}`);
        }
    }

    async function requestAppInstallation() {
        if (runningAsInstalledApp()) {
            updateInstallButton();
            return;
        }
        if (!installPrompt) {
            showInstallInstructions();
            return;
        }
        const deferred = installPrompt;
        installPrompt = null; // O evento só permite uma chamada a prompt().
        try {
            await deferred.prompt();
            if (deferred.userChoice) {
                await deferred.userChoice; // Aceitar ou recusar é escolha do usuário.
            }
        } catch (error) {
            console.info('Instalação direta indisponível:', error);
            showInstallInstructions();
        }
    }

    // Download manual: o sw.js existente ja reconhece a mensagem GUIA_CACHE_AGAIN.
    // O progresso mostra os recursos locais comprovadamente presentes no Cache Storage.
    const OFFLINE_FILES = [
        'banco_de_dados/livros/manual.pdf',
        'banco_de_dados/livros/odontograma.pdf',
        'capas/dentistica.png', 'capas/periodontia.png',
        'capas/endodontia.png', 'capas/cirurgia.png', 'capas/manual.png',
        ...Array.from({ length: 107 }, (_, i) =>
            `reabilitacao-oral/assets/paginas/pagina-${String(i + 1).padStart(3, '0')}.webp`)
    ];

    async function getOfflineCount() {
        if (!('caches' in window)) return 0;
        const names = (await caches.keys())
            .filter(name => name.startsWith('guia-clinico-offline-content-')).sort();
        if (!names.length) return 0;
        const cache = await caches.open(names[names.length - 1]);
        const keys = await cache.keys();
        const cached = new Set(keys.map(request => new URL(request.url).pathname));
        const base = new URL('./', window.location.href);
        return OFFLINE_FILES.reduce((sum, path) =>
            sum + Number(cached.has(new URL(path, base).pathname)), 0);
    }

    function showOfflineDialog() {
        const existing = document.getElementById('guia-offline-dialog');
        if (existing) {
            if (!existing.open && typeof existing.showModal === 'function') existing.showModal();
            return;
        }
        const dialog = document.createElement('dialog');
        dialog.id = 'guia-offline-dialog';
        dialog.className = 'w-[calc(100%-2rem)] max-w-md rounded-2xl border border-gray-200 dark:border-gray-700 p-0 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-2xl backdrop:bg-black/60';
        dialog.setAttribute('aria-labelledby', 'guia-offline-title');
        dialog.innerHTML = `
            <div class="p-5 sm:p-7 space-y-4">
                <div class="flex items-center gap-3">
                    <span class="p-3 rounded-xl bg-cyan-50 text-primary dark:bg-cyan-900/30 dark:text-cyan-400" aria-hidden="true">
                        <i data-lucide="cloud-download" class="w-6 h-6"></i>
                    </span>
                    <div class="min-w-0">
                        <h2 id="guia-offline-title" class="text-lg font-bold">Conteúdo para uso offline</h2>
                        <p class="text-xs text-gray-500 dark:text-gray-400">Guia Clínico — UFC Sobral</p>
                    </div>
                </div>
                <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    Baixe as páginas, o Manual de Biossegurança, o livro do Odontograma e as imagens de Reabilitação Oral
                    para consultar sem internet. Recomenda-se Wi-Fi e aproximadamente 100 MB de espaço livre.
                </p>
                <p class="text-xs text-amber-700 dark:text-amber-300">
                    Livros externos do Google Drive e o formulário de feedback precisam de internet.
                </p>
                <div class="space-y-2">
                    <p id="guia-offline-status" class="text-sm font-medium" role="status" aria-live="polite">Verificando arquivos salvos...</p>
                    <div class="h-2.5 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden" aria-label="Progresso do download">
                        <div id="guia-offline-bar" class="h-full bg-primary transition-all duration-300" style="width:0%"></div>
                    </div>
                    <p id="guia-offline-count" class="text-xs text-gray-500 dark:text-gray-400">Verificando...</p>
                </div>
                <div class="flex flex-wrap gap-2">
                    <button type="button" id="guia-offline-start"
                        class="flex-1 min-w-[150px] py-2.5 px-4 bg-primary hover:bg-secondary disabled:opacity-60 disabled:cursor-wait text-white rounded-lg font-semibold text-sm">
                        Baixar conteúdos
                    </button>
                    <button type="button" id="guia-offline-close"
                        class="py-2.5 px-4 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 text-sm font-semibold">
                        Fechar
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(dialog);
        const status = dialog.querySelector('#guia-offline-status');
        const count = dialog.querySelector('#guia-offline-count');
        const bar = dialog.querySelector('#guia-offline-bar');
        const start = dialog.querySelector('#guia-offline-start');
        const close = dialog.querySelector('#guia-offline-close');
        const total = OFFLINE_FILES.length;
        let active = false;
        let pollId = null;
        let lastCount = 0;

        function display(number, description) {
            lastCount = number;
            bar.style.width = `${Math.round(100 * number / total)}%`;
            count.textContent = `${number} de ${total} arquivos de conteúdo local armazenados`;
            if (description) status.textContent = description;
        }
        async function refresh() {
            try {
                const number = await getOfflineCount();
                display(number);
                return number;
            } catch (error) {
                console.warn('Não foi possível consultar o cache:', error);
                return lastCount;
            }
        }
        async function completed(event) {
            if (!active || event.data?.type !== 'GUIA_OFFLINE_STATUS' || event.data.phase !== 'ready') return;
            active = false;
            window.clearInterval(pollId);
            pollId = null;
            const number = await refresh();
            const external = event.data.external || {};
            status.textContent = number === total
                ? 'Materiais locais salvos! Você pode testar sem internet.'
                : 'Download parcial. Alguns arquivos não foram armazenados; tente novamente com internet.';
            if (external.total && external.succeeded < external.total) {
                count.textContent += ` • Dependências externas: ${external.succeeded}/${external.total} nesta tentativa`;
            }
            start.disabled = false;
            start.textContent = 'Atualizar conteúdo';
        }
        navigator.serviceWorker?.addEventListener('message', completed);

        start.addEventListener('click', async () => {
            if (active) return;
            if (!('serviceWorker' in navigator) || !('caches' in window)) {
                status.textContent = 'O navegador não permite armazenamento offline neste contexto.';
                return;
            }
            if (!navigator.onLine) {
                status.textContent = 'Conecte-se à internet para baixar ou atualizar os arquivos.';
                return;
            }
            active = true;
            start.disabled = true;
            start.textContent = 'Baixando...';
            status.textContent = 'Preparando o aplicativo e baixando materiais...';
            pollId = window.setInterval(refresh, 800);
            try {
                let registration = await navigator.serviceWorker.getRegistration('./');
                if (!registration) registration = await navigator.serviceWorker.register('./sw.js', { scope: './' });
                const ready = await navigator.serviceWorker.ready;
                const worker = ready.active || registration.active;
                if (!worker) throw new Error('Service Worker ainda não está ativo');
                worker.postMessage({ type: 'GUIA_CACHE_AGAIN' });
            } catch (error) {
                console.error('Falha ao solicitar download offline:', error);
                active = false;
                window.clearInterval(pollId);
                pollId = null;
                start.disabled = false;
                start.textContent = 'Tentar novamente';
                status.textContent = 'Não foi possível iniciar o download. Confira sua conexão e o arquivo sw.js.';
            }
        });
        close.addEventListener('click', () => dialog.close());
        dialog.addEventListener('close', () => {
            window.clearInterval(pollId);
            navigator.serviceWorker?.removeEventListener('message', completed);
            dialog.remove();
        }, { once: true });
        if (typeof dialog.showModal === 'function') {
            dialog.showModal();
            if (window.lucide && typeof window.lucide.createIcons === 'function') window.lucide.createIcons();
            refresh().then(number => {
                if (!active) status.textContent = number === total
                    ? 'Os materiais locais já estão armazenados. Você pode atualizá-los.'
                    : 'Escolha “Baixar conteúdos” para salvar o material no dispositivo.';
            });
        } else {
            dialog.remove();
            window.alert('Seu navegador não suporta esta janela. Abra o site num Chrome ou Edge atualizado.');
        }
    }

    class SiteHeader extends HTMLElement {
        connectedCallback() {
            this.style.display = 'block';
            this.style.position = 'sticky';
            this.style.top = '0';
            this.style.zIndex = '50';
            this.style.width = '100%';

            this.innerHTML = `
                <header class="bg-white dark:bg-gray-800 dark:border-gray-700 shadow-sm w-full border-b border-gray-100 transition-colors duration-200">
                    <div class="max-w-5xl mx-auto px-3 sm:px-4 h-16 flex items-center justify-between gap-2">
                        <a href="./index.html"
                           class="flex items-center gap-2 sm:gap-3 min-w-0 rounded-lg active:opacity-70 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                           aria-label="Ir para a página inicial do Guia Clínico">
                            <span class="bg-primary/10 dark:bg-cyan-900/30 p-2 rounded-lg text-primary dark:text-cyan-400 shrink-0" aria-hidden="true">
                                <i data-lucide="book-open-check" class="w-5 h-5"></i>
                            </span>
                            <span class="min-w-0">
                                <span class="block text-base sm:text-lg font-bold text-gray-900 dark:text-white tracking-tight leading-tight">Guia Clínico</span>
                                <span class="block text-[10px] text-gray-500 dark:text-gray-400 font-medium leading-none">Odontologia UFC Sobral</span>
                            </span>
                        </a>

                        <div class="flex items-center gap-1 xs:gap-2 shrink-0">
                            <button type="button"
                                    id="install-app-btn"
                                    class="inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary hover:bg-secondary text-white px-2.5 sm:px-3 py-2 text-xs sm:text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                    title="Instalar o Guia Clínico"
                                    aria-label="Instalar aplicativo Guia Clínico">
                                <i data-lucide="download" class="w-4 h-4" aria-hidden="true"></i>
                                <span class="hidden sm:inline">Instalar</span>
                            </button>

                            <button type="button"
                                    id="offline-download-btn"
                                    class="inline-flex items-center justify-center gap-1.5 w-9 h-9 sm:w-auto sm:h-10 sm:px-2.5 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 text-primary dark:text-cyan-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                    title="Baixar conteúdo para uso offline"
                                    aria-label="Baixar conteúdo para uso offline">
                                <i data-lucide="cloud-download" class="w-5 h-5" aria-hidden="true"></i>
                                <span class="hidden sm:inline text-xs font-semibold">Offline</span>
                            </button>

                            <button type="button"
                                    id="theme-toggle-btn"
                                    class="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 transition-colors"
                                    title="Alternar tema claro/escuro"
                                    aria-label="Alternar tema claro e escuro">
                                <i data-lucide="moon" class="w-5 h-5 block dark:hidden" aria-hidden="true"></i>
                                <i data-lucide="sun" class="w-5 h-5 hidden dark:block" aria-hidden="true"></i>
                            </button>

                            <button type="button"
                                    id="back-btn"
                                    class="hidden bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 text-gray-700 w-10 h-10 p-0 rounded-lg transition-colors items-center justify-center active:scale-95"
                                    aria-label="Voltar à página anterior"
                                    title="Voltar">
                            <span class="flex w-full h-full items-center justify-center">
                                <i data-lucide="arrow-left"
                                   class="w-5 h-5"
                                   aria-hidden="true"></i>
                            </span>
                            </button>
                        </div>
                    </div>
                </header>
            `;

            const homeLink = this.querySelector('a[href="./index.html"]');
            homeLink.addEventListener('click', (event) => {
                if (document.body.dataset.page === 'home' && typeof window.navigateTo === 'function') {
                    event.preventDefault();
                    window.navigateTo('home');
                }
            });

            this.querySelector('#install-app-btn').addEventListener('click', requestAppInstallation);
            this.querySelector('#offline-download-btn').addEventListener('click', showOfflineDialog);
            this.querySelector('#theme-toggle-btn').addEventListener('click', () => {
                if (typeof window.toggleTheme === 'function') {
                    window.toggleTheme();
                } else {
                    const dark = document.documentElement.classList.toggle('dark');
                    try {
                        localStorage.setItem('theme', dark ? 'dark' : 'light');
                    } catch (_) { /* armazenamento opcional */ }
                }
            });
            updateInstallButton();
            if (window.lucide && typeof window.lucide.createIcons === 'function') {
                window.lucide.createIcons();
            }
        }
    }

    customElements.define('site-header', SiteHeader);
})();
