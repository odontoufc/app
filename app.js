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
    const HOME_VIEWS = new Set(['home', 'blog', 'links', 'manual', 'feedback']);
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

    // 2. Navegação entre arquivos .html e seções da página inicial.
    function updateBackButton(viewId) {
        const button = byId('back-btn');
        if (!button) return; // O header-component.js será criado separadamente.

        const atHome = pageName() === 'home' && viewId === 'home';
        button.classList.toggle('hidden', atHome);
        if (atHome) return;

        button.onclick = (event) => {
            event.preventDefault();
            if (viewId === 'post') {
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
                window.location.assign(`./${target}.html`);
                return;
            }
            if (HOME_VIEWS.has(target)) {
                const hash = target === 'home' ? '' : `#${target}`;
                window.location.assign(`./index.html${hash}`);
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
        byId('post-content').innerHTML = String(post.content || '<p>Conteúdo ainda não disponível.</p>');
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
        syncRouteFromHash();
        const visible = document.querySelector('.view-section.active');
        updateBackButton(visible?.id?.replace(/^view-/, '') || page);
        refreshIcons();
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
