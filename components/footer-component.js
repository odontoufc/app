/**
 * Guia Clínico — rodapé compartilhado (GitHub Pages)
 * Local: /components/footer-component.js
 *
 * Use <site-footer></site-footer> no final do <body>, antes dos scripts.
 * Sem Firebase, editor de texto ou área administrativa.
 */
(function () {
    'use strict';

    if (customElements.get('site-footer')) return;

    class SiteFooter extends HTMLElement {
        connectedCallback() {
            this.style.display = 'block';
            this.style.marginTop = 'auto';

            this.innerHTML = `
                <footer class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-200">
                    <div class="max-w-5xl mx-auto px-4 py-8">
                        <div class="flex flex-col items-center gap-6">
                            <a href="./index.html#feedback"
                               id="footer-feedback-link"
                               class="text-xs text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-cyan-400 flex items-center gap-1 transition-colors rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                                <i data-lucide="message-square" class="w-3 h-3" aria-hidden="true"></i>
                                <span>Enviar Feedback</span>
                            </a>

                            <div class="w-full h-px bg-gray-100 dark:bg-gray-700" aria-hidden="true"></div>

                            <div class="flex items-center justify-center gap-8 opacity-70 hover:opacity-100 transition-opacity">
                                <img
                                    src="https://website.cfo.org.br/wp-content/uploads/2021/10/simbolo-odontologia_png.png"
                                    alt="Símbolo da Odontologia"
                                    class="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all dark:invert"
                                    loading="lazy"
                                    referrerpolicy="no-referrer">
                                <div class="w-px h-10 bg-gray-300 dark:bg-gray-600" aria-hidden="true"></div>
                                <img
                                    src="https://www.ufc.br/images/_images/a_universidade/identidade_visual/brasao/brasao1_horizontal_monocromatico_300dpi.png"
                                    alt="Universidade Federal do Ceará (UFC)"
                                    class="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-all dark:invert"
                                    loading="lazy"
                                    referrerpolicy="no-referrer">
                            </div>
                        </div>
                        <div class="text-center pt-6">
                            <p class="text-[10px] text-gray-400">
                                © <span id="copyright-year"></span> Guia Clínico - Odontologia UFC.
                            </p>
                        </div>
                    </div>
                </footer>
            `;

            // O ano é exibido mesmo se app.js ainda não tiver sido carregado.
            const copyrightYear = this.querySelector('#copyright-year');
            if (copyrightYear) copyrightYear.textContent = String(new Date().getFullYear());

            // Navegação sem recarga quando o formulário já estiver na página inicial.
            // Nas demais páginas, o link padrão funciona em GitHub Pages (também em subpastas).
            const feedbackLink = this.querySelector('#footer-feedback-link');
            feedbackLink?.addEventListener('click', (event) => {
                if (document.body?.dataset.page === 'home' && typeof window.navigateTo === 'function') {
                    event.preventDefault();
                    window.navigateTo('feedback');
                }
            });

            if (window.lucide && typeof window.lucide.createIcons === 'function') {
                window.lucide.createIcons();
            }
        }
    }

    customElements.define('site-footer', SiteFooter);
})();
