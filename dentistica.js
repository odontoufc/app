/**
 * Guia Clínico — Banco de dados de Dentística.
 * Arquivo local, destinado ao GitHub Pages. Não utiliza Firebase.
 *
 * Conteúdo de siglas, exemplos e materiais preservado do HTML original.
 * Os protocolos clínicos ficam exclusivamente em banco_de_dados/protocolos.js.
 *
 * Este arquivo deve ser carregado ANTES do app.js, como já previsto
 * em dentistica.html. Os conteúdos HTML abaixo são exibidos pelo app.js.
 */
(function () {
    'use strict';

    window.GuiaClinicoDB = window.GuiaClinicoDB || {};
    window.GuiaClinicoDB.dentistica = {
        siglas: {
            title: "Siglas - Dentística",
            summary: "Lista de abreviações e siglas comuns na Dentística.",
            content: `<div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <div>
                        <p class="font-bold text-primary dark:text-cyan-400 mb-2">Gerais / Diagnóstico</p>
                        <ul class="space-y-1 list-disc pl-4 text-gray-700 dark:text-gray-300">
                            <li><strong>DA:</strong> Solicitação de diário alimentar</li>
                            <li><strong>ODG:</strong> Odontograma</li>
                            <li><strong>RX Inter:</strong> Radiografia interproximal</li>
                            <li><strong>RX Per:</strong> Radiografia periapical</li>
                            <li><strong>AO:</strong> Ajuste oclusão</li>
                            <li><strong>IA:</strong> Isolamento absoluto</li>
                        </ul>
                    </div>
                    <div>
                        <p class="font-bold text-primary dark:text-cyan-400 mb-2">Preparos Cavitários</p>
                        <ul class="space-y-1 list-disc pl-4 text-gray-700 dark:text-gray-300">
                            <li><strong>PCCLI:</strong> Preparo cavitário classe I</li>
                            <li><strong>PCCLII:</strong> Preparo cavitário classe II</li>
                            <li><strong>PCCLIII:</strong> Preparo cavitário classe III</li>
                            <li><strong>PCCLIV:</strong> Preparo cavitário classe IV</li>
                            <li><strong>PCCLV:</strong> Preparo cavitário classe V</li>
                            <li><strong>PCCLVI:</strong> Preparo cavitário classe VI</li>
                        </ul>
                    </div>
                    <div>
                        <p class="font-bold text-primary dark:text-cyan-400 mb-2">Proteção Pulpar</p>
                        <ul class="space-y-1 list-disc pl-4 text-gray-700 dark:text-gray-300">
                            <li><strong>PHC:</strong> Proteção com hidróxido de cálcio</li>
                            <li><strong>PIV:</strong> Proteção com ionômero de vidro</li>
                            <li><strong>POZE:</strong> Prot. cim. óxido de zinco e eugenol</li>
                            <li><strong>PMTA:</strong> Proteção com MTA</li>
                            <li><strong>CPD:</strong> Capeamento pulpar direto</li>
                            <li><strong>TEX:</strong> Tratamento expectante</li>
                        </ul>
                    </div>
                    <div>
                        <p class="font-bold text-primary dark:text-cyan-400 mb-2">Restaurações e Estética</p>
                        <ul class="space-y-1 list-disc pl-4 text-gray-700 dark:text-gray-300">
                            <li><strong>ROZE:</strong> Rest. cim. óxido de zinco e eugenol</li>
                            <li><strong>RRC:</strong> Restauração em resina composta</li>
                            <li><strong>RAG:</strong> Restauração em amálgama</li>
                            <li><strong>RIV:</strong> Restauração em ionômero de vidro</li>
                            <li><strong>SEL:</strong> Selante</li>
                            <li><strong>SELI:</strong> Selante invasivo</li>
                            <li><strong>MA:</strong> Microabrasão</li>
                            <li><strong>CLA VIT:</strong> Clareamento dental vital</li>
                            <li><strong>CLA NVIT:</strong> Clareamento dental não vital</li>
                        </ul>
                    </div>
                </div>`
        },

        exemplos: {
            title: "Exemplos de Preenchimento - Dentística",
            summary: "Modelos de como preencher o prontuário em procedimentos restauradores.",
            content: `<div class="space-y-6 text-sm">
                    <div class="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                        <h4 class="font-bold text-primary dark:text-cyan-400 mb-2 flex items-center gap-2">
                            <i data-lucide="info" class="w-4 h-4"></i> Como preencher?
                        </h4>
                        <p class="text-gray-700 dark:text-gray-300 mb-2">A descrição no prontuário deve ser sucinta, utilizando as siglas padronizadas e a ordem lógica do procedimento clínico.</p>
                    </div>

                    <div>
                        <h4 class="font-bold text-gray-800 dark:text-gray-200 mb-2 border-b border-gray-200 dark:border-gray-700 pb-1">Exemplo 1: Restauração Classe II Complexa</h4>
                        <div class="mb-2">
                            <span class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Procedimento Realizado:</span>
                            <p class="text-gray-700 dark:text-gray-300 italic">"Dente 16: Anestesia Infiltrativa, Isolamento Absoluto, Preparo Cavitário Classe II (Mesio-ocluso-distal), Proteção com Hidróxido de Cálcio e Ionômero, Restauração em Resina Composta (Cor A2), Acabamento, Polimento e Ajuste Oclusal."</p>
                        </div>
                        <div class="bg-gray-100 dark:bg-gray-700 p-3 rounded-md font-mono text-gray-800 dark:text-gray-200 border-l-4 border-primary dark:border-cyan-400">
                            16 - AI + IA + PCCL II (MOD) + PHC + PIV + RRC (OPALLIS A2) + ACAB + POL + AO
                        </div>
                    </div>

                    <div>
                        <h4 class="font-bold text-gray-800 dark:text-gray-200 mb-2 border-b border-gray-200 dark:border-gray-700 pb-1">Exemplo 2: Procedimentos Iniciais / Diagnóstico</h4>
                        <div class="mb-2">
                            <span class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Procedimento Realizado:</span>
                            <p class="text-gray-700 dark:text-gray-300 italic">"Anamnese, Profilaxia, Radiografia Periapical (36, 37), Radiografia Interproximal (14, 15), Odontograma e Plano de Tratamento."</p>
                        </div>
                        <div class="bg-gray-100 dark:bg-gray-700 p-3 rounded-md font-mono text-gray-800 dark:text-gray-200 border-l-4 border-primary dark:border-cyan-400">
                            ANM + PROF + Rx per (36, 37) + Rx inter (14, 15) + ODG + PT
                        </div>
                    </div>
                    
                     <div>
                        <h4 class="font-bold text-gray-800 dark:text-gray-200 mb-2 border-b border-gray-200 dark:border-gray-700 pb-1">Outras Siglas Comuns</h4>
                         <p class="text-gray-600 dark:text-gray-400 font-mono text-xs bg-gray-50 dark:bg-gray-800 p-2 rounded">POZE; ROZE; RIV; SEL; TEX</p>
                    </div>
                </div>`
        },

        materiais: {
            title: "Materiais - Dentística",
            summary: "Lista de instrumentais e materiais para clínica de Dentística.",
            content: `<div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <div>
                        <h4 class="font-bold text-primary dark:text-cyan-400 mb-2 border-b border-gray-200 dark:border-gray-700 pb-1">Carrinho e Bancada</h4>
                        <ul class="space-y-1 list-disc pl-4 text-gray-700 dark:text-gray-300">
                            <li>Anestésico</li>
                            <li>Agulha anestesia</li>
                            <li>Lençol de borracha</li>
                            <li>Ácido fosfórico</li>
                            <li>Sistema Adesivo</li>
                            <li>Resina composta</li>
                            <li>CIV (Cimento de Ionômero de Vidro)</li>
                            <li>Microbrush</li>
                            <li>Lâmina de bisturi n°12</li>
                            <li>Tira de Lixa</li>
                            <li>Discos de Lixa</li>
                            <li>Cunha de madeira</li>
                            <li>Tira de Poliéster</li>
                            <li>Papel carbono</li>
                            <li>Escala Vita</li>
                            <li>Gaze</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-bold text-primary dark:text-cyan-400 mb-2 border-b border-gray-200 dark:border-gray-700 pb-1">CME (Esterilização)</h4>
                        <ul class="space-y-1 list-disc pl-4 text-gray-700 dark:text-gray-300">
                            <li>Kit de Dentística</li>
                            <li>Kit de Isolamento</li>
                            <li>Arco de Young</li>
                            <li>Caneta de Alta Rotação</li>
                            <li>Caneta de Baixa Rotação</li>
                            <li>Kit de acabamento e polimento</li>
                            <li>Borrachas abrasivas</li>
                            <li>Espátula 24</li>
                            <li>Placa de vidro</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-bold text-primary dark:text-cyan-400 mb-2 border-b border-gray-200 dark:border-gray-700 pb-1">Janelinha (Solicitar)</h4>
                        <ul class="space-y-1 list-disc pl-4 text-gray-700 dark:text-gray-300">
                            <li>Grampos</li>
                            <li>Brocas</li>
                            <li>Pontas</li>
                            <li>Matriz</li>
                            <li>Fotopolimerizador</li>
                            <li>CIV encapsulado</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-bold text-primary dark:text-cyan-400 mb-2 border-b border-gray-200 dark:border-gray-700 pb-1">Material Pessoal</h4>
                        <ul class="space-y-1 list-disc pl-4 text-gray-700 dark:text-gray-300">
                            <li>Fio dental</li>
                            <li>Lubrificante</li>
                            <li>Caneta permanente</li>
                            <li>Pincel para acabamento</li>
                        </ul>
                    </div>
                </div>`
        },

        // A interface original possui a opção "Odontograma", mas o conteúdo
        // correspondente não foi encontrado nos dados incorporados ao HTML.
        // Substitua este aviso pelo odontograma original quando estiver disponível.
        odontograma: {
            title: 'Odontograma — Dentística',
            content: `<p class="text-gray-600 dark:text-gray-300">
                A referência visual do odontograma não estava incluída no
                HTML original fornecido. Adicione aqui o conteúdo ou a imagem
                autorizada quando estiver disponível.
            </p>`
        }
    };
})();
