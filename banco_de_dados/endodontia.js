/**
 * Guia Clínico — Banco de dados de Endodontia.
 * Conteúdos de prontuário e materiais extraídos do HTML original.
 * Arquivo estático para GitHub Pages, sem Firebase e sem editor administrativo.
 * Os protocolos clínicos ficam separados em banco_de_dados/protocolos.js.
 * Deve ser carregado antes de app.js, como em endodontia.html.
 */
(function () {
    'use strict';

    window.GuiaClinicoDB = window.GuiaClinicoDB || {};
    window.GuiaClinicoDB.endodontia = {
        siglas: {
            title: "Siglas - Endodontia",
            summary: "Siglas para tratamentos endodônticos (canal).",
            content: `<div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <div>
                        <p class="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Procedimentos Iniciais</p>
                        <ul class="space-y-1 list-disc pl-4 text-gray-700 dark:text-gray-300">
                            <li><strong>RX I:</strong> Radiografia Inicial</li>
                            <li><strong>AC:</strong> Abertura Coronária</li>
                            <li><strong>IA:</strong> Isolamento Absoluto</li>
                            <li><strong>URG:</strong> Atendimento de urgência</li>
                        </ul>
                    </div>
                    <div>
                        <p class="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Preparo Químico-Mecânico</p>
                        <ul class="space-y-1 list-disc pl-4 text-gray-700 dark:text-gray-300">
                            <li><strong>ODM:</strong> Odontometria</li>
                            <li><strong>GG:</strong> Preparo c/ Gates Glidden (Informar II, III, IV, V)</li>
                            <li><strong>PA:</strong> Preparo apical (Informar # lima)</li>
                            <li><strong>MI:</strong> Medicação intracanal (Informar substância)</li>
                        </ul>
                    </div>
                    <div>
                        <p class="font-bold text-indigo-600 dark:text-indigo-400 mb-2">Obturação e Finalização</p>
                        <ul class="space-y-1 list-disc pl-4 text-gray-700 dark:text-gray-300">
                            <li><strong>PC:</strong> Prova de Cone (Informar calibração)</li>
                            <li><strong>OBT:</strong> Obturação do Sistema de Canais</li>
                            <li><strong>SC:</strong> Selamento Coronário</li>
                            <li><strong>RX F:</strong> Radiografia Final</li>
                            <li><strong>MS:</strong> Medicação sistêmica</li>
                        </ul>
                    </div>
                </div>`
        },

        exemplos: {
            title: "Exemplos de Preenchimento - Endodontia",
            summary: "Modelos para evolução de Biopulpectomia e Necropulpectomia.",
            content: `<div class="space-y-6 text-sm">
                    <div class="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg border border-indigo-100 dark:border-indigo-800">
                        <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-2 flex items-center gap-2">
                            <i data-lucide="info" class="w-4 h-4"></i> Como preencher?
                        </h4>
                        <p class="text-gray-700 dark:text-gray-300 mb-2">Siga a ordem cronológica do tratamento, especificando as limas e medicações utilizadas.</p>
                    </div>

                    <div>
                        <h4 class="font-bold text-gray-800 dark:text-gray-200 mb-2 border-b border-gray-200 dark:border-gray-700 pb-1">Exemplo 1: Tratamento Completo (Biopulpectomia)</h4>
                        <div class="mb-2">
                            <span class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Sequência:</span>
                            <p class="text-gray-700 dark:text-gray-300 italic">Dente 12, Radiografia, Anestesia, Abertura, Isolamento, Odontometria, Gates, Preparo Apical, Recuo, Prova do cone, Obturação e Selamento.</p>
                        </div>
                        <div class="bg-gray-100 dark:bg-gray-700 p-3 rounded-md font-mono text-gray-800 dark:text-gray-200 border-l-4 border-indigo-600 dark:border-indigo-400">
                            12 - Rx I + AI + AC + IA + ODM + GG (IV) + PA (#45) + Recuo escalonado + PC (fm 002) + OBT + SC + Rx F
                        </div>
                    </div>

                    <div>
                        <h4 class="font-bold text-gray-800 dark:text-gray-200 mb-2 border-b border-gray-200 dark:border-gray-700 pb-1">Exemplo 2: Medicação Intracanal (Necropulpectomia I)</h4>
                        <div class="bg-gray-100 dark:bg-gray-700 p-3 rounded-md font-mono text-gray-800 dark:text-gray-200 border-l-4 border-indigo-600 dark:border-indigo-400">
                            22 - Rx I + AI + AC + IA + ODM + MI (Tricresol formalina) + SC + AO
                        </div>
                    </div>
                    
                     <div>
                        <h4 class="font-bold text-gray-800 dark:text-gray-200 mb-2 border-b border-gray-200 dark:border-gray-700 pb-1">Prescrições Comuns (MS)</h4>
                         <p class="text-gray-600 dark:text-gray-400 font-mono text-xs bg-gray-50 dark:bg-gray-800 p-2 rounded">MS: Dipirona sódica 500mg</p>
                    </div>
                </div>`
        },

        materiais: {
            title: "Materiais - Endodontia",
            summary: "Lista completa de materiais para isolamento e tratamento de canal.",
            content: `<div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <div>
                        <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-2 border-b border-indigo-100 dark:border-indigo-800 pb-1">Carrinho e Bancada</h4>
                        <ul class="space-y-1 list-disc pl-4 text-gray-700 dark:text-gray-300">
                            <li>Anestésico e Agulha</li>
                            <li>Seringa de irrigação</li>
                            <li>Lençol de borracha</li>
                            <li>Hipoclorito e Soro</li>
                            <li>Medicação (Ex: Tricresol)</li>
                            <li>Cimento obturador e CIV</li>
                            <li>Papel Carbono</li>
                            <li>Algodão e Gaze estéril</li>
                            <li>Lamparina</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-2 border-b border-indigo-100 dark:border-indigo-800 pb-1">CME (Esterilização)</h4>
                        <ul class="space-y-1 list-disc pl-4 text-gray-700 dark:text-gray-300">
                            <li>Kit de Endodontia</li>
                            <li>Kit de Obturação e Pinça Miller</li>
                            <li>Kit de Isolamento e Arco de Ostby</li>
                            <li>Caneta de Alta e Baixa rotação</li>
                            <li>Tamborel e Suprafill</li>
                            <li>Espátula 24 e Placa de vidro</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-2 border-b border-indigo-100 dark:border-indigo-800 pb-1">Janelinha (Solicitar)</h4>
                        <ul class="space-y-1 list-disc pl-4 text-gray-700 dark:text-gray-300">
                            <li>Limas e Gates</li>
                            <li>Agulha de irrigação</li>
                            <li>Pontas de acesso e acabamento</li>
                            <li>Grampos e Alça labial</li>
                            <li>Localizador apical</li>
                            <li>Lentullo e MacSpadden</li>
                            <li>Cones (Principal e Acessório)</li>
                            <li>Fotopolimerizador</li>
                        </ul>
                    </div>
                </div>`
        }

    };
})();
