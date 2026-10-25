/**
 * Guia Clínico — cabeçalho compartilhado
 * Caminho: /components/header-component.js
 *
 * Insira <site-header></site-header> no início do <body> de cada página.
 * O app.js define toggleTheme() e navigateTo(); este componente não usa Firebase.
 * O HTML é inserido no DOM normal para receber as classes do Tailwind.
 */
(function () {
    'use strict';

    if (customElements.get('site-header')) return;

    class SiteHeader extends HTMLElement {
        connectedCallback() {
            // O posicionamento fixo à parte superior precisa estar no elemento
            // externo, e não somente no <header> filho.
            this.style.display = 'block';
            this.style.position = 'sticky';
            this.style.top = '0';
            this.style.zIndex = '50';
            this.style.width = '100%';

            this.innerHTML = `
                <header class="bg-white dark:bg-gray-800 dark:border-gray-700 shadow-sm w-full border-b border-gray-100 transition-colors duration-200">
                    <div class="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
                        <a href="./index.html"
                           class="flex items-center gap-3 rounded-lg active:opacity-70 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                           aria-label="Ir para a página inicial do Guia Clínico">
                            <span class="bg-primary/10 dark:bg-cyan-900/30 p-2 rounded-lg text-primary dark:text-cyan-400" aria-hidden="true">
                                <i data-lucide="book-open-check" class="w-5 h-5"></i>
                            </span>
                            <span>
                                <span class="block text-lg font-bold text-gray-900 dark:text-white tracking-tight leading-tight">Guia Clínico</span>
                                <span class="block text-[10px] text-gray-500 dark:text-gray-400 font-medium leading-none">Odontologia UFC Sobral</span>
                            </span>
                        </a>

                        <div class="flex items-center gap-2">
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
                                    class="hidden bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 text-gray-700 py-1.5 px-3 rounded-lg text-sm font-medium transition-colors items-center gap-1 active:scale-95"
                                    aria-label="Voltar à página anterior">
                                <i data-lucide="arrow-left" class="w-4 h-4" aria-hidden="true"></i>
                                <span class="hidden xs:inline">Voltar</span>
                            </button>
                        </div>
                    </div>
                </header>
            `;

            const homeLink = this.querySelector('a[href="./index.html"]');
            homeLink.addEventListener('click', (event) => {
                // Na página inicial, troca a visualização sem recarregar;
                // nas demais páginas, usa o link normal, seguro no GitHub Pages.
                if (document.body.dataset.page === 'home' && typeof window.navigateTo === 'function') {
                    event.preventDefault();
                    window.navigateTo('home');
                }
            });

            this.querySelector('#theme-toggle-btn').addEventListener('click', () => {
                if (typeof window.toggleTheme === 'function') {
                    window.toggleTheme();
                } else {
                    // Alternativa simples caso o app.js ainda não esteja carregado.
                    const dark = document.documentElement.classList.toggle('dark');
                    try {
                        localStorage.setItem('theme', dark ? 'dark' : 'light');
                    } catch (_) { /* armazenamento opcional */ }
                }
            });

            // O app.js também atualiza os ícones na inicialização e na troca de tema.
            if (window.lucide && typeof window.lucide.createIcons === 'function') {
                window.lucide.createIcons();
            }
        }
    }

    customElements.define('site-header', SiteHeader);
})();
