/**
 * GUIA CLÍNICO — JavaScript compartilhado
 * Projeto estático compatível com GitHub Pages.
 * NÃO utiliza Firebase, login, editor ou armazenamento de protocolos no navegador.
 *
 * Estrutura esperada nos arquivos carregados ANTES deste app.js:
 *
 *   window.GuiaClinicoDB = window.GuiaClinicoDB || {};
 *
 *   // Em banco_de_dados/dentistica.js (e demais especialidades):
 *   window.GuiaClinicoDB.dentistica = {
 *     siglas:     { title: 'Siglas - Dentística', content: '<p>...</p>' },
 *     exemplos:   { title: 'Exemplos', content: '<p>...</p>' },
 *     odontograma:{ title: 'Odontograma', content: '<p>...</p>' },
 *     materiais:  { title: 'Checklist Dentística', content: '<p>...</p>' }
 *   };
 *
 *   // Em banco_de_dados/protocolos.js:
 *   window.GuiaClinicoDB.protocolos = [
 *     { id: 'identificador-unico', title: 'Título',
 *       category: 'Dentística', summary: 'Resumo', content: '<p>Texto...</p>' }
 *   ];
 *
 *   // Em banco_de_dados/prescricoes.js:
 *   window.GuiaClinicoDB.prescricoes = {
 *     analgesicos: [{ nome: 'Nome e apresentação', posologia: 'Orientação...' }],
 *     'anti-inflamatorios': [], corticosteroides: [], antibioticos: [],
 *     antifungicos: [], colutorios: [], 'corticosteroides-topicos': []
 *   };
 *
 * O conteúdo HTML nesses arquivos deve ser confiável e mantido pelos editores
 * do repositório. Os títulos, resumos e campos de texto são exibidos como texto.
 */
