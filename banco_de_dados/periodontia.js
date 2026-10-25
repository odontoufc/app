/**
 * Guia Clínico — Banco de dados de Periodontia.
 * Os conteúdos de prontuário e materiais foram preservados do HTML original.
 * Compatível com app.js e com hospedagem estática no GitHub Pages.
 * Não utiliza Firebase; os protocolos clínicos ficam em protocolos.js.
 * Carregar este script antes de app.js (conforme periodontia.html).
 */
(function () {
    'use strict';

    window.GuiaClinicoDB = window.GuiaClinicoDB || {};
    window.GuiaClinicoDB.periodontia = {
        siglas: {
            title: "Siglas - Periodontia",
            summary: "Siglas para periodontograma e procedimentos básicos.",
            content: `<div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <div>
                        <p class="font-bold text-rose-600 dark:text-rose-400 mb-2">Diagnóstico e Exames</p>
                        <ul class="space-y-1 list-disc pl-4 text-gray-700 dark:text-gray-300">
                            <li><strong>ANM:</strong> Anamnese</li>
                            <li><strong>PSR:</strong> PSR (Registro Periodontal Simplificado)</li>
                            <li><strong>IP:</strong> Índice de placa</li>
                            <li><strong>ISM:</strong> Índice de Sangramento Marginal</li>
                            <li><strong>PER:</strong> Periograma</li>
                            <li><strong>REAV:</strong> Reavaliação</li>
                        </ul>
                    </div>
                    <div>
                        <p class="font-bold text-rose-600 dark:text-rose-400 mb-2">Prevenção e Higiene</p>
                        <ul class="space-y-1 list-disc pl-4 text-gray-700 dark:text-gray-300">
                            <li><strong>IHO:</strong> Instrução de Higiene Oral</li>
                            <li><strong>CH:</strong> Controle de Higiene (Planejamento)</li>
                            <li><strong>PROF:</strong> Profilaxia</li>
                            <li><strong>POL:</strong> Polimento</li>
                            <li><strong>ATF:</strong> Aplicação tópica de flúor</li>
                        </ul>
                    </div>
                    <div>
                        <p class="font-bold text-rose-600 dark:text-rose-400 mb-2">Tratamento Básico</p>
                        <ul class="space-y-1 list-disc pl-4 text-gray-700 dark:text-gray-300">
                            <li><strong>AN:</strong> Anestesia</li>
                            <li><strong>R-SUPRA:</strong> Raspagem Supragengival</li>
                            <li><strong>RAR:</strong> Raspagem e alisamento radicular (Subgengival)</li>
                            <li><strong>RER:</strong> Remoção de fatores retentivos de placa</li>
                            <li><strong>TPA:</strong> Tratamento de processo agudo</li>
                        </ul>
                    </div>
                    <div>
                        <p class="font-bold text-rose-600 dark:text-rose-400 mb-2">Cirurgia Periodontal</p>
                        <ul class="space-y-1 list-disc pl-4 text-gray-700 dark:text-gray-300">
                            <li><strong>GENG:</strong> Gengivectomia / Gengivoplastia</li>
                            <li><strong>ACC:</strong> Aumento de coroa clínica</li>
                            <li><strong>ACC+OST:</strong> Aumento de coroa clínica com osteotomia</li>
                            <li><strong>RET-RAR:</strong> Retalho para raspagem</li>
                            <li><strong>CRR:</strong> Cirurgia de recobrimento radicular</li>
                            <li><strong>RS:</strong> Remoção de sutura</li>
                        </ul>
                    </div>
                </div>`
        },

        exemplos: {
            title: "Exemplos de Preenchimento - Periodontia",
            summary: "Modelos de evolução clínica para raspagem e cirurgias periodontais.",
            content: `<div class="space-y-6 text-sm">
                    <div class="bg-rose-50 dark:bg-rose-900/30 p-4 rounded-lg border border-rose-100 dark:border-rose-800">
                        <h4 class="font-bold text-rose-600 dark:text-rose-400 mb-2 flex items-center gap-2">
                            <i data-lucide="info" class="w-4 h-4"></i> Como preencher?
                        </h4>
                        <p class="text-gray-700 dark:text-gray-300 mb-2">Na Periodontia, descreva a sequência do tratamento básico ou cirúrgico utilizando as siglas padronizadas.</p>
                    </div>

                    <div>
                        <h4 class="font-bold text-gray-800 dark:text-gray-200 mb-2 border-b border-gray-200 dark:border-gray-700 pb-1">Exemplo 1: Terapia Básica Periodontal</h4>
                        <div class="mb-2">
                            <span class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Procedimento Realizado:</span>
                            <p class="text-gray-700 dark:text-gray-300 italic">"Anamnese, Índice de Placa, Índice de Sangramento, PSR, Raspagem Supragengival (Sextantes I, II e III) e Instrução de Higiene Oral."</p>
                        </div>
                        <div class="bg-gray-100 dark:bg-gray-700 p-3 rounded-md font-mono text-gray-800 dark:text-gray-200 border-l-4 border-rose-600 dark:border-rose-400">
                            ANM + IP + ISM + PSR + R-SUPRA (I, II, III) + IHO
                        </div>
                    </div>
                    
                     <div>
                        <h4 class="font-bold text-gray-800 dark:text-gray-200 mb-2 border-b border-gray-200 dark:border-gray-700 pb-1">Outras Siglas Comuns</h4>
                         <p class="text-gray-600 dark:text-gray-400 font-mono text-xs bg-gray-50 dark:bg-gray-800 p-2 rounded">PER; PROF; RAR; RER; ATF</p>
                    </div>
                </div>`
        },

        materiais: {
            title: "Materiais - Periodontia",
            summary: "Checklist de materiais para raspagem e cirurgias periodontais.",
            content: `<div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <div>
                        <h4 class="font-bold text-rose-600 dark:text-rose-400 mb-2 border-b border-rose-100 dark:border-rose-800 pb-1">CME (Esterilização)</h4>
                        <ul class="space-y-1 list-disc pl-4 text-gray-700 dark:text-gray-300">
                            <li>Kit Clínico</li>
                            <li>Curetas supra</li>
                            <li>Curetas sub</li>
                            <li>Sonda OMS</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-bold text-rose-600 dark:text-rose-400 mb-2 border-b border-rose-100 dark:border-rose-800 pb-1">Carrinho e Bancada</h4>
                        <ul class="space-y-1 list-disc pl-4 text-gray-700 dark:text-gray-300">
                            <li>Gaze</li>
                            <li>Clorexidina</li>
                            <li>Ultrassom</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-bold text-rose-600 dark:text-rose-400 mb-2 border-b border-rose-100 dark:border-rose-800 pb-1">Janelinha (Solicitar)</h4>
                        <ul class="space-y-1 list-disc pl-4 text-gray-700 dark:text-gray-300">
                            <li>Pontas do ultrassom</li>
                        </ul>
                    </div>
                </div>`
        }

    };
})();
