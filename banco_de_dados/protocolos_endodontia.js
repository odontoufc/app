/**
 * Guia Clínico — atualização dos quatro protocolos de Endodontia.
 * Fonte: "Endodontia - Protocolo p_ Unirradiculares(1).docx"
 * (material didático fornecido pelo responsável pelo projeto).
 *
 * COMO USAR: carregar este arquivo APÓS os arquivos existentes de
 * protocolos (incluindo protocolos_endodontia.js, se houver) e ANTES
 * do app.js. Ele completa/substitui o conteúdo dos quatro cartões
 * Acesso, Instrumentação, Medicação intracanal e Obturação,
 * PRESERVANDO os demais, como Exemplos e Materiais.
 *
 * O documento original é material de estudo; o conteúdo não foi
 * atualizado ou validado como diretriz clínica contemporânea.
 */
(function () {
  'use strict';
  window.GuiaClinicoDB = window.GuiaClinicoDB || {};
  const novosConteudos = [
    {
      id: "endodontia-acesso",
      title: "Acesso",
      category: "Endodontia",
      summary: "Dentes anteriores; diagnóstico, anestesia, abertura coronária e isolamento.",
      content: "<p class=\"text-sm italic\">Material didático referente a dentes anteriores e unirradiculares.</p><h2>Diagnóstico</h2>\n<ul>\n<li>Exames: Clínico + Radiográfico + Semiológicos</li>\n<li>Radiografia Periapical + Interproximal (avaliar lesões de cárie)</li>\n</ul>\n<h2>Anestesia</h2>\n<ul>\n<li>Superior: NASA + Nasopalatino</li>\n<li>Inferior: Infiltração local por vestibular com complemento por lingual</li>\n<li>Anestésico: Lidocaína 2% com epinefrina 1:100.000</li>\n</ul>\n<h2>Princípios do acesso coronário</h2>\n<ul>\n<li>Conhecimento da anatomia interna dos dentes</li>\n<li>Remoção prévia de fatores retentivos de placa<ol>\n<li>Faz-se uma adequação periodontal</li>\n<li>Exceção: casos de urgência endodôntica</li>\n</ol>\n</li>\n<li>Remoção prévia de restaurações defeituosas, principalmente de restaurações metálicas</li>\n<li>Remoção de lesões de cárie por completo</li>\n</ul>\n<h2>Acesso — anteriores</h2>\n<ul>\n<li>Ponta diamantada 1011 - 1014 (Alta rotação)</li>\n<li>Conferir a embocadura &gt; Sonda Rhein</li>\n<li>Ponto de eleição: Face palatina/lingual, 1 ou 2 mm incisal ao cíngulo</li>\n<li>Direção de trepanação: inicia inclinado em 45 graus e depois paralelo ao longo eixo do dente</li>\n<li>Forma de contorno:<ol>\n<li>Incisivo: Triangular com base para incisal</li>\n<li>Canino: Losangular com maior diâmetro cérvico-incisal</li>\n<li>Ponta: 3083</li>\n</ol>\n</li>\n<li>Forma de conveniência: desgaste compensatório com remoção do ombro palatino/lingual, regularização e alisamento dos ângulos</li>\n</ul>\n<h2>Isolamento absoluto</h2>\n<ul>\n<li>Arco de ostby, lençol, grampo, pinça, perfurador, lubrificante, fio dental</li>\n<li>Provar o grampo</li>\n<li>Tamanho compatível com o dente: 210 a 212 / Pré - 207</li>\n</ul>\n",
      order: 1
    },
    {
      id: "endodontia-instrumentacao",
      title: "Instrumentação",
      category: "Endodontia",
      summary: "Cateterismo, pré-alargamento, odontometria, recuo escalonado e movimentos.",
      content: "<p class=\"text-sm italic\">Material didático referente a dentes anteriores e unirradiculares.</p><p>Deve-se irrigar, aspirar e inundar o canal e recapitular a patência entre as trocas de instrumentais.</p><h2>Sequência de instrumentação</h2>\n<ol>\n<li>CAD (Avaliado no Rx inicial; em mm);</li>\n<li>Cateterismo (#10 ou #15) no CAD;</li>\n<li>Pré-alargamento (Guia para GG)<ol>\n<li>Limas: #15, #20, #25 em 2/3 do CAD;</li>\n<li>Recapitular o CAD com o Instrumento de Cateterismo.</li>\n</ol>\n</li>\n<li>Gates Gliden 4</li>\n<li>Odontometria<ol>\n<li>Utiliza-se o localizador apical para determinar o CRD</li>\n<li>Achados: CRD; CT = CRD - 1mm; Instrumento Foraminal - IF.</li>\n<li>Realiza-se a Radiografia da ODM</li>\n</ol>\n</li>\n<li>Gates Gliden 3 e 2;</li>\n<li>Determinação do IAI no CT: #40, #35, #30 até que se atinja o CT;</li>\n<li>Determinação do IM (IAI + 3 Instrumentos no CT &gt; Batente Apical);</li>\n<li>Recuo escalonado partindo do CT<ol>\n<li>CT - 1 mm, um instrumento acima do IM</li>\n<li>CT - 2 mm, dois instrumento acima do IM &gt; Realizar movimento de limagem</li>\n<li>CT - 3 mm, três instrumento acima do IM</li>\n<li>Até chegar no preparo de GG.</li>\n</ol>\n</li>\n<li>Recapitular IM (Prova da lima - Prova do cone + RX de prova do cone.</li>\n</ol>\n<h2>Instrumentos — dimensões mencionadas no material</h2>\n<ul>\n<li>Tamanhos: 21, 25 e 31 mm</li>\n<li>Tamanhos: 28, 32 e 38</li>\n<li>Haste (Parte que faz fixação ao contra-ângulo): 13 mm</li>\n</ul>\n<h2>Movimentos dos instrumentos endodônticos</h2>\n<h3>Movimento de remoção</h3>\n<ol>\n<li>Avanço</li>\n<li>Giro à direita</li>\n<li>Tração</li>\n</ol>\n<h3>Movimento de cateterismo</h3>\n<ol>\n<li>Pequenos avanços</li>\n<li>Giro à direita e à esquerda</li>\n<li>Pequenos retrocessos</li>\n</ol>\n<h3>Alargamento parcial alternado</h3>\n<ol>\n<li>Avanço</li>\n<li>Giro à direita</li>\n<li>Giro à esquerda</li>\n<li>Retrocesso de 1 a 2 mm</li>\n<li>Avanço</li>\n</ol>\n<h3>Movimento de limagem</h3>\n<ol>\n<li>Avanço</li>\n<li>Tração com pressão lateral</li>\n</ol>",
      order: 2
    },
    {
      id: "endodontia-medicacao",
      title: "Medicação intracanal",
      category: "Endodontia",
      summary: "Tricresol formalina e hidróxido de cálcio; aplicação com lima K ou Lentulo.",
      content: "<p class=\"text-sm italic\">Material didático referente a dentes anteriores e unirradiculares.</p><h2>Tricresol formalina</h2>\n<p>Usado quando não há espaço, ou seja, quando o canal não foi instrumentado. Modo de usar: confecciona-se uma bolinha de algodão pequena estéril compatível com o tamanho da câmara pulpar e embebe em uma gota de tricresol, remove-se o excesso em uma gaze estéril e insere-se na câmara pulpar seca. Após isso, é realizada uma restauração com ionômero de vidro.</p><h2>Hidróxido de cálcio</h2>\n<p>Medicação de escolha. Para a utilização do pó de hidróxido de cálcio, é necessária a sua associação à um veículo, o qual é bastante variável, dependendo do objetivo terapêutico.</p><h3>Protocolo geral</h3>\n<ol>\n<li>Manipulação da pasta na consistência adequada para o canal;</li>\n<li>Aplica-se a pasta na lima ou lentulo;</li>\n<li>Introduz o instrumento no canal procurando preenchê-lo completamente;</li>\n<li>O movimento a ser realizado varia conforme o instrumental empregado:<ol>\n<li>Lima → movimento de bombeamento;</li>\n<li>Lentulo → rotação e remoção do instrumento;</li>\n</ol>\n</li>\n<li>Selamento da cavidade com material provisório.</li>\n</ol>\n<h3>Aplicação com lima K</h3>\n<ol>\n<li>Seleção de uma lima compatível com o calibre do canal (de preferência um número menor do que o de IM).</li>\n<li>Aplicação do Ca(OH)2 na lima.</li>\n<li>Introdução da lima no canal executando movimentos de bombeamento até o seu completo preenchimento. Repete-se até que a pasta tenha preenchido o canal de forma adequada.</li>\n<li>OBS: A remoção da lima deve ser feita no sentido anti-horário.</li>\n<li>CONDENSAÇÃO: Quando o canal estiver preenchido deve ser usado uma lima pequena para bombear o terço apical, uma lima média para o terço médio e uma lima grande para o terço coronal (os termos pequeno, médio e grande dizem respeito ao calibre da lima a ser selecionada);</li>\n<li>Após, faz-se uma radiografia final para verificar se o canal está bem preenchido e finalizar com a limpeza e o selamento coronário com ionômero de vidro.</li>\n</ol>\n<h3>Aplicação com Lentulo</h3>\n<ol>\n<li>Seleção de uma Lentulo compatível com o calibre do canal.</li>\n<li>Aplicação do Ca(OH)2 na Lentulo.</li>\n<li>Introdução da Lentulo no canal, acionando o motor no sentido horário e executando discretos movimentos de bombeamento até o completo preenchimento do canal.</li>\n<li>OBS: A Lentulo deve ser utilizada 4 ou 5mm aquém do CT.</li>\n<li>O completo preenchimento é obtido a partir da aproximação da espátula 24 com a pasta da embocadura e utilização da Lentulo para levar o material até o canal.</li>\n<li>Após o preenchimento, executa-se o movimento de bombeamento utilizando limas. A seleção da lima se dá de acordo com o diâmetro do terço do canal (apical, médio ou coronal) a ser bombeado.</li>\n<li>Finaliza-se com a realização da radiografia final para verificar se o canal está bem preenchido, limpeza e selamento coronário com ionômero de vidro.</li>\n</ol>\n",
      order: 3
    },
    {
      id: "endodontia-obturacao",
      title: "Obturação",
      category: "Endodontia",
      summary: "Procedimentos prévios e técnica híbrida de Tagger modificada.",
      content: "<p class=\"text-sm italic\">Material didático referente a dentes anteriores e unirradiculares.</p><h2>Procedimentos prévios</h2>\n<ol>\n<li>Remoção da camada de smear layer:<ol>\n<li>EDTA 17% 1 a 2 ml por 3 a 5 min</li>\n<li>Hipoclorito de sódio 2,5%/Clorexidina</li>\n<li>Irrigação com soro fisiológico</li>\n</ol>\n</li>\n<li>Secagem: Cones de papel absorvente esterilizados (CT)</li>\n<li>Descontaminação dos cones de Guta-percha: Imersão em hipoclorito de sódio 2,5%/Clorexidina por 1 a 3 min e secagem com gaze estéril.</li>\n</ol>\n<h2>Técnica híbrida de Tagger modificada</h2>\n<ol>\n<li><strong>Teste da lima</strong> — Introduz o IM no canal e verifica se está adaptado ao CT.</li>\n<li><strong>Calibração do cone acessório</strong> — Seleciona-se um cone com conicidade compatível com o canal. Com a régua calibradora, o cone é calibrado no orifício compatível com o IM, em seguida os excessos são cortados com uma lâmina de bisturi.<p><strong>Conicidade: FM (0,04), MX (0,05), M (0,06), ML (0,08), L (0,10).</strong></p></li>\n<li><strong>Prova do cone</strong> — Insere-se o cone no canal com o auxílio de uma pinça até o seu travamento no CT, em seguida a pinça deve ser ajustada na referência coronária. Procede-se com a remoção do cone do canal, realiza-se a medição do mesmo com a régua a fim de verificar se está compatível com o CT. Finaliza-se essa etapa com a radiografia da prova do cone.</li>\n<li><strong>Secagem do canal</strong> — Na clínica se usa o papel absorvente, no laboratório pode ser usada a seringa tríplice.</li>\n<li><strong>Manipulação do cimento</strong> — Utiliza-se a placa de vidro e a espátula n° 24, as especificações para manipulação dependem do material a ser utilizado..</li>\n<li><strong>Aplicação do cimento obturador</strong> — Pode ser usado o próprio cone, espiral lentulo ou lima. Quando o cone for usado, o mesmo é imerso no cimento, em seguida é realizada a cimentação do cone ao nível do batente apical. Repete-se essa etapa duas vezes.</li>\n<li><strong>Seleção da McSpadden</strong> — 2 instrumentos acima do IM.</li>\n<li><strong>Emprego do compactador de McSpadden</strong> — O compactador é acoplado ao contra ângulo, verifica-se se o mesmo está rotacionando no sentido horário. O teste da gaze pode ser realizado para comprovar se o sentido de rotação está correto, onde a gaze é repelida pelo compactador. A McSpadden ainda desativada é inicialmente introduzida no canal lateralmente ao cone, em seguida é acionada de modo que seja introduzida 5 mm aquém do CT em um tempo de trabalho máximo de 10 segundos. Remove-se o instrumento ainda acionado do canal.</li>\n<li><strong>Condensação vertical com condensador frio</strong> — Utiliza-se um condensador de Paiva compatível com a embocadura do canal para realizar a condensação do material obturador.</li>\n<li><strong>Radiografia comprobatória</strong> — Avalia-se a integridade da obturação, em busca de falhas, como bolhas ou extravasamento de Guta Percha. Em casos de falhas, a termoplastificação da guta utilizando a McSpadden deve ser retomada, seguida da condensação vertical.</li>\n<li><strong>Remoção dos excessos com condensador aquecido</strong> — A obturação deve estar a uma distância de 1 mm da JCE.</li>\n<li>Condensação vertical com condensador frio</li>\n<li><strong>Limpeza da câmara pulpar</strong> — Utiliza-se algodão e álcool.</li>\n<li>Restauração provisória ou definitiva</li>\n<li>Radiografia final</li>\n</ol>\n",
      order: 4
    }
  ];

  const normalizar = (valor) => String(valor || '')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .trim().toLowerCase();

  // É um arquivo complementar: nunca remove conteúdos de outras áreas.
  const anteriores = Array.isArray(window.GuiaClinicoDB.protocolos)
    ? window.GuiaClinicoDB.protocolos
    : [];

  const alvo = (registro) => {
    if (normalizar(registro?.category) !== 'endodontia') return null;
    const titulo = normalizar(registro?.title);
    const id = normalizar(registro?.id);
    if (titulo.startsWith('acesso') || id === 'endodontia-acesso') return 'acesso';
    if (titulo.startsWith('instrumentac') || id === 'endodontia-instrumentacao') return 'instrumentacao';
    if (titulo.startsWith('medicac') || id === 'endodontia-medicacao') return 'medicacao';
    if (titulo.startsWith('obturac') || id === 'endodontia-obturacao') return 'obturacao';
    return null;
  };

  const indicePorAlvo = Object.create(null);
  novosConteudos.forEach((item) => {
    indicePorAlvo[item.id.replace('endodontia-', '')] = item;
  });

  const encontrados = new Set();
  const atualizados = anteriores.map((item) => {
    const chave = alvo(item);
    if (!chave) return item;
    if (encontrados.has(chave)) return null; // evita cartões duplicados
    encontrados.add(chave);
    const novo = indicePorAlvo[chave];
    return { ...item, ...novo, id: item.id || novo.id };
  }).filter(Boolean);

  novosConteudos.forEach((item) => {
    const chave = item.id.replace('endodontia-', '');
    if (!encontrados.has(chave)) atualizados.push(item);
  });

  window.GuiaClinicoDB.protocolos = atualizados;
})();