(function () {
    'use strict';

    const SPECIALTIES = Object.freeze({
        dentistica: 'Dentística',
        periodontia: 'Periodontia',
        endodontia: 'Endodontia',
        cirurgia: 'Cirurgia'
    });
    const CATEGORIES_ORDER = ['Dentística', 'Periodontia', 'Endodontia', 'Cirurgia', 'Geral'];
    const HOME_VIEWS = new Set(['home', 'blog', 'links', 'manual', 'feedback', 'restauracoes']);
    const PRESCRIPTION_GROUPS = [
        'analgesicos', 'anti-inflamatorios', 'corticosteroides',
        'antibioticos', 'antifungicos', 'colutorios', 'corticosteroides-topicos'
    ];

    let currentFilter = 'all';
    let postBackTarget = 'blog';
    let activePost = null;

    const byId = (id) => document.getElementById(id);
    const pageName = () => document.body?.dataset.page || 'home';
    const database = () => window.GuiaClinicoDB || {};

    function normalize(value) {
        return String(value == null ? '' : value)
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .trim()
            .toLocaleLowerCase('pt-BR');
    }

    function refreshIcons() {
        if (window.lucide && typeof window.lucide.createIcons === 'function') {
            window.lucide.createIcons();
        }
    }

    // 1. Tema persistente (o localStorage guarda apenas a preferência visual).
    function initTheme() {
        let saved = null;
        try { saved = localStorage.getItem('theme'); } catch (_) { /* privacidade */ }
        const systemDark = typeof window.matchMedia === 'function' &&
            window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.classList.toggle('dark', saved === 'dark' || (!saved && systemDark));
    }

    function toggleTheme() {
        const isDark = document.documentElement.classList.toggle('dark');
        try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch (_) { /* opcional */ }
        refreshIcons();
    }

    // Navegação rápida: reaproveita o documento, cabeçalho, rodapé e bibliotecas.
    // Restrita às páginas principais do Guia Clínico. Leitor PDF e Reabilitação
    // Oral continuam como páginas independentes, com seus próprios controles.
    const ROUTE_FILES = Object.freeze({
        'index.html': 'home',
        'dentistica.html': 'dentistica',
        'periodontia.html': 'periodontia',
        'endodontia.html': 'endodontia',
        'cirurgia.html': 'cirurgia',
        'prescricoes.html': 'prescricoes'
    });
    const SITE_BASE = new URL('./', document.currentScript?.src || location.href);
    const pagePromises = new Map();
    const scriptPromises = new Map();
    const storedScroll = new Map();
    let navigationVersion = 0;
    let didWarm = false;

    // Inclui arquivos já carregados pelo HTML atual, para não executá-los duas vezes.
    document.querySelectorAll('script[src]').forEach((script) => {
        scriptPromises.set(new URL(script.src, location.href).href, Promise.resolve());
    });

    function routeOf(value) {
        const url = new URL(value, location.href);
        if (url.origin !== SITE_BASE.origin || !url.pathname.startsWith(SITE_BASE.pathname)) return null;
        const file = url.pathname.slice(SITE_BASE.pathname.length) || 'index.html';
        return Object.prototype.hasOwnProperty.call(ROUTE_FILES, file) ? {
            url, file, page: ROUTE_FILES[file]
        } : null;
    }

    function getRouteDocument(file) {
        if (!pagePromises.has(file)) {
            const url = new URL(file, SITE_BASE);
            const loading = fetch(url.href).then((response) => {
                if (!response.ok) throw new Error(`Página não disponível: ${file}`);
                return response.text();
            }).then((html) => {
                const doc = new DOMParser().parseFromString(html, 'text/html');
                if (!doc.querySelector('main') || doc.body?.dataset.page !== ROUTE_FILES[file]) {
                    throw new Error(`Documento de destino inválido: ${file}`);
                }
                return doc;
            }).catch((error) => {
                pagePromises.delete(file); // permite tentar novamente quando houver rede
                throw error;
            });
            pagePromises.set(file, loading);
        }
        return pagePromises.get(file);
    }

    // Bancos de dados de cada especialidade são os únicos scripts adicionais
    // necessários; app.js, Tailwind, Lucide e os componentes permanecem ativos.
    function loadDataScript(src) {
        const url = new URL(src, SITE_BASE).href;
        if (scriptPromises.has(url)) return scriptPromises.get(url);
        const loading = new Promise((resolve) => {
            const element = document.createElement('script');
            element.src = url;
            element.async = true;
            element.onload = resolve;
            element.onerror = () => {
                console.warn('Banco de dados indisponível:', url);
                resolve(); // não impede a navegação nem afeta outras especialidades
            };
            document.head.appendChild(element);
        });
        scriptPromises.set(url, loading);
        return loading;
    }

    async function preparePageScripts(doc) {
        const scripts = [...doc.querySelectorAll('script[src]')]
            .map((script) => script.getAttribute('src'))
            .filter((src) => src && new URL(src, SITE_BASE).pathname
                .startsWith(new URL('banco_de_dados/', SITE_BASE).pathname));
        // Os protocolos compartilham uma única base global: execução sequencial.
        for (const src of scripts) await loadDataScript(src);
    }

    async function navigateDocument(value, { addHistory = true } = {}) {
        const target = routeOf(value);
        if (!target) {
            window.location.assign(value);
            return;
        }
        const sequence = ++navigationVersion;
        const current = routeOf(location.href);
        if (pageName() === target.page) {
            if (addHistory && location.href !== target.url.href) {
                history.pushState({ page: target.page }, '', target.url.href);
            }
            syncRouteFromHash();
            return;
        }

        try {
            const doc = await getRouteDocument(target.file);
            await preparePageScripts(doc);
            if (sequence !== navigationVersion) return;
            const previousMain = document.querySelector('main');
            const nextMain = doc.querySelector('main');
            if (!previousMain || !nextMain) throw new Error('Área principal ausente');

            if (addHistory) storedScroll.set(location.pathname, scrollY);
            const restore = addHistory ? 0 : (storedScroll.get(target.url.pathname) || 0);
            if (addHistory) history.pushState({ page: target.page }, '', target.url.href);
            document.body.dataset.page = target.page;
            document.title = doc.title || document.title;
            const description = doc.querySelector('meta[name="description"]')?.content;
            const descriptionMeta = document.querySelector('meta[name="description"]');
            if (description && descriptionMeta) descriptionMeta.content = description;

            // Não remonta o cabeçalho/rodapé e não recarrega bibliotecas pesadas.
            previousMain.replaceWith(document.importNode(nextMain, true));
            installRestorationFlow();
            if (target.page === 'prescricoes') renderPrescricoes();
            const fragment = decodeURIComponent(target.url.hash.replace(/^#/, ''));
            const chosenView = fragment && byId(`view-${fragment}`) ? fragment : target.page;
            navigateTo(chosenView, { updateHash: false, scroll: false });
            window.scrollTo({ top: restore, behavior: 'instant' });
        } catch (error) {
            console.warn('Navegação rápida indisponível, usando navegação normal:', error);
            // Sempre há um caminho de recuperação se o download falhar.
            window.location.assign(target.url.href);
        }
    }

    // Captura somente links HTML do próprio Guia Clínico. Não interfere em
    // arquivos PDF, Google Drive, links externos ou atalhos de acessibilidade.
    document.addEventListener('click', (event) => {
        if (event.defaultPrevented || event.button !== 0 ||
            event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        const link = event.target.closest?.('a[href]');
        if (!link || link.hasAttribute('download') ||
            (link.target && link.target !== '_self')) return;
        const target = routeOf(link.href);
        if (!target) return;
        const current = routeOf(location.href);
        if (target.page === current?.page) return;
        event.preventDefault();
        void navigateDocument(target.url.href);
    }, true);

    // Prerrecuperação leve: HTMLs de aproximadamente 10–25 KB e seus bancos
    // JS pequenos. As capas e os livros não são baixados por esta rotina.
    function warmPages() {
        if (didWarm) return;
        didWarm = true;
        const current = routeOf(location.href)?.file;
        const names = Object.keys(ROUTE_FILES).filter((file) => file !== current);
        const documents = names.map((file) => getRouteDocument(file).catch(() => null));
        void (async () => {
            for (const pending of documents) {
                const doc = await pending;
                if (doc) await preparePageScripts(doc);
            }
        })();
    }


    // ─────────────────────────────────────────────────────────────────
    // PLANEJADOR DE DENTÍSTICA: classe → técnica → material → protocolo.
    // Interface criada dinamicamente para não exigir alterações em index.html
    // ou dentistica.html. Os dados vêm de protocolos_dentistica.js.
    // ─────────────────────────────────────────────────────────────────
    const FLOW_ID = 'restauracoes';
    const FLOW_STEP_LABELS = ['Classe', 'Tipo', 'Material', 'Resultado'];
    let flowReturnView = 'blog';
    let restorationState = { step: 0, classe: null, variacao: null, material: null, apoio: null };

    const dentalFlow = () => database().fluxoDentistica;

    function dentalElement(tag, className, text) {
        const el = document.createElement(tag);
        if (className) el.className = className;
        if (text !== undefined) el.textContent = text;
        return el;
    }

    function dentalButton(label, onClick, extra = '') {
        const button = dentalElement('button',
            'w-full text-left flex items-center justify-between gap-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-4 hover:border-primary dark:hover:border-cyan-400 hover:bg-cyan-50 dark:hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-primary transition-colors active:scale-[0.99] ' + extra);
        button.type = 'button';
        const name = dentalElement('span', 'font-semibold text-gray-800 dark:text-gray-100', label);
        const arrow = dentalElement('span', 'text-primary dark:text-cyan-400 font-bold', '›');
        arrow.setAttribute('aria-hidden', 'true');
        button.append(name, arrow);
        button.addEventListener('click', onClick);
        return button;
    }

    function installRestorationFlow() {
        // Aprovado para publicação no Guia Clínico; não é um laudo de validação clínica.
        const flow = dentalFlow();
        for (const protocolo of (flow?.todos || [])) {
            protocolo.publicacao = 'aprovado';
        }
        const main = document.querySelector('main');
        if (!main) return;

        if (!byId(`view-${FLOW_ID}`)) {
            const section = dentalElement('section', 'view-section space-y-5');
            section.id = `view-${FLOW_ID}`;
            section.setAttribute('aria-label', 'Fluxograma de Dentística');
            section.innerHTML = `
                <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm p-4 sm:p-7">
                    <div class="mb-4"><span class="inline-flex rounded-full px-3 py-1 text-xs font-bold text-primary dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/30">DENTÍSTICA · GUIA INTERATIVO</span></div>
                    <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Planejador de restaurações</h1>
                    <p class="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2 mb-5">Escolha a classe, a variação e o material para consultar os materiais necessários e o passo a passo.</p>
                    <div id="restauracoes-progress" class="grid grid-cols-4 gap-1 sm:gap-3 mb-5" aria-label="Etapas de seleção"></div>
                    <div id="restauracoes-selections" class="flex flex-wrap gap-2 mb-4"></div>
                    <div id="restauracoes-panel" aria-live="polite"></div>
                    <div class="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700 flex gap-3 flex-wrap items-center justify-between">
                        <button type="button" id="restauracoes-previous" class="px-4 py-2.5 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 font-semibold text-sm">Etapa anterior</button>
                        <button type="button" id="restauracoes-restart" class="px-4 py-2.5 bg-primary hover:bg-secondary text-white rounded-lg font-semibold text-sm">Reiniciar seleção</button>
                    </div>
                </div>`;
            main.appendChild(section);
            byId('restauracoes-previous').addEventListener('click', () => {
                if (restorationState.apoio) {
                    restorationState = { step: 0, classe: null, variacao: null, material: null, apoio: null };
                } else if (restorationState.step > 0) {
                    restorationState.step--;
                } else {
                    navigateTo(flowReturnView || 'blog');
                    return;
                }
                renderRestorationStep();
            });
            byId('restauracoes-restart').addEventListener('click', () => {
                restorationState = { step: 0, classe: null, variacao: null, material: null, apoio: null };
                renderRestorationStep();
            });
        }

        // Em Dentística, uma aba de seleção substitui as duas abas antigas.
        if (pageName() === 'dentistica') {
            const materials = byId('tab-btn-dentistica-instrumentais');
            const protocols = byId('tab-btn-dentistica-protocolos');
            if (materials) materials.style.display = 'none';
            if (protocols && protocols.dataset.guidedFlow !== 'true') {
                protocols.dataset.guidedFlow = 'true';
                protocols.innerHTML = '<i data-lucide="list-tree" class="w-5 h-5" aria-hidden="true"></i> Restaurações';
                protocols.setAttribute('aria-label', 'Abrir planejador de restaurações');
                protocols.onclick = () => openRestorationFlow();
            }
        }

        // O protocolo guiado também aparece em "Protocolos" da página inicial.
        if (pageName() === 'home' && byId('view-blog') && !byId('restauracoes-entry')) {
            const entry = dentalElement('div', 'bg-white dark:bg-gray-800 border border-cyan-200 dark:border-cyan-800 rounded-2xl p-5 sm:p-6 shadow-sm');
            entry.id = 'restauracoes-entry';
            entry.innerHTML = '<div class="text-xs font-bold text-primary dark:text-cyan-400 mb-1">DENTÍSTICA</div><h3 class="text-xl font-bold text-gray-900 dark:text-white">Escolher restauração passo a passo</h3><p class="text-sm text-gray-600 dark:text-gray-300 mt-2">Informe a classe, o tipo de restauração e o material para visualizar o procedimento e os materiais necessários.</p>';
            const go = dentalElement('button', 'mt-4 w-full sm:w-auto rounded-xl bg-primary hover:bg-secondary px-5 py-3 text-white font-bold text-sm', 'Iniciar fluxograma de Dentística');
            go.type = 'button';
            go.addEventListener('click', () => openRestorationFlow());
            entry.appendChild(go);
            byId('view-blog').prepend(entry);
        }
        refreshIcons();
    }

    function openRestorationFlow() {
        flowReturnView = byId('view-blog')?.classList.contains('active') ? 'blog' :
            (pageName() === 'dentistica' ? 'dentistica' : 'home');
        restorationState = { step: 0, classe: null, variacao: null, material: null, apoio: null };
        navigateTo(FLOW_ID);
    }

    function renderRestorationStep() {
        const panel = byId('restauracoes-panel');
        const progress = byId('restauracoes-progress');
        const choices = byId('restauracoes-selections');
        if (!panel || !progress || !choices) return;
        const flow = dentalFlow();
        progress.replaceChildren();
        choices.replaceChildren();
        panel.replaceChildren();
        const step = restorationState.step;
        FLOW_STEP_LABELS.forEach((label, index) => {
            const active = index === step;
            const finished = index < step;
            const element = dentalElement('div',
                'min-w-0 min-h-[78px] rounded-lg px-1 py-3 border flex flex-col items-center justify-center gap-1 text-center ' +
                (active ? 'border-primary bg-cyan-50 text-primary dark:bg-cyan-900/30 dark:text-cyan-300' :
                finished ? 'border-green-200 bg-green-50 text-green-700 dark:bg-green-900/20 dark:border-green-800 dark:text-green-300' :
                'border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500'));
            const number = dentalElement('span', 'block text-base sm:text-lg font-bold leading-none', `${index + 1}.`);
            const name = dentalElement('span', 'block w-full text-[11px] sm:text-sm font-semibold leading-tight break-words', label);
            element.append(number, name);
            element.setAttribute('aria-label', `Etapa ${index + 1}: ${label}`);
            if (active) element.setAttribute('aria-current', 'step');
            progress.appendChild(element);
        });

        const previous = byId('restauracoes-previous');
        if (previous) previous.textContent = step === 0 && !restorationState.apoio ? 'Voltar à página' : 'Etapa anterior';

        if (!flow || !Array.isArray(flow.classes) || typeof flow.selecionar !== 'function') {
            const error = dentalElement('div', 'rounded-xl border border-amber-300 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-700 p-5 text-sm text-amber-900 dark:text-amber-200');
            error.textContent = 'Para ativar o fluxograma, publique primeiro a versão atualizada de banco_de_dados/protocolos_dentistica.js. O restante do site continua disponível.';
            panel.appendChild(error);
            return;
        }

        const c = flow.classes.find(item => item.id === restorationState.classe);
        const variacao = c?.variacoes?.find(item => item.id === restorationState.variacao);
        const material = flow.materiais?.find(item => item.id === restorationState.material);
        const selectedItems = [
            [c?.rotulo, 0], [variacao?.rotulo, 1], [material?.rotulo, 2]
        ];
        for (const [label, destination] of selectedItems) {
            if (!label) continue;
            const btn = dentalElement('button', 'text-xs px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-700', label + ' ✎');
            btn.type = 'button';
            btn.title = 'Alterar seleção';
            btn.onclick = () => { restorationState.apoio = null; restorationState.step = destination; renderRestorationStep(); };
            choices.appendChild(btn);
        }
        const heading = (label, detail) => {
            panel.append(dentalElement('h2', 'text-xl font-bold text-gray-900 dark:text-white mb-1', label));
            if (detail) panel.append(dentalElement('p', 'text-sm text-gray-500 dark:text-gray-400 mb-4', detail));
        };
        const grid = () => {
            const element = dentalElement('div', 'grid grid-cols-1 sm:grid-cols-2 gap-3');
            panel.appendChild(element);
            return element;
        };

        if (restorationState.apoio) {
            heading(restorationState.apoio.title || 'Procedimento de apoio', 'Materiais e sequência do documento original');
            showRestorationResult(panel, restorationState.apoio);
            return;
        }
        if (step === 0) {
            heading('Qual é a classe da restauração?', 'Selecione a classificação da cavidade.');
            const area = grid();
            for (const option of flow.classes) {
                area.appendChild(dentalButton(option.rotulo, () => {
                    restorationState = { step: 1, classe: option.id, variacao: null, material: null, apoio: null };
                    renderRestorationStep();
                }));
            }
            const apoio = dentalElement('div', 'border-t border-gray-100 dark:border-gray-700 pt-5 mt-6');
            apoio.append(dentalElement('h3', 'font-bold text-gray-800 dark:text-gray-100 mb-2', 'Procedimentos de apoio'));
            const apoioGrid = dentalElement('div', 'grid grid-cols-1 sm:grid-cols-2 gap-3');
            for (const id of ['dentistica-aplicacao-selante', 'dentistica-isolamento-absoluto']) {
                const entry = (flow.protocolosOriginais || []).find(item => item.id === id);
                if (entry) apoioGrid.append(dentalButton(entry.title, () => {
                    restorationState.apoio = entry;
                    restorationState.step = 3;
                    renderRestorationStep();
                }));
            }
            apoio.append(apoioGrid);
            panel.append(apoio);
            return;
        }
        if (step === 1) {
            heading('Qual é o tipo de restauração?', c?.rotulo || 'Selecione a técnica disponível.');
            const area = grid();
            for (const option of c?.variacoes || []) {
                area.append(dentalButton(option.rotulo, () => {
                    restorationState.variacao = option.id;
                    restorationState.material = null;
                    restorationState.step = 2;
                    renderRestorationStep();
                }));
            }
            return;
        }
        if (step === 2) {
            heading('Qual material será utilizado?', 'Selecione o material restaurador para consultar o procedimento correspondente.');
            const area = grid();
            for (const option of flow.materiais || []) {
                area.append(dentalButton(option.rotulo, () => {
                    restorationState.material = option.id;
                    restorationState.step = 3;
                    renderRestorationStep();
                }));
            }
            return;
        }
        heading('Materiais e passo a passo', 'Seleção realizada para consulta do protocolo.');
        const record = flow.selecionar({
            classe: restorationState.classe,
            variacao: restorationState.variacao,
            material: restorationState.material
        });
        if (!record) {
            panel.append(dentalElement('p', 'p-4 rounded-xl bg-amber-50 text-amber-900 dark:bg-amber-900/20 dark:text-amber-200',
                'Não há protocolo cadastrado para essa combinação. Escolha outro material ou técnica.'));
            return;
        }
        showRestorationResult(panel, record);
    }

    // Oculta apenas as notas de procedência no fim dos protocolos de Dentística.
    // As fontes permanecem registradas no banco de dados para rastreabilidade.
    function protocolContentForDisplay(record) {
        const markup = String(record?.content || '<p>Conteúdo não disponível.</p>');
        if (normalize(record?.category) !== 'dentistica') return markup;
        const template = document.createElement('template');
        template.innerHTML = markup;
        const labels = new Set(['fonte do passo a passo', 'base da lista de materiais', 'fontes']);
        template.content.querySelectorAll('p').forEach(paragraph => {
            const strong = paragraph.querySelector('strong');
            const label = normalize(strong?.textContent || '').replace(/:\s*$/, '');
            if (!labels.has(label)) return;
            const previous = paragraph.previousElementSibling;
            if (previous?.tagName === 'HR') previous.remove();
            paragraph.remove();
        });
        return template.innerHTML;
    }

    function showRestorationResult(panel, record) {
        const status = record.status || 'transcrito_documento';
        if (status === 'nao_padronizado' || status === 'sem_fonte') {
            panel.append(dentalElement('div', 'rounded-xl border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/20 p-4 text-amber-900 dark:text-amber-200 text-sm',
                record.observacao || 'Essa possibilidade não possui protocolo no material fornecido.'));
            return;
        }
        if (status === 'revisao_docente') {
            panel.append(dentalElement('div', 'mb-5 rounded-xl border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/20 p-4 text-amber-900 dark:text-amber-200 text-sm',
                'CONTEÚDO PRELIMINAR — NÃO VALIDADO. Esta combinação com ionômero não consta no documento original. Os materiais e as etapas são propostas didáticas para revisão docente, e não devem ser utilizados como protocolo clínico aprovado.'));
        }
        panel.append(dentalElement('h3', 'font-bold text-lg text-gray-900 dark:text-white mb-3', record.title || 'Protocolo'));
        if (record.summary) panel.append(dentalElement('p', 'text-sm text-gray-500 dark:text-gray-400 mb-3', record.summary));
        const text = dentalElement('article', 'rich-text text-sm sm:text-base text-gray-800 dark:text-gray-200 leading-relaxed');
        // Conteúdo HTML é mantido no repositório pelo responsável do projeto.
        text.innerHTML = protocolContentForDisplay(record);
        panel.appendChild(text);
    }

    // 2. Navegação entre arquivos .html e seções da página inicial.
    function updateBackButton(viewId) {
        const button = byId('back-btn');
        if (!button) return; // O header-component.js será criado separadamente.

        const atHome = pageName() === 'home' && viewId === 'home';
        button.classList.toggle('hidden', atHome);
        if (atHome) return;

        button.onclick = (event) => {
            event.preventDefault();
            if (viewId === 'restauracoes') {
                navigateTo(flowReturnView || (pageName() === 'dentistica' ? 'dentistica' : 'blog'));
            } else if (viewId === 'post') {
                navigateTo(postBackTarget);
            } else if (pageName() !== 'home') {
                navigateTo('home');
            } else {
                navigateTo('home');
            }
        };
    }

    function navigateTo(viewId, options = {}) {
        const target = String(viewId || 'home');
        const localView = byId(`view-${target}`);

        if (!localView) {
            // Outras especialidades e prescrições usam páginas próprias.
            if (Object.hasOwn(SPECIALTIES, target) || target === 'prescricoes') {
                void navigateDocument(`./${target}.html`);
                return;
            }
            if (HOME_VIEWS.has(target)) {
                const hash = target === 'home' ? '' : `#${target}`;
                void navigateDocument(`./index.html${hash}`);
            }
            return;
        }

        document.querySelectorAll('.view-section').forEach((view) => {
            view.classList.toggle('active', view === localView);
        });

        if (options.updateHash !== false) {
            // A rota é um fragmento; funciona também em sites de projeto do Pages.
            const hash = target === 'home' ? '' : `#${target}`;
            const url = `${window.location.pathname}${window.location.search}${hash}`;
            if (`${window.location.pathname}${window.location.search}${window.location.hash}` !== url) {
                window.history.pushState({ view: target }, '', url);
            }
        }

        updateBackButton(target);
        if (target === 'blog') renderBlog();
        if (target === 'restauracoes') renderRestorationStep();
        if (Object.hasOwn(SPECIALTIES, target)) {
            renderInstrumentais(target);
            if (byId(`tab-${target}-protocolos`)?.classList.contains('active')) {
                renderSpecialtyProtocols(target);
            }
        }
        if (options.scroll !== false) window.scrollTo({ top: 0, behavior: 'instant' });
        refreshIcons();
    }

    function syncRouteFromHash() {
        const route = routeOf(location.href);
        if (route && pageName() !== route.page) {
            void navigateDocument(location.href, { addHistory: false });
            return;
        }
        const fragment = decodeURIComponent(window.location.hash.replace(/^#/, ''));
        const allowed = HOME_VIEWS.has(fragment) || fragment === 'post' ||
            Object.hasOwn(SPECIALTIES, fragment);
        if (fragment === 'post' && !activePost) return;
        if (allowed && byId(`view-${fragment}`)) {
            navigateTo(fragment, { updateHash: false, scroll: false });
        } else if (byId(`view-${pageName()}`)) {
            navigateTo(pageName(), { updateHash: false, scroll: false });
        }
    }

    // 3. Abas (Prontuário / Materiais / Protocolos ou Prescrições).
    function switchTab(tabName, specialty) {
        const view = byId(`view-${specialty}`);
        const content = byId(`tab-${specialty}-${tabName}`);
        const button = byId(`tab-btn-${specialty}-${tabName}`);
        if (!view || !content || !button) return;

        view.querySelectorAll('.tab-btn').forEach((item) => {
            const selected = item === button;
            item.classList.toggle('active', selected);
            item.classList.toggle(`tab-active-${specialty}`, selected);
            item.setAttribute('aria-selected', String(selected));
        });
        view.querySelectorAll('.tab-content').forEach((item) => {
            item.classList.toggle('active', item === content);
        });

        if (tabName === 'instrumentais') renderInstrumentais(specialty);
        if (tabName === 'protocolos') renderSpecialtyProtocols(specialty);
        if (specialty === 'prescricoes') renderPrescricoes();
        refreshIcons();
    }

    // 4. Consulta das informações de prontuário e materiais.
    function getSpecialtySection(specialty, sectionName) {
        const source = database()[specialty];
        if (!source) return null;
        const fullId = `${specialty}-${sectionName}`;
        if (Array.isArray(source)) return source.find((item) => item?.id === fullId) || null;
        return source[sectionName] ?? source[fullId] ??
            source.prontuario?.[sectionName] ?? null;
    }

    function htmlForSection(entry, emptyMessage) {
        if (typeof entry === 'string') return entry;
        if (entry && typeof entry.content === 'string') return entry.content;
        if (entry && typeof entry.conteudo === 'string') return entry.conteudo;
        // Formato alternativo de checklist, se usado futuramente no banco de dados.
        if (Array.isArray(entry?.items)) {
            const wrapper = document.createElement('div');
            const list = document.createElement('ul');
            list.className = 'list-disc pl-5 space-y-1';
            entry.items.forEach((item) => {
                const li = document.createElement('li');
                li.textContent = String(item?.nome ?? item?.title ?? item ?? '');
                list.appendChild(li);
            });
            wrapper.appendChild(list);
            return wrapper.innerHTML;
        }
        return `<p class="text-sm text-gray-500 dark:text-gray-400 italic">${emptyMessage}</p>`;
    }

    function showProntuarioSection(sectionId, specialty) {
        const menu = byId(`prontuario-menu-${specialty}`);
        const area = byId(`dynamic-content-area-${specialty}`);
        const title = byId(`dynamic-title-${specialty}`);
        const body = byId(`dynamic-body-${specialty}`);
        if (!menu || !area || !title || !body) return;

        const sectionName = String(sectionId).replace(new RegExp(`^${specialty}-`), '');
        const section = getSpecialtySection(specialty, sectionName);
        const labels = { siglas: 'Siglas', exemplos: 'Exemplos', odontograma: 'Odontograma' };
        title.textContent = section?.title || section?.titulo || labels[sectionName] || 'Prontuário';
        body.innerHTML = htmlForSection(section, 'Conteúdo ainda não disponível.');
        menu.classList.add('hidden');
        area.classList.remove('hidden');
        refreshIcons();
    }

    function hideProntuarioSections(specialty) {
        byId(`dynamic-content-area-${specialty}`)?.classList.add('hidden');
        byId(`prontuario-menu-${specialty}`)?.classList.remove('hidden');
    }

    function renderInstrumentais(specialty) {
        const container = byId(`instrumentais-list-${specialty}`);
        if (!container) return;
        const section = getSpecialtySection(specialty, 'materiais') ||
            getSpecialtySection(specialty, 'instrumentais');
        container.innerHTML = htmlForSection(section, 'Checklist de materiais ainda não disponível.');
        refreshIcons();
    }

    // 5. Protocolos clínicos — EXCLUSIVAMENTE do arquivo protocolos.js.
    function getProtocols() {
        const source = database().protocolos;
        const records = Array.isArray(source) ? source :
            (source && typeof source === 'object' ? Object.values(source) : []);
        return records.filter((record) =>
            record && typeof record === 'object' && record.id && record.title && record.category
        );
    }

    function sortedProtocols(records) {
        return [...records].sort((a, b) =>
            String(a.title).localeCompare(String(b.title), 'pt-BR', { sensitivity: 'base' })
        );
    }

    function makeIcon(name, classes) {
        const icon = document.createElement('i');
        icon.setAttribute('data-lucide', name);
        icon.className = classes;
        icon.setAttribute('aria-hidden', 'true');
        return icon;
    }

    function createProtocolCard(record) {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'w-full text-left bg-white dark:bg-gray-800 dark:border-gray-700 p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col h-full focus-visible:outline-2 focus-visible:outline-primary';
        card.addEventListener('click', () => openPost(record.id));

        const category = document.createElement('span');
        category.className = 'self-start text-xs font-bold text-primary dark:text-cyan-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded mb-3';
        category.textContent = record.category;

        const title = document.createElement('h3');
        title.className = 'text-lg font-bold text-gray-900 dark:text-white mb-2';
        title.textContent = record.title;

        const summary = document.createElement('p');
        summary.className = 'text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-grow';
        summary.textContent = record.summary || '';

        const read = document.createElement('div');
        read.className = 'flex items-center text-primary dark:text-cyan-400 text-sm font-medium mt-auto';
        read.append('Ler protocolo');
        read.appendChild(makeIcon('arrow-right', 'w-4 h-4 ml-1'));

        card.append(category, title, summary, read);
        return card;
    }

    function setFilter(category) {
        currentFilter = category || 'all';
        document.querySelectorAll('.filter-btn').forEach((button) => {
            const isActive = normalize(button.textContent) === normalize(currentFilter) ||
                (currentFilter === 'all' && button.id === 'filter-all');
            button.classList.toggle('active', isActive);
            button.setAttribute('aria-pressed', String(isActive));
        });
        renderBlog();
    }

    function renderBlog() {
        const grid = byId('blog-grid');
        if (!grid) return;
        const empty = byId('no-protocols-msg');
        const term = normalize(byId('search-input')?.value || '');
        let items = getProtocols();
        if (currentFilter !== 'all') {
            items = items.filter((item) => normalize(item.category) === normalize(currentFilter));
        }
        if (term) {
            items = items.filter((item) => [item.title, item.category, item.summary]
                .some((value) => normalize(value).includes(term)));
        }

        grid.replaceChildren();
        empty?.classList.toggle('hidden', items.length > 0);
        if (!items.length) return;

        const grouped = currentFilter === 'all' && !term;
        const groups = new Map();
        if (grouped) {
            sortedProtocols(items).forEach((item) => {
                const key = item.category;
                if (!groups.has(key)) groups.set(key, []);
                groups.get(key).push(item);
            });
        } else {
            groups.set('', sortedProtocols(items));
        }

        const orderedNames = grouped
            ? [...CATEGORIES_ORDER.filter((name) => groups.has(name)),
                ...[...groups.keys()].filter((name) => !CATEGORIES_ORDER.includes(name)).sort()]
            : [''];

        orderedNames.forEach((name) => {
            if (name) {
                const headingWrap = document.createElement('div');
                headingWrap.className = 'flex items-center gap-2 pt-4 pb-2 border-b border-gray-200 dark:border-gray-700';
                const heading = document.createElement('h3');
                heading.className = 'text-lg font-bold text-gray-800 dark:text-gray-200';
                heading.textContent = name;
                headingWrap.appendChild(heading);
                grid.appendChild(headingWrap);
            }
            const sectionGrid = document.createElement('div');
            sectionGrid.className = 'grid grid-cols-1 md:grid-cols-2 gap-4 pt-2';
            (groups.get(name) || []).forEach((item) => sectionGrid.appendChild(createProtocolCard(item)));
            grid.appendChild(sectionGrid);
        });
        refreshIcons();
    }

    function renderSpecialtyProtocols(specialty) {
        const container = byId(`protocolos-list-${specialty}`);
        if (!container) return;
        const category = SPECIALTIES[specialty];
        const items = sortedProtocols(getProtocols().filter((record) =>
            normalize(record.category) === normalize(category)
        ));
        container.replaceChildren();
        if (!items.length) {
            const message = document.createElement('p');
            message.className = 'text-center text-gray-500 dark:text-gray-400 py-4 text-sm italic';
            message.textContent = `Nenhum protocolo de ${category} cadastrado.`;
            container.appendChild(message);
            return;
        }
        items.forEach((record) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'w-full p-4 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-primary hover:bg-blue-50 dark:hover:bg-gray-700 transition flex items-center gap-4 text-left group bg-white dark:bg-gray-800 shadow-sm';
            button.addEventListener('click', () => openPost(record.id, null, specialty));
            const iconWrap = document.createElement('div');
            iconWrap.className = 'p-3 bg-blue-100 dark:bg-blue-900/40 rounded-full text-primary dark:text-cyan-400 shrink-0';
            iconWrap.appendChild(makeIcon('file-text', 'w-5 h-5'));
            const content = document.createElement('div');
            const title = document.createElement('span');
            title.className = 'block font-semibold text-gray-800 dark:text-gray-200';
            title.textContent = record.title;
            const summary = document.createElement('span');
            summary.className = 'block text-xs text-gray-500 dark:text-gray-400 line-clamp-1';
            summary.textContent = record.summary || '';
            content.append(title, summary);
            button.append(iconWrap, content, makeIcon('arrow-right', 'ml-auto w-5 h-5 text-gray-400 dark:text-gray-500'));
            container.appendChild(button);
        });
        refreshIcons();
    }

    function openPost(id, dataObj = null, returnViewId = null) {
        const post = dataObj || getProtocols().find((item) => String(item.id) === String(id));
        if (!post || !byId('view-post')) return;

        byId('post-category').textContent = post.category || 'Geral';
        byId('post-title').textContent = post.title || 'Protocolo Clínico';
        byId('post-content').innerHTML = protocolContentForDisplay(post);
        activePost = post;
        postBackTarget = returnViewId ||
            (Object.hasOwn(SPECIALTIES, pageName()) ? pageName() : 'blog');
        navigateTo('post');
        refreshIcons();
    }

    // 6. Modelos de prescrições; nenhum medicamento é definido no app.js.
    function renderPrescricoes() {
        const source = database().prescricoes || {};
        PRESCRIPTION_GROUPS.forEach((group) => {
            const container = byId(`prescricoes-list-${group}`);
            if (!container) return;
            const entry = source[group] ?? source[group.replace(/-/g, '_')];
            const items = Array.isArray(entry) ? entry :
                (Array.isArray(entry?.items) ? entry.items : []);
            container.replaceChildren();
            if (typeof entry === 'string' || typeof entry?.content === 'string') {
                container.innerHTML = typeof entry === 'string' ? entry : entry.content;
                return;
            }
            if (!items.length) {
                const message = document.createElement('p');
                message.className = 'text-gray-500 dark:text-gray-400 text-sm';
                message.textContent = 'Nenhum modelo disponível no momento.';
                container.appendChild(message);
                return;
            }

            items.forEach((item) => {
                const card = document.createElement('div');
                card.className = 'pb-3 border-b border-gray-200 dark:border-gray-600 last:border-b-0';
                if (typeof item === 'string') {
                    card.textContent = item;
                } else if (item && typeof item === 'object') {
                    const name = document.createElement('strong');
                    name.className = 'block font-semibold text-gray-900 dark:text-white mb-1';
                    const nameText = item.nome || item.title || item.medicamento || '';
                    name.textContent = [nameText, item.quantidade].filter(Boolean).join(' — ');
                    const dosing = document.createElement('p');
                    dosing.className = 'text-sm text-gray-700 dark:text-gray-300';
                    dosing.textContent = item.posologia || item.orientacao || item.descricao || '';
                    card.append(name, dosing);
                    if (item.observacoes) {
                        const note = document.createElement('p');
                        note.className = 'text-xs text-gray-500 dark:text-gray-400 mt-1 italic';
                        note.textContent = item.observacoes;
                        card.appendChild(note);
                    }
                }
                container.appendChild(card);
            });
        });
    }

    // 7. Manual de biossegurança.
    async function toggleFullScreen() {
        const container = byId('pdf-container');
        if (!container) return;
        try {
            if (document.fullscreenElement) {
                await document.exitFullscreen();
            } else if (container.requestFullscreen) {
                await container.requestFullscreen();
            }
        } catch (error) {
            console.warn('Não foi possível alterar a tela cheia:', error);
        }
    }

    function initialize() {
        initTheme();
        const year = byId('copyright-year');
        if (year) year.textContent = String(new Date().getFullYear());
        const page = pageName();
        if (Object.hasOwn(SPECIALTIES, page)) {
            renderInstrumentais(page);
            if (byId(`tab-${page}-protocolos`)?.classList.contains('active')) {
                renderSpecialtyProtocols(page);
            }
        } else if (page === 'prescricoes') {
            renderPrescricoes();
        } else {
            renderBlog();
        }
        installRestorationFlow();
        syncRouteFromHash();
        const visible = document.querySelector('.view-section.active');
        updateBackButton(visible?.id?.replace(/^view-/, '') || page);
        refreshIcons();
        // O primeiro acesso deixa as próximas páginas preparadas no cache local.
        window.setTimeout(warmPages, 300);
    }

    // Chamadas utilizadas nos atributos onclick/oninput dos HTMLs existentes.
    Object.assign(window, {
        toggleTheme, navigateTo, switchTab,
        showProntuarioSection, hideProntuarioSections,
        renderInstrumentais, renderSpecialtyProtocols,
        setFilter, renderBlog, openPost, renderPrescricoes,
        toggleFullScreen
    });

    window.addEventListener('popstate', syncRouteFromHash);
    window.addEventListener('hashchange', syncRouteFromHash);
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize, { once: true });
    } else {
        initialize();
    }
})();
