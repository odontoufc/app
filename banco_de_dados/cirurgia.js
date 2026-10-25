/**
 * Guia Clínico — Banco de dados de Cirurgia.
 * Conteúdos de prontuário e materiais extraídos do HTML original.
 * Arquivo estático para GitHub Pages, sem Firebase e sem editor administrativo.
 * Os protocolos clínicos ficam separados em banco_de_dados/protocolos.js.
 * Deve ser carregado antes de app.js, como em cirurgia.html.
 */
(function () {
    'use strict';

    window.GuiaClinicoDB = window.GuiaClinicoDB || {};
    window.GuiaClinicoDB.cirurgia = {
        siglas: {
            title: "Siglas - Cirurgia",
            summary: "Abreviações para procedimentos cirúrgicos e exodontias.",
            content: `<div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <div>
                        <p class="font-bold text-emerald-600 dark:text-emerald-400 mb-2">Gerais / Diagnóstico</p>
                        <ul class="space-y-1 list-disc pl-4 text-gray-700 dark:text-gray-300">
                            <li><strong>ANM:</strong> Anamnese</li>
                            <li><strong>Rx per:</strong> Radiografia periapical</li>
                            <li><strong>AI:</strong> Anestesia Infiltrativa</li>
                            <li><strong>SV:</strong> Sinais Vitais (P.A)</li>
                        </ul>
                    </div>
                    <div>
                        <p class="font-bold text-emerald-600 dark:text-emerald-400 mb-2">Procedimentos</p>
                        <ul class="space-y-1 list-disc pl-4 text-gray-700 dark:text-gray-300">
                            <li><strong>EXO:</strong> Exodontia</li>
                            <li><strong>SUTURA:</strong> Sutura simples</li>
                        </ul>
                    </div>
                </div>`
        },

        exemplos: {
            title: "Exemplos de Preenchimento - Cirurgia",
            summary: "Modelo de descrição cirúrgica para exodontias simples.",
            content: `<div class="space-y-6 text-sm">
                    <div class="bg-emerald-50 dark:bg-emerald-900/30 p-4 rounded-lg border border-emerald-100 dark:border-emerald-800">
                        <h4 class="font-bold text-emerald-600 dark:text-emerald-400 mb-2 flex items-center gap-2">
                            <i data-lucide="info" class="w-4 h-4"></i> Como preencher?
                        </h4>
                        <p class="text-gray-700 dark:text-gray-300 mb-2">Registre os sinais vitais, anestésico utilizado e o procedimento cirúrgico.</p>
                    </div>

                    <div>
                        <h4 class="font-bold text-gray-800 dark:text-gray-200 mb-2 border-b border-gray-200 dark:border-gray-700 pb-1">Exemplo 1: Exodontia Simples</h4>
                        <div class="mb-2">
                            <span class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Procedimento Realizado:</span>
                            <p class="text-gray-700 dark:text-gray-300 italic">"Anamnese, Radiografia dente 16, Aferição P.A (120x89), Anestesia (Mepivacaína 3%), Exodontia 16, Sutura e Prescrição."</p>
                        </div>
                        <div class="bg-gray-100 dark:bg-gray-700 p-3 rounded-md font-mono text-gray-800 dark:text-gray-200 border-l-4 border-emerald-600 dark:border-emerald-400">
                            ANM + Rx per 16 + Aferição sinais vitais (P.A 120 x 89 mmHg) + AI (Mepivacaína 3%) + EXO 16 + SUTURA + Prescrição medicamentosa: Dipirona 500mg 6 em 6 horas
                        </div>
                    </div>
                </div>`
        },

        materiais: {
            title: "Materiais - Cirurgia",
            summary: "Checklist de materiais para cirurgias orais menores.",
            content: `<div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <div>
                        <h4 class="font-bold text-emerald-600 dark:text-emerald-400 mb-2 border-b border-emerald-100 dark:border-emerald-800 pb-1">Carrinho e Bancada</h4>
                        <ul class="space-y-1 list-disc pl-4 text-gray-700 dark:text-gray-300">
                            <li>Seringa 20ml e Agulha irrigação</li>
                            <li>Agulha para carpule</li>
                            <li>Sugador cirúrgico</li>
                            <li>Lâmina de bisturi nº 15</li>
                            <li>Fio de sutura</li>
                            <li>Gaze estéril e Luvas cirúrgicas</li>
                            <li>Kit paramentação cirurgia</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-bold text-emerald-600 dark:text-emerald-400 mb-2 border-b border-emerald-100 dark:border-emerald-800 pb-1">CME</h4>
                        <ul class="space-y-1 list-disc pl-4 text-gray-700 dark:text-gray-300">
                            <li>Kit de Cirurgia</li>
                            <li>Kit de Alavancas</li>
                            <li>Cuba metálica</li>
                            <li>Fórceps</li>
                            <li>Caneta de Alta rotação</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-bold text-emerald-600 dark:text-emerald-400 mb-2 border-b border-emerald-100 dark:border-emerald-800 pb-1">Janelinha</h4>
                        <ul class="space-y-1 list-disc pl-4 text-gray-700 dark:text-gray-300">
                            <li>Broca 702</li>
                        </ul>
                    </div>
                </div>`
        }

    };
})();
