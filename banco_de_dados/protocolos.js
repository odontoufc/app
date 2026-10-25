/**
 * Guia Clínico — Banco de protocolos clínicos.
 *
 * Fonte dos protocolos de Dentística: arquivo "Restaurações.docx"
 * fornecido pelo responsável pelo site. A apresentação conserva a divisão
 * original em protocolos individuais: Classe I; três variações de Classe II;
 * três acessos de Classe III; duas técnicas de Classe IV; duas variações
 * de Classe V; além de selante e isolamento absoluto.
 *
 * Estrutura lida por app.js:
 * { id, title, category, summary, content }
 * Os campos adicionais "group" e "order" permitem futuramente ordenar os
 * protocolos por classe/técnica, sem alterar o conteúdo.
 *
 * Conteúdo educacional transcrito do documento original. Procedimentos e
 * parâmetros clínicos devem ser revisados por responsável habilitado.
 * Não há Firebase, editor administrativo nem requisições de rede.
 * Carregue este arquivo ANTES de app.js.
 */
(function () {
    'use strict';
    window.GuiaClinicoDB = window.GuiaClinicoDB || {};

    const protocolosDentistica = [
    {
        "id": "dentistica-aplicacao-selante",
        "title": "Aplicação de selante",
        "category": "Dentística",
        "summary": "Aplicação de selante",
        "content": "<ol>\n<li>PROF (Pedra pomes, pote dappen, escova de robson e água)\n</li>\n<li>Isolamento absoluto (Pinça, dique de borracha e grampo)\n</li>\n<li>Condicionamento ácido 30s (Ácido fosfórico)\n</li>\n<li>Lavagem com água e ar - 30 seg\n</li>\n<li>Aplicação do selante (Selante e Sonda exploradora)\n</li>\n<li>Fotoativação - 20 seg (Fotopolimerizador)\n</li></ol>",
        "group": "Aplicação de selante",
        "order": 1
    },
    {
        "id": "dentistica-isolamento-absoluto",
        "title": "Isolamento absoluto",
        "category": "Dentística",
        "summary": "Isolamento do campo operatório",
        "content": "<ol>\n<li>Verificação dos contatos proximais (fio dental)\n</li>\n<li>Ajuste dos contatos proximais (tira de lixa)\n</li>\n<li>Seleção e teste do grampo\n</li>\n<li>Colocação do lençol de borracha no arco\n</li>\n<li>Posição do conjunto arco/lençol na face do paciente\n</li>\n<li>Marcação dos dentes que serão isolados\n</li>\n<li>Perfuração do dique de borracha\n</li>\n<li>Lubrificação da superfície interna\n</li>\n<li>Passar os dentes pelo lençol de borracha\n</li>\n<li>Instalação dos grampos\n</li>\n<li>Estabilização do lençol de borracha\n</li></ol>",
        "group": "Isolamento absoluto",
        "order": 2
    },
    {
        "id": "dentistica-classe-i",
        "title": "Classe I",
        "category": "Dentística",
        "summary": "Restaurações oclusais",
        "content": "<ol>\n<li>Diagnóstico (radiografia)\n</li>\n<li>Verificação dos contatos oclusais (Papel carbono e Pinça de Willis)\n</li>\n<li>Profilaxia (Caneta de baixa, Escova de Robson, Pote Dappen e Pasta profilática)\n</li>\n<li>Seleção de cor (90% dos casos - A2, A3 ou A3,5)\n</li>\n<li>Anestesia (Carpule e Anestésico)\n</li>\n<li>Isolamento absoluto (Lençol, Arco de Young, Perfurador, Grampo, Fio dental, Pinça porta-grampo, Espátula de invaginação)\n</li>\n<li>Acesso à lesão (Pontas esféricas em alta rotação)\n</li>\n<li>Forma de contorno (se necessário)\n</li>\n<li>Remoção de tecido cariado (Broca esférica CA4/CA6 em baixa rotação e colher de dentina)\n</li>\n<li>Procedimento Adesivo\n<ol class=\"list-[lower-alpha]\">\n</li>\n<li>Condicionamento ácido (Ácido fosfórico) 1 - 2 mm aquém das margens por 30 seg\n</li>\n<li>Lavagem e secagem (dentina por absorção e esmalte com jatos de ar) por 30 seg\n</li>\n<li>Aplicação do Primer (microbrush)\n</li>\n<li>Evaporação do solvente (jatos de ar à distância)\n</li>\n<li>Aplicação do Adesivo (microbrush)\n</li>\n<li>Fotoativação\n</li></ol>\n</li>\n<li>Inserção incremental da resina composta + Fotoativação\n</li>\n<li>Remoção do isolamento\n</li>\n<li>Checagem dos contatos oclusais\n</li>\n<li>Ajuste oclusal (Pontas diamantadas de granulações finas e extrafinas)\n</li>\n<li>Acabamento e polimento (borrachas sequências: verde, amarela e azul) com lubrificação\n</li></ol>",
        "group": "Classe I",
        "order": 3
    },
    {
        "id": "dentistica-classe-ii-simples-slot-horizontal",
        "title": "Classe II",
        "category": "Dentística",
        "summary": "Simples (estritamente proximal) - Técnica do slot horizontal",
        "content": "<h2>Simples (estritamente proximal) - Técnica do slot horizontal</h2>\n<ol>\n<li>Profilaxia\n</li>\n<li>Seleção de cor (90% dos casos - A2, A3 ou A3,5)\n</li>\n<li>Anestesia infiltrativa (Lidocaína 2%)\n</li>\n<li>Isolamento absoluto\n</li>\n<li>Preparo cavitário\n<ol class=\"list-[lower-alpha]\">\n</li>\n<li>Proteção do dente adjacente com matriz metálica\n</li>\n<li>Remoção de tecido cariado/restauração defeituosa\n</li>\n<li>Limpeza da cavidade\n</li></ol>\n</li>\n<li>Procedimento adesivo\n<ol class=\"list-[lower-alpha]\">\n</li>\n<li>Proteção do dente adjacente com tira de poliéster\n</li>\n<li>Condicionamento ácido (1 - 2 mm além das margens)\n</li>\n<li>Lavagem e secagem\n<ol style=\"list-style-type: lower-roman\">\n</li>\n<li>Dentina com algodão\n</li>\n<li>Esmalte com jatos de ar\n</li></ol>\n</li>\n<li>Aplicação do Primer (microbrush)\n</li>\n<li>Evaporação do solvente (jatos de ar à distância)\n</li>\n<li>Aplicação do Adesivo (microbrush)\n</li>\n<li>Fotoativação\n</li></ol>\n</li>\n<li>Inserção incremental da resina composta + Fotoativação\n</li>\n<li>Acabamento e polimento\n<ol class=\"list-[lower-alpha]\">\n</li>\n<li>Lâmina número 12\n</li>\n<li>Tiras de granulação fina\n</li></ol>\n</li></ol>",
        "group": "Classe II",
        "order": 4
    },
    {
        "id": "dentistica-classe-ii-composta-matriz-parcial-biconvexa",
        "title": "Classe II",
        "category": "Dentística",
        "summary": "Composta - Técnica da matriz metálica parcial biconvexa",
        "content": "<h2>Composta - Técnica da matriz metálica parcial biconvexa</h2>\n<ol>\n<li>Diagnóstico\n</li>\n<li>Aferição dos contatos oclusais\n</li>\n<li>Profilaxia\n</li>\n<li>Seleção de cor\n</li>\n<li>Anestesia\n</li>\n<li>Isolamento absoluto\n</li>\n<li>Preparo cavitário: remoção de tecido cariado/restauração defeituosa (Proteger o dente adjacente com matriz metálica)\n</li>\n<li>Procedimento adesivo\n<ol class=\"list-[lower-alpha]\">\n</li>\n<li>O procedimento adesivo deve ser realizado antes da adaptação da matriz. Será realizado após a adaptação da matriz quando esta atua como isolante nos casos de isolamento relativo\n</li>\n<li>Condicionamento ácido (1 - 2 mm além das margens)\n<ol style=\"list-style-type: lower-roman\">\n</li>\n<li>Aplica em esmalte - 15 seg\n</li>\n<li>Estende p/ dentina - 15 seg\n</li></ol>\n</li>\n<li>Lavagem e secagem (dentina com algodão e esmalte com jatos de ar)\n</li>\n<li>Aplicação do Primer (microbrush)\n</li>\n<li>Evaporação do solvente (jatos de ar à distância)\n</li>\n<li>Aplicação do Adesivo (microbrush)\n</li>\n<li>Fotoativação\n</li></ol>\n</li>\n<li>Adaptação da matriz metálica e estabilização com cunha\n</li>\n<li>Inserção incremental da resina + Fotoativação\n<ol class=\"list-[lower-alpha]\">\n</li>\n<li>Inicia pela caixa proximal com incrementos oblíquos\n</li>\n<li>Para compensar a distância entre o fotopolimerizador e o incremento, aumentar o tempo de fotopolimerização\n</li>\n<li>Remoção da matriz\n</li>\n<li>Finaliza a inserção da resina na oclusal\n</li></ol>\n</li>\n<li>Remoção do isolamento\n</li>\n<li>Checagem dos contatos oclusais + Ajuste oclusal (Pontas diamantadas de granulação fina e extrafina)\n</li>\n<li>Acabamento: Discos abrasivos flexíveis, tiras de lixa (proximal)\n</li>\n<li>Polimento: borrachas abrasivas sequenciais em ordem decrescente / escovas abrasivas especiais\n</li></ol>",
        "group": "Classe II",
        "order": 5
    },
    {
        "id": "dentistica-classe-ii-complexa-matriz-circunferencial",
        "title": "Classe II",
        "category": "Dentística",
        "summary": "Complexa - Técnica da matriz metálica circunferencial",
        "content": "<h2>Complexa - Técnica da matriz metálica circunferencial</h2>\n<ol>\n<li>Aferição dos contatos oclusais\n</li>\n<li>Profilaxia\n</li>\n<li>Seleção de cor\n</li>\n<li>Anestesia\n</li>\n<li>Isolamento absoluto\n</li>\n<li>Preparo cavitário: remoção de tecido cariado / restauração defeituosa\n<ol class=\"list-[lower-alpha]\">\n</li>\n<li>Inicia na face oclusal em direção às proximais\n</li>\n<li>Proteção do dentes adjacente com matriz metálica\n</li></ol>\n</li>\n<li>Procedimento adesivo\n<ol class=\"list-[lower-alpha]\">\n</li>\n<li>O procedimento adesivo deve ser realizado antes da adaptação da matriz. Será realizado após a adaptação da matriz quando esta atua como isolante nos casos de isolamento relativo\n</li>\n<li>Condicionamento ácido (1 - 2 mm além das margens)\n<ol style=\"list-style-type: lower-roman\">\n</li>\n<li>Aplica em esmalte - 15 seg\n</li>\n<li>Estende p/ dentina - 15 seg\n</li></ol>\n</li>\n<li>Lavagem e secagem (dentina com algodão e esmalte com jatos de ar)\n</li>\n<li>Aplicação do Primer (microbrush)\n</li>\n<li>Evaporação do solvente (jatos de ar à distância)\n</li>\n<li>Aplicação do Adesivo (microbrush)\n</li>\n<li>Fotoativação\n</li></ol>\n</li>\n<li>Adaptação da matriz metálica e estabilização com cunha\n</li>\n<li>Inserção incremental da resina + Fotoativação\n<ol class=\"list-[lower-alpha]\">\n</li>\n<li>Inicia pelas proximais\n</li>\n<li>Remove o conjunto porta matriz/matriz\n</li>\n<li>Finaliza na oclusal\n</li></ol>\n</li>\n<li>Remoção do isolamento\n</li>\n<li>Checagem dos contatos oclusais + Ajuste oclusal (Pontas diamantadas de granulação fina e extrafina)\n</li>\n<li>Acabamento: Discos abrasivos flexíveis, tiras de lixa (proximal)\n</li>\n<li>Polimento: borrachas abrasivas sequenciais em ordem decrescente / escovas abrasivas especiais\n</li></ol>",
        "group": "Classe II",
        "order": 6
    },
    {
        "id": "dentistica-classe-iii-acesso-estritamente-proximal",
        "title": "Classe III",
        "category": "Dentística",
        "summary": "Acesso estritamente proximal",
        "content": "<h2>Acesso estritamente proximal</h2>\n<ol>\n<li>Afastamento mediato com o auxílio de tiras ou anéis de borracha 24 a 48h antes do procedimento\n</li>\n<li>Atendimento subsequente: profilaxia seguida da manutenção do espaço interdental com uma cunha de madeira de tamanho compatível com a ameia\n</li>\n<li>Profilaxia\n</li>\n<li>Seleção de cor\n</li>\n<li>Anestesia\n</li>\n<li>Isolamento do campo operatório\n</li>\n<li>Proteção do dente adjacente com matriz metálica\n</li>\n<li>Preparo cavitário\n</li>\n<li>Limpeza da cavidade\n</li>\n<li>Proteção do dente adjacente com matriz de poliéster\n</li>\n<li>Procedimento adesivo\n<ol class=\"list-[lower-alpha]\">\n</li>\n<li>Condicionamento ácido\n</li>\n<li>Lavagem e secagem\n</li>\n<li>Sistema adesivo\n</li>\n<li>Evaporação do solvente à distância\n</li>\n<li>Fotoativação\n</li></ol>\n</li>\n<li>Inserção incremental da resina composta\n</li>\n<li>Acomodação com auxílio de pincéis\n</li>\n<li>Fotoativação\n</li>\n<li>Acabamento e polimento utilizando discos de lixa flexíveis para regularizar a superfície\n</li>\n<li>Discos de feltro para obtenção de brilho e lisura superficial\n</li>\n<li>Remove-se a cunha e o isolamento\n</li>\n<li>Em pouco tempo o espaço interproximal será reduzido ao normal\n</li></ol>",
        "group": "Classe III",
        "order": 7
    },
    {
        "id": "dentistica-classe-iii-acesso-palatal",
        "title": "Classe III",
        "category": "Dentística",
        "summary": "Acesso palatal",
        "content": "<h2>Acesso palatal</h2>\n<ol>\n<li>Aferição dos contatos oclusais\n</li>\n<li>Profilaxia\n</li>\n<li>Seleção de cor\n</li>\n<li>Anestesia\n</li>\n<li>Isolamento absoluto\n</li>\n<li>Separação dental com cunha de madeira para facilitar o acesso a lesão, caso haja comprometimento da visualização a cunha pode sofrer modificações com disco ou lâmina de bisturi\n</li>\n<li>Proteção do dente adjacente com matriz metálica\n</li>\n<li>Remoção do tecido cariado com brocas esféricas em baixa rotação\n</li>\n<li>Limpeza da cavidade\n</li>\n<li>Adição da matriz de poliéster entre o dente a ser restaurado e a cunha\n</li>\n<li>Procedimento adesivo\n<ol class=\"list-[lower-alpha]\">\n</li>\n<li>Condicionamento ácido\n</li>\n<li>Lavagem e secagem\n</li>\n<li>Aplicação do adesivo\n</li>\n<li>Evaporação do solvente\n</li>\n<li>Fotoativação\n</li></ol>\n</li>\n<li>Inserção de incremento de resina de esmalte para reconstrução da face proximal\n</li>\n<li>Remoção da cunha e tracionamento da matriz na direção vestibular para adaptação do incremento às margens do preparo\n</li>\n<li>Fotoativação\n</li>\n<li>Insere-se um incremento de resina para dentina\n</li>\n<li>Fotoativação\n</li>\n<li>Última camada de resina para esmalte\n</li>\n<li>Conformação com espátulas e pincéis\n</li>\n<li>Fotoativação\n</li>\n<li>Remoção do excesso interproximal com lâmina de bisturi n° 12\n</li>\n<li>Remoção do isolamento absoluto\n</li>\n<li>Acabamento e polimento\n<ol class=\"list-[lower-alpha]\">\n</li>\n<li>Lixas abrasivas de tamanho decrescente\n</li>\n<li>Verificação dos contatos oclusais e ajustes com pontas diamantadas extrafinas ou brocas multilaminadas\n</li>\n<li>Acabamento com borrachas abrasivas\n</li>\n<li>Polimento com escova Robson e pastas especiais\n</li></ol>\n</li></ol>",
        "group": "Classe III",
        "order": 8
    },
    {
        "id": "dentistica-classe-iii-acesso-vestibular",
        "title": "Classe III",
        "category": "Dentística",
        "summary": "Acesso vestibular",
        "content": "<h2>Acesso vestibular</h2>\n<ol>\n<li>Profilaxia\n</li>\n<li>Seleção de cores\n</li>\n<li>Isolamento absoluto\n</li>\n<li>Proteção do dente adjacente com matriz metálica\n</li>\n<li>Adaptação de cunha de madeira\n</li>\n<li>Preparo cavitário\n</li>\n<li>Remoção do tecido cavitário com brocas esféricas em baixa rotação\n</li>\n<li>Sistema adesivo\n</li>\n<li>Proteção do dente adjacente com tira de poliéster\n</li>\n<li>Condicionamento ácido\n</li>\n<li>Lavagem e secagem\n</li>\n<li>Sistema adesivo\n</li>\n<li>Estabilização da tira com cunha de madeira\n</li>\n<li>Inserção de incremento para esmalte para reconstrução da parede proximal\n</li>\n<li>Fotoativação ou Tracionamento da tira na direção palatal seguida da Fotoativação\n</li>\n<li>Reprodução da dentina\n</li>\n<li>Fotoativação\n</li>\n<li>Último incremento para esmalte\n</li>\n<li>Conformação com espátulas e pincéis\n</li>\n<li>Fotoativação\n</li>\n<li>Acabamento e polimento\n</li>\n<li>Tiras de lixa empregadas em ordem decrescente de abrasividade\n</li>\n<li>Discos abrasivos flexíveis para pequenos ajustes em ordem de abrasividade\n</li>\n<li>Pastas de polimento aplicadas com disco de feltro\n</li></ol>",
        "group": "Classe III",
        "order": 9
    },
    {
        "id": "dentistica-classe-iv-guia-de-silicone",
        "title": "Classe IV",
        "category": "Dentística",
        "summary": "Técnica da guia de silicone",
        "content": "<p>Envolvimento da face proximal e ângulo incisal dos dentes anteriores. Originada por lesões cariosas ou traumatismos bucais.</p>\n<h2>Técnica da guia de silicone</h2>\n<ol>\n<li>Profilaxia\n</li>\n<li>Seleção de cor\n</li>\n<li>Ensaio restaurador sem adesivo\n</li>\n<li>Confecção da guia de silicone\n<ol class=\"list-[lower-alpha]\">\n</li>\n<li>Moldagem da arcada\n</li>\n<li>Modelo em gesso\n</li>\n<li>Enceramento\n</li>\n<li>Molde sobre o modelo encerado\n</li>\n<li>Corte na região das bordas incisais com bisturi\n</li>\n<li>Obtém-se uma matriz\n</li></ol>\n</li>\n<li>Pode-se abrir mão do isolamento\n</li>\n<li>Inserção de fio retrator\n</li>\n<li>Proteção dos dentes adjacentes com tira poliéster\n</li>\n<li>Condicionamento ácido\n</li>\n<li>Sistema adesivo\n</li>\n<li>Fotoativação\n</li>\n<li>Inserção do primeiro compósito para esmalte na matriz de silicone\n</li>\n<li>Posicionamento da matriz\n</li>\n<li>Fotoativação\n</li>\n<li>Remoção da matriz\n</li>\n<li>Reprodução da dentina - Lóbulos de desenvolvimento\n</li>\n<li>Fotoativação\n</li>\n<li>Reprodução do halo incisal opaco\n</li>\n<li>Fotoativação\n</li>\n<li>Reprodução final dos lóbulos de desenvolvimento\n</li>\n<li>Fotoativação\n</li>\n<li>Inserção de compósito translúcido para preenchimento dos vales entre os mamelões - alta opalescência\n</li>\n<li>Fotoativação\n</li>\n<li>Último incremento para completar o volume da coroa\n</li>\n<li>Fotoativação\n</li>\n<li>Acabamento e polimento\n</li></ol>",
        "group": "Classe IV",
        "order": 10
    },
    {
        "id": "dentistica-classe-iv-reconstrucao-mao-livre",
        "title": "Classe IV",
        "category": "Dentística",
        "summary": "Técnica de reconstrução à mão livre",
        "content": "<p>Envolvimento da face proximal e ângulo incisal dos dentes anteriores. Originada por lesões cariosas ou traumatismos bucais.</p>\n<h2>Técnica de reconstrução à mão livre</h2>\n<ol>\n<li>Prolixafia\n</li>\n<li>Seleção de cor\n</li>\n<li>Isolamento\n</li>\n<li>Proteção do dente adjacente com matriz metálica estabilizada por cunha de madeira\n</li>\n<li>Preparo cavitário\n</li>\n<li>Execução do bisel vestibular - extensão ~ 2 mm\n<ol class=\"list-[lower-alpha]\">\n</li>\n<li>Transição gradual entre a espessura de resina composta da região restaurada em direção ao remanescente dental &gt; mascaramento das margens da restauração / expõe maior quantidade de esmalte instrumentado &gt; maior retenção da restauração e qualidade do selamento marginal\n</li>\n<li>Ponta diamantada em forma de chama posicionada em 45° com a superfície dental\n</li></ol>\n</li>\n<li>Limpeza\n</li>\n<li>Proteção do dente adjacente com matriz de poliéster\n</li>\n<li>Condicionamento ácido\n</li>\n<li>Lavagem\n</li>\n<li>Remoção do excesso de umidade\n</li>\n<li>Sistema adesivo\n</li>\n<li>Fotoativação\n</li>\n<li>Adaptação da tira de poliéster ao dente a ser restaurado com cunha de madeira\n</li>\n<li>Realiza-se pressão digital para definir o contorno da face palatal\n</li>\n<li>Inserção de resina para reproduzir o esmalte palatal\n</li>\n<li>Fotoativação\n</li>\n<li>Reprodução dos mamelões com compósito de translucidez baixa\n</li>\n<li>Fotoativação\n</li>\n<li>Reprodução do halo radiopaco incisal\n</li>\n<li>Fotoativação\n</li>\n<li>Reprodução final dos mamelões\n</li>\n<li>Preenchimento por compósito translúcido e opalescente\n</li>\n<li>Fotoativação\n</li>\n<li>Camada final de esmalte vestibular\n</li>\n<li>Escultura com pincéis\n</li>\n<li>Fotoativação\n</li>\n<li>Acabamento e polimento em duas sessões\n</li></ol>",
        "group": "Classe IV",
        "order": 11
    },
    {
        "id": "dentistica-classe-v-lesoes-nao-cariosas",
        "title": "Classe V",
        "category": "Dentística",
        "summary": "Lesões não cariosas",
        "content": "<h2>Lesões não cariosas</h2>\n<ol>\n<li>Controle dos fatores etiológicos\n</li>\n<li>Profilaxia\n</li>\n<li>Seleção de cores\n</li>\n<li>Isolamento absoluto com grampos retratores\n</li>\n<li>Condicionamento ácido\n</li>\n<li>Lavagem e manutenção da umidade\n</li>\n<li>Sistema adesivo\n</li>\n<li>Evaporação do solvente\n</li>\n<li>Fotoativação\n</li>\n<li>Inserção da resina com bom polimento\n</li>\n<li>Adaptação com espátulas e pincéis\n</li>\n<li>Checagem de excessos\n</li>\n<li>Fotoativação\n</li>\n<li>Segundo incremento\n</li>\n<li>Fotoativa\n</li>\n<li>Última camada\n</li>\n<li>Utilizar pincéis\n</li>\n<li>Observar o perfil da restauração em vistas incisais e laterais\n</li>\n<li>Fotoativação\n</li>\n<li>Acabamento e polimento\n</li>\n<li>Remoção de excessos com lâmina de bisturi n° 12 e discos flexíveis abrasivos\n</li>\n<li>Polimento final com pastas de polimento aplicadas com escova Robinson ou discos de feltro\n</li></ol>",
        "group": "Classe V",
        "order": 12
    },
    {
        "id": "dentistica-classe-v-lesoes-cariosas",
        "title": "Classe V",
        "category": "Dentística",
        "summary": "Lesões cariosas",
        "content": "<h2>Lesões cariosas</h2>\n<ol>\n<li>Profilaxia\n</li>\n<li>Seleção de cor\n</li>\n<li>Isolamento absoluto com grampo retrator\n</li>\n<li>Remoção do tecido cariado com brocas esféricas com tamanho compatível com a cavidade em baixa rotação\n</li>\n<li>Condicionamento ácido por 15 seg e lavagem\n</li>\n<li>Sistema adesivo\n</li>\n<li>Fotoativação\n</li>\n<li>Inserção incremental da resina composta com bom polimento\n</li>\n<li>Primeiro incremento de dentina - Axial e Gengival\n</li>\n<li>Fotoativa\n</li>\n<li>Segundo incremento de dentina - Axial e Oclusal\n</li>\n<li>Fotoativa\n</li>\n<li>Último incremento de dentina no centro da cavidade\n</li>\n<li>Utiliza-se pincéis\n</li>\n<li>Fotoativação por 40 seg\n</li>\n<li>Incrementos de esmalte e escultura minuciosa com pinceis\n</li>\n<li>Fotoativação\n</li>\n<li>Remoção do isolamento e grampo\n</li>\n<li>Acabamento e polimento\n</li>\n<li>Discos abrasivos em ordem decrescente de abrasividade\n</li>\n<li>Pasta de polimento com disco de feltro\n</li></ol>",
        "group": "Classe V",
        "order": 13
    }
];

    // Evita duplicatas caso o script seja carregado novamente e preserva
    // registros de outras especialidades adicionados futuramente.
    const anteriores = Array.isArray(window.GuiaClinicoDB.protocolos)
        ? window.GuiaClinicoDB.protocolos
        : [];
    const idsNovos = new Set(protocolosDentistica.map((p) => p.id));
    window.GuiaClinicoDB.protocolos = [
        ...anteriores.filter((p) => p && !idsNovos.has(p.id)),
        ...protocolosDentistica
    ];
})();
