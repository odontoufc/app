/**
 * Guia Clínico - Banco de protocolos clínicos.
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


    // ────────────────────────────────────────────────────────────────
    // CLASSIFICAÇÃO PARA O FLUXOGRAMA DE DENTÍSTICA
    // Preserva todos os protocolos originais e seus passos literalmente.
    // Acrescenta checklist de materiais aos conteúdos já existentes.
    // Complementos de ionômero NÃO são publicados como protocolos oficiais.
    // ────────────────────────────────────────────────────────────────
    const metaDentistica = [
    {
        "id": "dentistica-aplicacao-selante",
        "classe": "apoio",
        "variacao": "selante",
        "material": "selante",
        "materiais": [
            "Pedra-pomes, pote Dappen e escova de Robinson",
            "Selante e sonda exploradora",
            "Ácido fosfórico e material de lavagem",
            "Fotopolimerizador",
            "Fio dental e tira de lixa",
            "Arco, lençol de borracha e perfurador",
            "Grampos e pinça porta-grampo",
            "Lubrificante e instrumento para invaginação/estabilização"
        ]
    },
    {
        "id": "dentistica-isolamento-absoluto",
        "classe": "apoio",
        "variacao": "isolamento",
        "material": "nenhum",
        "materiais": [
            "Fio dental e tira de lixa",
            "Arco, lençol de borracha e perfurador",
            "Grampos e pinça porta-grampo",
            "Lubrificante e instrumento para invaginação/estabilização"
        ]
    },
    {
        "id": "dentistica-classe-i",
        "classe": "I",
        "variacao": "oclusal",
        "material": "resina",
        "materiais": [
            "Kit de Dentística",
            "Espelho, sonda e pinça clínica",
            "Equipamentos de proteção individual",
            "Gaze e algodão",
            "Kit de isolamento absoluto",
            "Lençol de borracha, arco de Young, grampos, pinça porta-grampo e perfurador",
            "Fio dental e lubrificante",
            "Canetas de alta e baixa rotação",
            "Brocas e pontas adequadas à preparação",
            "Colher de dentina",
            "Água para irrigação e limpeza",
            "Anestésico local e agulha anestésica, quando indicados",
            "Resina composta na cor selecionada",
            "Escala de cor",
            "Sistema adesivo, ácido fosfórico e microbrush",
            "Fotopolimerizador",
            "Instrumentos para inserção e escultura da resina",
            "Kit de acabamento e polimento (discos, tiras, pontas/borrachas conforme a superfície)",
            "Papel carbono para contatos oclusais e pinça",
            "Pontas de acabamento e borrachas abrasivas"
        ]
    },
    {
        "id": "dentistica-classe-ii-simples-slot-horizontal",
        "classe": "II",
        "variacao": "simples",
        "material": "resina",
        "materiais": [
            "Kit de Dentística",
            "Espelho, sonda e pinça clínica",
            "Equipamentos de proteção individual",
            "Gaze e algodão",
            "Kit de isolamento absoluto",
            "Lençol de borracha, arco de Young, grampos, pinça porta-grampo e perfurador",
            "Fio dental e lubrificante",
            "Canetas de alta e baixa rotação",
            "Brocas e pontas adequadas à preparação",
            "Colher de dentina",
            "Água para irrigação e limpeza",
            "Anestésico local e agulha anestésica, quando indicados",
            "Resina composta na cor selecionada",
            "Escala de cor",
            "Sistema adesivo, ácido fosfórico e microbrush",
            "Fotopolimerizador",
            "Instrumentos para inserção e escultura da resina",
            "Kit de acabamento e polimento (discos, tiras, pontas/borrachas conforme a superfície)",
            "Matriz metálica ou tira de poliéster conforme acesso",
            "Cunha de madeira e instrumentos de adaptação",
            "Tira de lixa e lâmina n.º 12 quando indicadas"
        ]
    },
    {
        "id": "dentistica-classe-ii-composta-matriz-parcial-biconvexa",
        "classe": "II",
        "variacao": "composta",
        "material": "resina",
        "materiais": [
            "Kit de Dentística",
            "Espelho, sonda e pinça clínica",
            "Equipamentos de proteção individual",
            "Gaze e algodão",
            "Kit de isolamento absoluto",
            "Lençol de borracha, arco de Young, grampos, pinça porta-grampo e perfurador",
            "Fio dental e lubrificante",
            "Canetas de alta e baixa rotação",
            "Brocas e pontas adequadas à preparação",
            "Colher de dentina",
            "Água para irrigação e limpeza",
            "Anestésico local e agulha anestésica, quando indicados",
            "Resina composta na cor selecionada",
            "Escala de cor",
            "Sistema adesivo, ácido fosfórico e microbrush",
            "Fotopolimerizador",
            "Instrumentos para inserção e escultura da resina",
            "Kit de acabamento e polimento (discos, tiras, pontas/borrachas conforme a superfície)",
            "Matriz metálica ou tira de poliéster conforme acesso",
            "Cunha de madeira e instrumentos de adaptação",
            "Tira de lixa e lâmina n.º 12 quando indicadas",
            "Papel carbono para contatos oclusais e pinça",
            "Pontas de acabamento e borrachas abrasivas"
        ]
    },
    {
        "id": "dentistica-classe-ii-complexa-matriz-circunferencial",
        "classe": "II",
        "variacao": "complexa",
        "material": "resina",
        "materiais": [
            "Kit de Dentística",
            "Espelho, sonda e pinça clínica",
            "Equipamentos de proteção individual",
            "Gaze e algodão",
            "Kit de isolamento absoluto",
            "Lençol de borracha, arco de Young, grampos, pinça porta-grampo e perfurador",
            "Fio dental e lubrificante",
            "Canetas de alta e baixa rotação",
            "Brocas e pontas adequadas à preparação",
            "Colher de dentina",
            "Água para irrigação e limpeza",
            "Anestésico local e agulha anestésica, quando indicados",
            "Resina composta na cor selecionada",
            "Escala de cor",
            "Sistema adesivo, ácido fosfórico e microbrush",
            "Fotopolimerizador",
            "Instrumentos para inserção e escultura da resina",
            "Kit de acabamento e polimento (discos, tiras, pontas/borrachas conforme a superfície)",
            "Matriz metálica ou tira de poliéster conforme acesso",
            "Cunha de madeira e instrumentos de adaptação",
            "Tira de lixa e lâmina n.º 12 quando indicadas",
            "Papel carbono para contatos oclusais e pinça",
            "Pontas de acabamento e borrachas abrasivas"
        ]
    },
    {
        "id": "dentistica-classe-iii-acesso-estritamente-proximal",
        "classe": "III",
        "variacao": "estritamente_proximal",
        "material": "resina",
        "materiais": [
            "Kit de Dentística",
            "Espelho, sonda e pinça clínica",
            "Equipamentos de proteção individual",
            "Gaze e algodão",
            "Kit de isolamento absoluto",
            "Lençol de borracha, arco de Young, grampos, pinça porta-grampo e perfurador",
            "Fio dental e lubrificante",
            "Canetas de alta e baixa rotação",
            "Brocas e pontas adequadas à preparação",
            "Colher de dentina",
            "Água para irrigação e limpeza",
            "Resina composta na cor selecionada",
            "Escala de cor",
            "Sistema adesivo, ácido fosfórico e microbrush",
            "Fotopolimerizador",
            "Instrumentos para inserção e escultura da resina",
            "Kit de acabamento e polimento (discos, tiras, pontas/borrachas conforme a superfície)",
            "Matriz metálica ou tira de poliéster conforme acesso",
            "Cunha de madeira e instrumentos de adaptação",
            "Tira de lixa e lâmina n.º 12 quando indicadas"
        ]
    },
    {
        "id": "dentistica-classe-iii-acesso-palatal",
        "classe": "III",
        "variacao": "palatal",
        "material": "resina",
        "materiais": [
            "Kit de Dentística",
            "Espelho, sonda e pinça clínica",
            "Equipamentos de proteção individual",
            "Gaze e algodão",
            "Kit de isolamento absoluto",
            "Lençol de borracha, arco de Young, grampos, pinça porta-grampo e perfurador",
            "Fio dental e lubrificante",
            "Canetas de alta e baixa rotação",
            "Brocas e pontas adequadas à preparação",
            "Colher de dentina",
            "Água para irrigação e limpeza",
            "Resina composta na cor selecionada",
            "Escala de cor",
            "Sistema adesivo, ácido fosfórico e microbrush",
            "Fotopolimerizador",
            "Instrumentos para inserção e escultura da resina",
            "Kit de acabamento e polimento (discos, tiras, pontas/borrachas conforme a superfície)",
            "Matriz metálica ou tira de poliéster conforme acesso",
            "Cunha de madeira e instrumentos de adaptação",
            "Tira de lixa e lâmina n.º 12 quando indicadas"
        ]
    },
    {
        "id": "dentistica-classe-iii-acesso-vestibular",
        "classe": "III",
        "variacao": "vestibular",
        "material": "resina",
        "materiais": [
            "Kit de Dentística",
            "Espelho, sonda e pinça clínica",
            "Equipamentos de proteção individual",
            "Gaze e algodão",
            "Kit de isolamento absoluto",
            "Lençol de borracha, arco de Young, grampos, pinça porta-grampo e perfurador",
            "Fio dental e lubrificante",
            "Canetas de alta e baixa rotação",
            "Brocas e pontas adequadas à preparação",
            "Colher de dentina",
            "Água para irrigação e limpeza",
            "Resina composta na cor selecionada",
            "Escala de cor",
            "Sistema adesivo, ácido fosfórico e microbrush",
            "Fotopolimerizador",
            "Instrumentos para inserção e escultura da resina",
            "Kit de acabamento e polimento (discos, tiras, pontas/borrachas conforme a superfície)",
            "Matriz metálica ou tira de poliéster conforme acesso",
            "Cunha de madeira e instrumentos de adaptação",
            "Tira de lixa e lâmina n.º 12 quando indicadas"
        ]
    },
    {
        "id": "dentistica-classe-iv-guia-de-silicone",
        "classe": "IV",
        "variacao": "guia_silicone",
        "material": "resina",
        "materiais": [
            "Kit de Dentística",
            "Espelho, sonda e pinça clínica",
            "Equipamentos de proteção individual",
            "Gaze e algodão",
            "Kit de isolamento absoluto",
            "Lençol de borracha, arco de Young, grampos, pinça porta-grampo e perfurador",
            "Fio dental e lubrificante",
            "Canetas de alta e baixa rotação",
            "Brocas e pontas adequadas à preparação",
            "Colher de dentina",
            "Água para irrigação e limpeza",
            "Resina composta na cor selecionada",
            "Escala de cor",
            "Sistema adesivo, ácido fosfórico e microbrush",
            "Fotopolimerizador",
            "Instrumentos para inserção e escultura da resina",
            "Kit de acabamento e polimento (discos, tiras, pontas/borrachas conforme a superfície)",
            "Matriz metálica ou tira de poliéster conforme acesso",
            "Cunha de madeira e instrumentos de adaptação",
            "Tira de lixa e lâmina n.º 12 quando indicadas",
            "Guia de silicone confeccionada após planejamento/enceramento",
            "Instrumentos para confeccionar e recortar a guia"
        ]
    },
    {
        "id": "dentistica-classe-iv-reconstrucao-mao-livre",
        "classe": "IV",
        "variacao": "mao_livre",
        "material": "resina",
        "materiais": [
            "Kit de Dentística",
            "Espelho, sonda e pinça clínica",
            "Equipamentos de proteção individual",
            "Gaze e algodão",
            "Kit de isolamento absoluto",
            "Lençol de borracha, arco de Young, grampos, pinça porta-grampo e perfurador",
            "Fio dental e lubrificante",
            "Canetas de alta e baixa rotação",
            "Brocas e pontas adequadas à preparação",
            "Colher de dentina",
            "Água para irrigação e limpeza",
            "Resina composta na cor selecionada",
            "Escala de cor",
            "Sistema adesivo, ácido fosfórico e microbrush",
            "Fotopolimerizador",
            "Instrumentos para inserção e escultura da resina",
            "Kit de acabamento e polimento (discos, tiras, pontas/borrachas conforme a superfície)",
            "Matriz metálica ou tira de poliéster conforme acesso",
            "Cunha de madeira e instrumentos de adaptação",
            "Tira de lixa e lâmina n.º 12 quando indicadas"
        ]
    },
    {
        "id": "dentistica-classe-v-lesoes-nao-cariosas",
        "classe": "V",
        "variacao": "nao_cariosa",
        "material": "resina",
        "materiais": [
            "Kit de Dentística",
            "Espelho, sonda e pinça clínica",
            "Equipamentos de proteção individual",
            "Gaze e algodão",
            "Kit de isolamento absoluto",
            "Lençol de borracha, arco de Young, grampos, pinça porta-grampo e perfurador",
            "Fio dental e lubrificante",
            "Resina composta na cor selecionada",
            "Escala de cor",
            "Sistema adesivo, ácido fosfórico e microbrush",
            "Fotopolimerizador",
            "Instrumentos para inserção e escultura da resina",
            "Kit de acabamento e polimento (discos, tiras, pontas/borrachas conforme a superfície)",
            "Grampo retrator e instrumentos para afastamento gengival, quando necessários"
        ]
    },
    {
        "id": "dentistica-classe-v-lesoes-cariosas",
        "classe": "V",
        "variacao": "cariosa",
        "material": "resina",
        "materiais": [
            "Kit de Dentística",
            "Espelho, sonda e pinça clínica",
            "Equipamentos de proteção individual",
            "Gaze e algodão",
            "Kit de isolamento absoluto",
            "Lençol de borracha, arco de Young, grampos, pinça porta-grampo e perfurador",
            "Fio dental e lubrificante",
            "Canetas de alta e baixa rotação",
            "Brocas e pontas adequadas à preparação",
            "Colher de dentina",
            "Água para irrigação e limpeza",
            "Resina composta na cor selecionada",
            "Escala de cor",
            "Sistema adesivo, ácido fosfórico e microbrush",
            "Fotopolimerizador",
            "Instrumentos para inserção e escultura da resina",
            "Kit de acabamento e polimento (discos, tiras, pontas/borrachas conforme a superfície)",
            "Grampo retrator e instrumentos para afastamento gengival, quando necessários"
        ]
    }
];
    const metaPorId = new Map(metaDentistica.map(item => [item.id, item]));
    const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({
        '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
    }[character]));
    const listaMateriaisHtml = materiais =>
        `<ul>${materiais.map(m => `<li>${escapeHtml(m)}</li>`).join('')}</ul>`;
    const fonteOriginal = "Restaurações.docx - material didático fornecido para o Guia Clínico (UFC Sobral); transcrição preservada.";
    const fonteMateriais = "Checklist de Materiais - Dentística (banco_de_dados/dentistica.js, UFC Sobral).";
    protocolosDentistica.forEach(protocolo => {
        const meta = metaPorId.get(protocolo.id);
        if (!meta) return;
        Object.assign(protocolo, meta);
        protocolo.status = 'transcrito_documento';
        protocolo.fonte = fonteOriginal;
        protocolo.conteudoOriginal = protocolo.content;
        protocolo.content =
            `<h2>Materiais necessários</h2>${listaMateriaisHtml(meta.materiais)}` +
            `<h2>Passo a passo</h2>${protocolo.conteudoOriginal}` +
            `<hr><p class="text-sm"><strong>Fonte do passo a passo:</strong> ${escapeHtml(fonteOriginal)}</p>` +
            `<p class="text-sm"><strong>Base da lista de materiais:</strong> ${escapeHtml(fonteMateriais)} ` +
            `Seleção organizada a partir das etapas de cada procedimento; conferir com o professor.</p>`;
    });

    // Possibilidades com CIV sem protocolo clínico fornecido:
    // propostas separadas para curadoria da equipe, não inseridas em .protocolos.
    const complementaresDentistica = [
    {
        "id": "dentistica-classe-i-oclusal-civ",
        "title": "Restauração oclusal com ionômero",
        "category": "Dentística",
        "summary": "Classe I - oclusal • CIV (proposta em revisão)",
        "classe": "I",
        "variacao": "oclusal",
        "material": "ionomero_vidro",
        "status": "revisao_docente",
        "publicar": false,
        "fonte": "Material complementar de planejamento, elaborado para revisão docente; não integra o protocolo Restaurações.docx.",
        "materiais": [
            "Kit de Dentística",
            "Espelho, sonda e pinça clínica",
            "Equipamentos de proteção individual",
            "Gaze e algodão",
            "Kit de isolamento absoluto",
            "Lençol de borracha, arco de Young, grampos, pinça porta-grampo e perfurador",
            "Fio dental e lubrificante",
            "Cimento de ionômero de vidro (CIV) adequado à indicação",
            "Condicionador de superfície e acessórios conforme o produto",
            "Instrumentos de manipulação/inserção, placa de vidro ou cápsula e aplicador conforme apresentação",
            "Material de proteção superficial conforme fabricante",
            "Fotopolimerizador somente se o CIV escolhido exigir fotoativação",
            "Instrumentos de acabamento e ajuste oclusal compatíveis"
        ],
        "etapasPropostas": [
            "Selecionar a indicação conforme dente, área de carga e tipo de CIV; avaliar alternativas quando a restauração suportará esforço oclusal importante.",
            "Diagnosticar e avaliar radiograficamente quando indicado; registrar contatos oclusais antes do preparo.",
            "Realizar profilaxia, controle de umidade e anestesia se indicada.",
            "Acessar a lesão e realizar a remoção de tecido cariado de acordo com o planejamento clínico.",
            "Preparar e condicionar a superfície conforme as instruções específicas do CIV escolhido.",
            "Manipular/ativar o material conforme apresentação, preencher a cavidade e conformar a anatomia com controle da umidade.",
            "Aguardar presa ou fotoativar apenas quando previsto pelo fabricante; proteger a superfície conforme orientação do produto.",
            "Remover o isolamento, verificar contatos, ajustar e finalizar de acordo com o tempo de presa e as instruções do fabricante."
        ],
        "content": "<p><strong>Proposta didática para revisão docente:</strong> sequência geral de planejamento, não extraída do documento Restaurações.docx. Aplicabilidade depende do diagnóstico, da indicação do material e das instruções do fabricante.</p><p><strong>Restrição importante:</strong> CIV convencional/modificado não deve ser escolhido automaticamente em áreas de alta carga; a seleção deve ser validada pelo professor responsável.</p><h2>Materiais necessários (sugestão)</h2><ul>\n<li>Kit de Dentística</li>\n<li>Espelho, sonda e pinça clínica</li>\n<li>Equipamentos de proteção individual</li>\n<li>Gaze e algodão</li>\n<li>Kit de isolamento absoluto</li>\n<li>Lençol de borracha, arco de Young, grampos, pinça porta-grampo e perfurador</li>\n<li>Fio dental e lubrificante</li>\n<li>Cimento de ionômero de vidro (CIV) adequado à indicação</li>\n<li>Condicionador de superfície e acessórios conforme o produto</li>\n<li>Instrumentos de manipulação/inserção, placa de vidro ou cápsula e aplicador conforme apresentação</li>\n<li>Material de proteção superficial conforme fabricante</li>\n<li>Fotopolimerizador somente se o CIV escolhido exigir fotoativação</li>\n<li>Instrumentos de acabamento e ajuste oclusal compatíveis</li>\n</ul><h2>Sequência para avaliação docente</h2><ol>\n<li>Selecionar a indicação conforme dente, área de carga e tipo de CIV; avaliar alternativas quando a restauração suportará esforço oclusal importante.</li>\n<li>Diagnosticar e avaliar radiograficamente quando indicado; registrar contatos oclusais antes do preparo.</li>\n<li>Realizar profilaxia, controle de umidade e anestesia se indicada.</li>\n<li>Acessar a lesão e realizar a remoção de tecido cariado de acordo com o planejamento clínico.</li>\n<li>Preparar e condicionar a superfície conforme as instruções específicas do CIV escolhido.</li>\n<li>Manipular/ativar o material conforme apresentação, preencher a cavidade e conformar a anatomia com controle da umidade.</li>\n<li>Aguardar presa ou fotoativar apenas quando previsto pelo fabricante; proteger a superfície conforme orientação do produto.</li>\n<li>Remover o isolamento, verificar contatos, ajustar e finalizar de acordo com o tempo de presa e as instruções do fabricante.</li>\n</ol><p><strong>Fontes:</strong> Material complementar de planejamento, elaborado para revisão docente; não integra o protocolo Restaurações.docx. American Dental Association. Materials for Direct Restorations; Clinical Practice Guideline on Restorative Treatments for Caries Lesions (2023).</p>",
        "group": "Classe I",
        "order": 100
    },
    {
        "id": "dentistica-classe-ii-simples-civ",
        "title": "Classe II simples com ionômero",
        "category": "Dentística",
        "summary": "Classe II - simples • CIV (proposta em revisão)",
        "classe": "II",
        "variacao": "simples",
        "material": "ionomero_vidro",
        "status": "revisao_docente",
        "publicar": false,
        "fonte": "Material complementar de planejamento, elaborado para revisão docente; não integra o protocolo Restaurações.docx.",
        "materiais": [
            "Kit de Dentística",
            "Espelho, sonda e pinça clínica",
            "Equipamentos de proteção individual",
            "Gaze e algodão",
            "Kit de isolamento absoluto",
            "Lençol de borracha, arco de Young, grampos, pinça porta-grampo e perfurador",
            "Fio dental e lubrificante",
            "Cimento de ionômero de vidro (CIV) adequado à indicação",
            "Condicionador de superfície e acessórios conforme o produto",
            "Instrumentos de manipulação/inserção, placa de vidro ou cápsula e aplicador conforme apresentação",
            "Material de proteção superficial conforme fabricante",
            "Fotopolimerizador somente se o CIV escolhido exigir fotoativação",
            "Instrumentos de acabamento e ajuste oclusal compatíveis",
            "Matriz metálica ou tira de poliéster conforme acesso",
            "Cunha de madeira e instrumentos de adaptação",
            "Tira de lixa e lâmina n.º 12 quando indicadas"
        ],
        "etapasPropostas": [
            "Confirmar a indicação para superfície proximal e a ausência de solicitação mecânica incompatível com o CIV escolhido; discutir com o professor.",
            "Diagnosticar e identificar a cavidade estritamente proximal; planejar a técnica de acesso e a manutenção do ponto de contato.",
            "Realizar profilaxia, anestesia se indicada e isolamento/controle de umidade.",
            "Proteger o dente adjacente e preparar a cavidade segundo o diagnóstico.",
            "Selecionar e adaptar a matriz apropriada e cunha conforme anatomia proximal.",
            "Aplicar condicionador apenas conforme especificações do CIV; manipular e inserir o material mantendo proteção contra umidade/desidratação durante a presa.",
            "Remover os acessórios após a presa adequada; verificar contato proximal, margens e condição oclusal, respeitando as limitações do material.",
            "Executar proteção superficial, acabamento e orientações conforme produto e supervisão docente."
        ],
        "content": "<p><strong>Proposta didática para revisão docente:</strong> sequência geral de planejamento, não extraída do documento Restaurações.docx. Aplicabilidade depende do diagnóstico, da indicação do material e das instruções do fabricante.</p><p><strong>Restrição importante:</strong> CIV convencional/modificado não deve ser escolhido automaticamente em áreas de alta carga; a seleção deve ser validada pelo professor responsável.</p><h2>Materiais necessários (sugestão)</h2><ul>\n<li>Kit de Dentística</li>\n<li>Espelho, sonda e pinça clínica</li>\n<li>Equipamentos de proteção individual</li>\n<li>Gaze e algodão</li>\n<li>Kit de isolamento absoluto</li>\n<li>Lençol de borracha, arco de Young, grampos, pinça porta-grampo e perfurador</li>\n<li>Fio dental e lubrificante</li>\n<li>Cimento de ionômero de vidro (CIV) adequado à indicação</li>\n<li>Condicionador de superfície e acessórios conforme o produto</li>\n<li>Instrumentos de manipulação/inserção, placa de vidro ou cápsula e aplicador conforme apresentação</li>\n<li>Material de proteção superficial conforme fabricante</li>\n<li>Fotopolimerizador somente se o CIV escolhido exigir fotoativação</li>\n<li>Instrumentos de acabamento e ajuste oclusal compatíveis</li>\n<li>Matriz metálica ou tira de poliéster conforme acesso</li>\n<li>Cunha de madeira e instrumentos de adaptação</li>\n<li>Tira de lixa e lâmina n.º 12 quando indicadas</li>\n</ul><h2>Sequência para avaliação docente</h2><ol>\n<li>Confirmar a indicação para superfície proximal e a ausência de solicitação mecânica incompatível com o CIV escolhido; discutir com o professor.</li>\n<li>Diagnosticar e identificar a cavidade estritamente proximal; planejar a técnica de acesso e a manutenção do ponto de contato.</li>\n<li>Realizar profilaxia, anestesia se indicada e isolamento/controle de umidade.</li>\n<li>Proteger o dente adjacente e preparar a cavidade segundo o diagnóstico.</li>\n<li>Selecionar e adaptar a matriz apropriada e cunha conforme anatomia proximal.</li>\n<li>Aplicar condicionador apenas conforme especificações do CIV; manipular e inserir o material mantendo proteção contra umidade/desidratação durante a presa.</li>\n<li>Remover os acessórios após a presa adequada; verificar contato proximal, margens e condição oclusal, respeitando as limitações do material.</li>\n<li>Executar proteção superficial, acabamento e orientações conforme produto e supervisão docente.</li>\n</ol><p><strong>Fontes:</strong> Material complementar de planejamento, elaborado para revisão docente; não integra o protocolo Restaurações.docx. American Dental Association. Materials for Direct Restorations; Clinical Practice Guideline on Restorative Treatments for Caries Lesions (2023).</p>",
        "group": "Classe II",
        "order": 101
    },
    {
        "id": "dentistica-classe-ii-composta-civ",
        "title": "Classe II composta com ionômero",
        "category": "Dentística",
        "summary": "Classe II - composta • CIV (proposta em revisão)",
        "classe": "II",
        "variacao": "composta",
        "material": "ionomero_vidro",
        "status": "revisao_docente",
        "publicar": false,
        "fonte": "Material complementar de planejamento, elaborado para revisão docente; não integra o protocolo Restaurações.docx.",
        "materiais": [
            "Kit de Dentística",
            "Espelho, sonda e pinça clínica",
            "Equipamentos de proteção individual",
            "Gaze e algodão",
            "Kit de isolamento absoluto",
            "Lençol de borracha, arco de Young, grampos, pinça porta-grampo e perfurador",
            "Fio dental e lubrificante",
            "Cimento de ionômero de vidro (CIV) adequado à indicação",
            "Condicionador de superfície e acessórios conforme o produto",
            "Instrumentos de manipulação/inserção, placa de vidro ou cápsula e aplicador conforme apresentação",
            "Material de proteção superficial conforme fabricante",
            "Fotopolimerizador somente se o CIV escolhido exigir fotoativação",
            "Instrumentos de acabamento e ajuste oclusal compatíveis",
            "Matriz metálica ou tira de poliéster conforme acesso",
            "Cunha de madeira e instrumentos de adaptação",
            "Tira de lixa e lâmina n.º 12 quando indicadas",
            "Papel carbono para contatos oclusais e pinça",
            "Pontas de acabamento e borrachas abrasivas"
        ],
        "etapasPropostas": [
            "Avaliar extensão proximal/oclusal e risco de carga; não presumir indicação de CIV como restauração definitiva em área de alta solicitação.",
            "Planejar diagnóstico, profilaxia, seleção de material e isolamento do campo.",
            "Realizar acesso e remoção do tecido afetado conforme avaliação clínica; proteger a estrutura adjacente.",
            "Adaptar matriz parcial e cunha, se adequadas ao caso e ao material, para reconstrução proximal.",
            "Realizar condicionamento e manipulação do CIV de acordo com o fabricante; inserir e conformar o material respeitando presa e controle de umidade.",
            "Reavaliar contato proximal, superfície oclusal e necessidade de alternativa restauradora mais resistente.",
            "Proteger, finalizar e checar a oclusão de acordo com o produto e a avaliação do professor."
        ],
        "content": "<p><strong>Proposta didática para revisão docente:</strong> sequência geral de planejamento, não extraída do documento Restaurações.docx. Aplicabilidade depende do diagnóstico, da indicação do material e das instruções do fabricante.</p><p><strong>Restrição importante:</strong> CIV convencional/modificado não deve ser escolhido automaticamente em áreas de alta carga; a seleção deve ser validada pelo professor responsável.</p><h2>Materiais necessários (sugestão)</h2><ul>\n<li>Kit de Dentística</li>\n<li>Espelho, sonda e pinça clínica</li>\n<li>Equipamentos de proteção individual</li>\n<li>Gaze e algodão</li>\n<li>Kit de isolamento absoluto</li>\n<li>Lençol de borracha, arco de Young, grampos, pinça porta-grampo e perfurador</li>\n<li>Fio dental e lubrificante</li>\n<li>Cimento de ionômero de vidro (CIV) adequado à indicação</li>\n<li>Condicionador de superfície e acessórios conforme o produto</li>\n<li>Instrumentos de manipulação/inserção, placa de vidro ou cápsula e aplicador conforme apresentação</li>\n<li>Material de proteção superficial conforme fabricante</li>\n<li>Fotopolimerizador somente se o CIV escolhido exigir fotoativação</li>\n<li>Instrumentos de acabamento e ajuste oclusal compatíveis</li>\n<li>Matriz metálica ou tira de poliéster conforme acesso</li>\n<li>Cunha de madeira e instrumentos de adaptação</li>\n<li>Tira de lixa e lâmina n.º 12 quando indicadas</li>\n<li>Papel carbono para contatos oclusais e pinça</li>\n<li>Pontas de acabamento e borrachas abrasivas</li>\n</ul><h2>Sequência para avaliação docente</h2><ol>\n<li>Avaliar extensão proximal/oclusal e risco de carga; não presumir indicação de CIV como restauração definitiva em área de alta solicitação.</li>\n<li>Planejar diagnóstico, profilaxia, seleção de material e isolamento do campo.</li>\n<li>Realizar acesso e remoção do tecido afetado conforme avaliação clínica; proteger a estrutura adjacente.</li>\n<li>Adaptar matriz parcial e cunha, se adequadas ao caso e ao material, para reconstrução proximal.</li>\n<li>Realizar condicionamento e manipulação do CIV de acordo com o fabricante; inserir e conformar o material respeitando presa e controle de umidade.</li>\n<li>Reavaliar contato proximal, superfície oclusal e necessidade de alternativa restauradora mais resistente.</li>\n<li>Proteger, finalizar e checar a oclusão de acordo com o produto e a avaliação do professor.</li>\n</ol><p><strong>Fontes:</strong> Material complementar de planejamento, elaborado para revisão docente; não integra o protocolo Restaurações.docx. American Dental Association. Materials for Direct Restorations; Clinical Practice Guideline on Restorative Treatments for Caries Lesions (2023).</p>",
        "group": "Classe II",
        "order": 102
    },
    {
        "id": "dentistica-classe-ii-complexa-civ",
        "title": "Classe II complexa com ionômero",
        "category": "Dentística",
        "summary": "Classe II - complexa • CIV (proposta em revisão)",
        "classe": "II",
        "variacao": "complexa",
        "material": "ionomero_vidro",
        "status": "revisao_docente",
        "publicar": false,
        "fonte": "Material complementar de planejamento, elaborado para revisão docente; não integra o protocolo Restaurações.docx.",
        "materiais": [
            "Kit de Dentística",
            "Espelho, sonda e pinça clínica",
            "Equipamentos de proteção individual",
            "Gaze e algodão",
            "Kit de isolamento absoluto",
            "Lençol de borracha, arco de Young, grampos, pinça porta-grampo e perfurador",
            "Fio dental e lubrificante",
            "Cimento de ionômero de vidro (CIV) adequado à indicação",
            "Condicionador de superfície e acessórios conforme o produto",
            "Instrumentos de manipulação/inserção, placa de vidro ou cápsula e aplicador conforme apresentação",
            "Material de proteção superficial conforme fabricante",
            "Fotopolimerizador somente se o CIV escolhido exigir fotoativação",
            "Instrumentos de acabamento e ajuste oclusal compatíveis",
            "Matriz metálica ou tira de poliéster conforme acesso",
            "Cunha de madeira e instrumentos de adaptação",
            "Tira de lixa e lâmina n.º 12 quando indicadas",
            "Papel carbono para contatos oclusais e pinça",
            "Pontas de acabamento e borrachas abrasivas"
        ],
        "etapasPropostas": [
            "ATENÇÃO: cavidades extensas e áreas de suporte oclusal geralmente não são indicação para CIV convencional como restauração definitiva.",
            "Reavaliar o caso com o professor e considerar técnica restauradora adequada à extensão e à carga; esta combinação NÃO possui protocolo oficial fornecido.",
            "Quando houver indicação docente excepcional/temporária, planejar o tipo de CIV e respeitar estritamente as instruções do produto.",
            "Registrar planejamento, controle de umidade, necessidade de matriz circunferencial, contatos e requisitos de proteção.",
            "Definir etapas de colocação, presa, proteção superficial e acabamento caso a indicação seja confirmada pelo responsável."
        ],
        "content": "<p><strong>Proposta didática para revisão docente:</strong> sequência geral de planejamento, não extraída do documento Restaurações.docx. Aplicabilidade depende do diagnóstico, da indicação do material e das instruções do fabricante.</p><p><strong>Restrição importante:</strong> CIV convencional/modificado não deve ser escolhido automaticamente em áreas de alta carga; a seleção deve ser validada pelo professor responsável.</p><h2>Materiais necessários (sugestão)</h2><ul>\n<li>Kit de Dentística</li>\n<li>Espelho, sonda e pinça clínica</li>\n<li>Equipamentos de proteção individual</li>\n<li>Gaze e algodão</li>\n<li>Kit de isolamento absoluto</li>\n<li>Lençol de borracha, arco de Young, grampos, pinça porta-grampo e perfurador</li>\n<li>Fio dental e lubrificante</li>\n<li>Cimento de ionômero de vidro (CIV) adequado à indicação</li>\n<li>Condicionador de superfície e acessórios conforme o produto</li>\n<li>Instrumentos de manipulação/inserção, placa de vidro ou cápsula e aplicador conforme apresentação</li>\n<li>Material de proteção superficial conforme fabricante</li>\n<li>Fotopolimerizador somente se o CIV escolhido exigir fotoativação</li>\n<li>Instrumentos de acabamento e ajuste oclusal compatíveis</li>\n<li>Matriz metálica ou tira de poliéster conforme acesso</li>\n<li>Cunha de madeira e instrumentos de adaptação</li>\n<li>Tira de lixa e lâmina n.º 12 quando indicadas</li>\n<li>Papel carbono para contatos oclusais e pinça</li>\n<li>Pontas de acabamento e borrachas abrasivas</li>\n</ul><h2>Sequência para avaliação docente</h2><ol>\n<li>ATENÇÃO: cavidades extensas e áreas de suporte oclusal geralmente não são indicação para CIV convencional como restauração definitiva.</li>\n<li>Reavaliar o caso com o professor e considerar técnica restauradora adequada à extensão e à carga; esta combinação NÃO possui protocolo oficial fornecido.</li>\n<li>Quando houver indicação docente excepcional/temporária, planejar o tipo de CIV e respeitar estritamente as instruções do produto.</li>\n<li>Registrar planejamento, controle de umidade, necessidade de matriz circunferencial, contatos e requisitos de proteção.</li>\n<li>Definir etapas de colocação, presa, proteção superficial e acabamento caso a indicação seja confirmada pelo responsável.</li>\n</ol><p><strong>Fontes:</strong> Material complementar de planejamento, elaborado para revisão docente; não integra o protocolo Restaurações.docx. American Dental Association. Materials for Direct Restorations; Clinical Practice Guideline on Restorative Treatments for Caries Lesions (2023).</p>",
        "group": "Classe II",
        "order": 103
    },
    {
        "id": "dentistica-classe-v-cariosa-civ",
        "title": "Classe V cariosa com ionômero",
        "category": "Dentística",
        "summary": "Classe V - cariosa • CIV (proposta em revisão)",
        "classe": "V",
        "variacao": "cariosa",
        "material": "ionomero_vidro",
        "status": "revisao_docente",
        "publicar": false,
        "fonte": "Material complementar de planejamento, elaborado para revisão docente; não integra o protocolo Restaurações.docx.",
        "materiais": [
            "Kit de Dentística",
            "Espelho, sonda e pinça clínica",
            "Equipamentos de proteção individual",
            "Gaze e algodão",
            "Kit de isolamento absoluto",
            "Lençol de borracha, arco de Young, grampos, pinça porta-grampo e perfurador",
            "Fio dental e lubrificante",
            "Cimento de ionômero de vidro (CIV) adequado à indicação",
            "Condicionador de superfície e acessórios conforme o produto",
            "Instrumentos de manipulação/inserção, placa de vidro ou cápsula e aplicador conforme apresentação",
            "Material de proteção superficial conforme fabricante",
            "Fotopolimerizador somente se o CIV escolhido exigir fotoativação",
            "Instrumentos de acabamento e ajuste oclusal compatíveis",
            "Canetas de alta e baixa rotação",
            "Brocas e pontas adequadas à preparação",
            "Colher de dentina",
            "Água para irrigação e limpeza",
            "Grampo retrator e instrumentos para afastamento gengival, quando necessários"
        ],
        "etapasPropostas": [
            "Diagnosticar a lesão cervical e avaliar controle de fatores etiológicos, acesso, umidade e relação com o tecido gengival.",
            "Realizar profilaxia, anestesia e isolamento/controle de umidade conforme necessidade clínica.",
            "Remover o tecido cariado segundo o diagnóstico e planejamento do caso.",
            "Selecionar CIV convencional ou modificado por resina conforme indicação; condicionar a superfície segundo as instruções do fabricante.",
            "Manipular/aplicar o material na cavidade e conformar o perfil cervical evitando excessos e traumas gengivais.",
            "Respeitar a presa ou a fotoativação prevista; proteger a superfície conforme especificações do produto.",
            "Checar contornos, acabamento, margem e oclusão, conforme tempo de presa e orientações do material."
        ],
        "content": "<p><strong>Proposta didática para revisão docente:</strong> sequência geral de planejamento, não extraída do documento Restaurações.docx. Aplicabilidade depende do diagnóstico, da indicação do material e das instruções do fabricante.</p><p><strong>Restrição importante:</strong> CIV convencional/modificado não deve ser escolhido automaticamente em áreas de alta carga; a seleção deve ser validada pelo professor responsável.</p><h2>Materiais necessários (sugestão)</h2><ul>\n<li>Kit de Dentística</li>\n<li>Espelho, sonda e pinça clínica</li>\n<li>Equipamentos de proteção individual</li>\n<li>Gaze e algodão</li>\n<li>Kit de isolamento absoluto</li>\n<li>Lençol de borracha, arco de Young, grampos, pinça porta-grampo e perfurador</li>\n<li>Fio dental e lubrificante</li>\n<li>Cimento de ionômero de vidro (CIV) adequado à indicação</li>\n<li>Condicionador de superfície e acessórios conforme o produto</li>\n<li>Instrumentos de manipulação/inserção, placa de vidro ou cápsula e aplicador conforme apresentação</li>\n<li>Material de proteção superficial conforme fabricante</li>\n<li>Fotopolimerizador somente se o CIV escolhido exigir fotoativação</li>\n<li>Instrumentos de acabamento e ajuste oclusal compatíveis</li>\n<li>Canetas de alta e baixa rotação</li>\n<li>Brocas e pontas adequadas à preparação</li>\n<li>Colher de dentina</li>\n<li>Água para irrigação e limpeza</li>\n<li>Grampo retrator e instrumentos para afastamento gengival, quando necessários</li>\n</ul><h2>Sequência para avaliação docente</h2><ol>\n<li>Diagnosticar a lesão cervical e avaliar controle de fatores etiológicos, acesso, umidade e relação com o tecido gengival.</li>\n<li>Realizar profilaxia, anestesia e isolamento/controle de umidade conforme necessidade clínica.</li>\n<li>Remover o tecido cariado segundo o diagnóstico e planejamento do caso.</li>\n<li>Selecionar CIV convencional ou modificado por resina conforme indicação; condicionar a superfície segundo as instruções do fabricante.</li>\n<li>Manipular/aplicar o material na cavidade e conformar o perfil cervical evitando excessos e traumas gengivais.</li>\n<li>Respeitar a presa ou a fotoativação prevista; proteger a superfície conforme especificações do produto.</li>\n<li>Checar contornos, acabamento, margem e oclusão, conforme tempo de presa e orientações do material.</li>\n</ol><p><strong>Fontes:</strong> Material complementar de planejamento, elaborado para revisão docente; não integra o protocolo Restaurações.docx. American Dental Association. Materials for Direct Restorations; Clinical Practice Guideline on Restorative Treatments for Caries Lesions (2023).</p>",
        "group": "Classe V",
        "order": 104
    },
    {
        "id": "dentistica-classe-v-nao_cariosa-civ",
        "title": "Classe V não cariosa com ionômero",
        "category": "Dentística",
        "summary": "Classe V - nao cariosa • CIV (proposta em revisão)",
        "classe": "V",
        "variacao": "nao_cariosa",
        "material": "ionomero_vidro",
        "status": "revisao_docente",
        "publicar": false,
        "fonte": "Material complementar de planejamento, elaborado para revisão docente; não integra o protocolo Restaurações.docx.",
        "materiais": [
            "Kit de Dentística",
            "Espelho, sonda e pinça clínica",
            "Equipamentos de proteção individual",
            "Gaze e algodão",
            "Kit de isolamento absoluto",
            "Lençol de borracha, arco de Young, grampos, pinça porta-grampo e perfurador",
            "Fio dental e lubrificante",
            "Cimento de ionômero de vidro (CIV) adequado à indicação",
            "Condicionador de superfície e acessórios conforme o produto",
            "Instrumentos de manipulação/inserção, placa de vidro ou cápsula e aplicador conforme apresentação",
            "Material de proteção superficial conforme fabricante",
            "Fotopolimerizador somente se o CIV escolhido exigir fotoativação",
            "Instrumentos de acabamento e ajuste oclusal compatíveis",
            "Grampo retrator e instrumentos para afastamento gengival, quando necessários"
        ],
        "etapasPropostas": [
            "Identificar e abordar fatores etiológicos da lesão cervical não cariosa antes da restauração.",
            "Avaliar necessidade de restauração, extensão da lesão, margem cervical, acesso e controle de umidade.",
            "Realizar profilaxia, isolamento/afastamento gengival e preparo superficial conservador quando indicado.",
            "Escolher o CIV para as condições do caso; aplicar condicionador conforme recomendações do fabricante.",
            "Manipular, inserir e conformar o material, respeitando a presa e protegendo contra umidade/desidratação conforme as instruções do produto.",
            "Verificar contorno cervical, margens e contatos funcionais; realizar acabamento no momento indicado pelo fabricante.",
            "Registrar orientações ao paciente e acompanhamento do fator etiológico."
        ],
        "content": "<p><strong>Proposta didática para revisão docente:</strong> sequência geral de planejamento, não extraída do documento Restaurações.docx. Aplicabilidade depende do diagnóstico, da indicação do material e das instruções do fabricante.</p><p><strong>Restrição importante:</strong> CIV convencional/modificado não deve ser escolhido automaticamente em áreas de alta carga; a seleção deve ser validada pelo professor responsável.</p><h2>Materiais necessários (sugestão)</h2><ul>\n<li>Kit de Dentística</li>\n<li>Espelho, sonda e pinça clínica</li>\n<li>Equipamentos de proteção individual</li>\n<li>Gaze e algodão</li>\n<li>Kit de isolamento absoluto</li>\n<li>Lençol de borracha, arco de Young, grampos, pinça porta-grampo e perfurador</li>\n<li>Fio dental e lubrificante</li>\n<li>Cimento de ionômero de vidro (CIV) adequado à indicação</li>\n<li>Condicionador de superfície e acessórios conforme o produto</li>\n<li>Instrumentos de manipulação/inserção, placa de vidro ou cápsula e aplicador conforme apresentação</li>\n<li>Material de proteção superficial conforme fabricante</li>\n<li>Fotopolimerizador somente se o CIV escolhido exigir fotoativação</li>\n<li>Instrumentos de acabamento e ajuste oclusal compatíveis</li>\n<li>Grampo retrator e instrumentos para afastamento gengival, quando necessários</li>\n</ul><h2>Sequência para avaliação docente</h2><ol>\n<li>Identificar e abordar fatores etiológicos da lesão cervical não cariosa antes da restauração.</li>\n<li>Avaliar necessidade de restauração, extensão da lesão, margem cervical, acesso e controle de umidade.</li>\n<li>Realizar profilaxia, isolamento/afastamento gengival e preparo superficial conservador quando indicado.</li>\n<li>Escolher o CIV para as condições do caso; aplicar condicionador conforme recomendações do fabricante.</li>\n<li>Manipular, inserir e conformar o material, respeitando a presa e protegendo contra umidade/desidratação conforme as instruções do produto.</li>\n<li>Verificar contorno cervical, margens e contatos funcionais; realizar acabamento no momento indicado pelo fabricante.</li>\n<li>Registrar orientações ao paciente e acompanhamento do fator etiológico.</li>\n</ol><p><strong>Fontes:</strong> Material complementar de planejamento, elaborado para revisão docente; não integra o protocolo Restaurações.docx. American Dental Association. Materials for Direct Restorations; Clinical Practice Guideline on Restorative Treatments for Caries Lesions (2023).</p>",
        "group": "Classe V",
        "order": 105
    }
];
    const classesFluxo = [
    {
        "id": "I",
        "rotulo": "Classe I",
        "variacoes": [
            {
                "id": "oclusal",
                "rotulo": "Oclusal"
            }
        ]
    },
    {
        "id": "II",
        "rotulo": "Classe II",
        "variacoes": [
            {
                "id": "simples",
                "rotulo": "Simples - estritamente proximal"
            },
            {
                "id": "composta",
                "rotulo": "Composta - proximal e oclusal"
            },
            {
                "id": "complexa",
                "rotulo": "Complexa - técnica da matriz circunferencial"
            }
        ]
    },
    {
        "id": "III",
        "rotulo": "Classe III",
        "variacoes": [
            {
                "id": "estritamente_proximal",
                "rotulo": "Acesso estritamente proximal"
            },
            {
                "id": "palatal",
                "rotulo": "Acesso palatal"
            },
            {
                "id": "vestibular",
                "rotulo": "Acesso vestibular"
            }
        ]
    },
    {
        "id": "IV",
        "rotulo": "Classe IV",
        "variacoes": [
            {
                "id": "guia_silicone",
                "rotulo": "Guia de silicone"
            },
            {
                "id": "mao_livre",
                "rotulo": "Reconstrução à mão livre"
            }
        ]
    },
    {
        "id": "V",
        "rotulo": "Classe V",
        "variacoes": [
            {
                "id": "cariosa",
                "rotulo": "Lesão cariosa"
            },
            {
                "id": "nao_cariosa",
                "rotulo": "Lesão não cariosa"
            }
        ]
    }
];
    const restricoesFluxo = [
       { classe:'III', material:'ionomero_vidro', estado:'nao_padronizado',
         observacao:'Não consta técnica com CIV no material fornecido. Em dentição permanente, não recomendar CIV como restauração definitiva de Classe III sem avaliação docente.' },
       { classe:'IV', material:'ionomero_vidro', estado:'nao_padronizado',
         observacao:'Não consta técnica com CIV no material fornecido. Não recomendar CIV como restauração definitiva de Classe IV.' },
       { classe:'VI', material:'qualquer', estado:'sem_fonte',
         observacao:'O material Restaurações.docx não apresenta protocolo de Classe VI.' }
    ];
    window.GuiaClinicoDB.fluxoDentistica = {
       versao: '2026-10-31',
       descricao: 'Classe → tipo de cavidade/técnica → material → materiais + passo a passo',
       classes: classesFluxo,
       materiais: [{id:'resina', rotulo:'Resina composta'},
                    {id:'ionomero_vidro', rotulo:'Cimento de ionômero de vidro'}],
       protocolosOriginais: protocolosDentistica,
       complementares: complementaresDentistica,
       restricoes: restricoesFluxo,
       todos: [...protocolosDentistica, ...complementaresDentistica],
       selecionar({classe, variacao, material} = {}) {
          const key = value => String(value || '').normalize('NFD')
                    .replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
          const found = this.todos.find(item =>
             key(item.classe) === key(classe) &&
             key(item.variacao) === key(variacao) &&
             key(item.material) === key(material));
          if (found) return found;
          const restricao = this.restricoes.find(item =>
             key(item.classe) === key(classe) &&
             (key(item.material) === key(material) || item.material === 'qualquer'));
          return restricao ? { status: restricao.estado, ...restricao } : null;
       }
    };

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
