/**
 * Guia Clínico - Protocolos de Periodontia
 * Fonte: Guia Prático em Periodontia - Equipe de Periodontia,
 * Universidade Federal do Ceará (UFC), 2025.
 *
 * Arquivo independente: banco_de_dados/protocolos_periodontia.js
 * Contém cinco protocolos. Cada registro é aberto separadamente pelo app.js.
 * Conteúdo transcrito e organizado a partir do material fornecido,
 * sem revisão de validade clínica ou alteração das orientações originais.
 */
(function () {
  'use strict';

  window.GuiaClinicoDB = window.GuiaClinicoDB || {};

  const fonte = `
    <hr class="my-6 border-gray-200 dark:border-gray-700">
    <p class="text-sm text-gray-600 dark:text-gray-400">
      <strong>Fonte:</strong> Guia Prático em Periodontia - Equipe de Periodontia,
      Universidade Federal do Ceará (UFC), 2025.
    </p>
  `;

  const protocolosPeriodontia = [
    {
      id: 'periodontia-psr',
      title: 'PSR - Registro Periodontal Simplificado',
      category: 'Periodontia',
      summary: 'Registro, validade, reavaliação, aparelho ortodôntico e terceiro molar parcialmente erupcionado.',
      order: 1,
      content: `
        <h2>1. Registro e validade do exame</h2>
        <ul>
          <li>O exame de PSR deve ser datado e assinado pelo professor responsável por sua correção.</li>
          <li>O PSR deverá ser repetido quando o exame inicial tiver sido realizado há mais de 6 meses.</li>
        </ul>

        <h2>2. Reavaliação e indicação do periograma</h2>
        <ul>
          <li><strong>PSR = 3 no início da tarja preta:</strong> o sextante deverá ser reavaliado após a realização da raspagem supragengival (R-SUPRA).</li>
          <li><strong>PSR = 3, 4 ou * em quatro ou mais sextantes:</strong> deverá ser realizado o periograma completo, contemplando todos os sextantes.</li>
        </ul>

        <h2>3. Orientações para pacientes com aparelho ortodôntico</h2>
        <p>Durante a realização do PSR em pacientes que utilizam aparelho ortodôntico, devem ser observadas as seguintes orientações:</p>
        <ul>
          <li><strong>Fator retentivo de placa:</strong> o aparelho ortodôntico não deve ser considerado, por si só, um fator retentivo de placa para fins de registro do PSR.</li>
          <li><strong>Código PSR = 2:</strong> deverá ser registrado apenas quando houver presença de cálculo.</li>
          <li><strong>Local de sondagem:</strong> a sondagem periodontal deverá ser realizada pela face lingual ou palatina.</li>
        </ul>

        <h2>4. Terceiro molar parcialmente erupcionado</h2>
        <p>Quando houver um terceiro molar (3M) parcialmente erupcionado, a profundidade de sondagem (PS) da face distal do segundo molar (2M) adjacente não deverá ser considerada para a determinação do PSR do sextante.</p>
        ${fonte}
      `
    },
    {
      id: 'periodontia-periograma',
      title: 'Periograma',
      category: 'Periodontia',
      summary: 'Condições de realização, profundidade de sondagem, registros clínicos, diagnóstico e exames laboratoriais.',
      order: 2,
      content: `
        <h2>1. Condições para realização</h2>
        <ul>
          <li>O periograma não deverá ser realizado na presença de cálculo ou cavidades.</li>
          <li>O exame não deverá ser realizado no mesmo dia da raspagem supragengival, exceto quando for identificada uma quantidade mínima de cálculo.</li>
        </ul>

        <h2>2. Registro da profundidade de sondagem</h2>
        <p>Quando a marcação da profundidade de sondagem (PS) ficar entre duas faixas da sonda periodontal, deverá ser considerado o valor correspondente à faixa superior.</p>
        <p><strong>Exemplo:</strong> se a profundidade de sondagem estiver entre 6 e 7 mm, deverá ser registrado PS = 7 mm.</p>

        <h2>3. Registro de hiperplasia e recessão gengival</h2>
        <ul>
          <li>Na ausência de hiperplasia ou recessão gengival, o campo correspondente deverá permanecer em branco.</li>
          <li>Não registrar o valor zero (0) quando essas condições estiverem ausentes.</li>
        </ul>

        <h2>4. Registro de sangramento e supuração</h2>
        <p>Utilizar os seguintes símbolos no periograma:</p>
        <ul>
          <li><strong>Sangramento à sondagem:</strong> ● (círculo preenchido).</li>
          <li><strong>Supuração à sondagem:</strong> × (símbolo de X).</li>
        </ul>

        <h2>5. Diagnóstico periodontal</h2>
        <p>Após a realização do periograma, a doença periodontal deverá ser diagnosticada e registrada na ficha apropriada.</p>

        <h2>6. Exames laboratoriais para pacientes com periodontite</h2>
        <p>Para todos os pacientes diagnosticados com periodontite, deverão ser solicitados os seguintes exames:</p>
        <ol>
          <li>Hemoglobina glicada (HbA1c).</li>
          <li>Hemograma completo.</li>
          <li>Glicemia em jejum.</li>
        </ol>
        ${fonte}
      `
    },
    {
      id: 'periodontia-acc',
      title: 'Aumento de Coroa Clínica (ACC)',
      category: 'Periodontia',
      summary: 'Avaliação pré-operatória, adequação do meio bucal, agendamento, Endodontia e exames laboratoriais.',
      order: 3,
      content: `
        <h2>1. Avaliação pré-operatória</h2>
        <ul>
          <li>Os pacientes deverão ser avaliados uma semana antes do procedimento cirúrgico.</li>
          <li>A avaliação prévia tem como finalidade identificar e evitar possíveis intercorrências relacionadas a condições sistêmicas ou dentárias.</li>
        </ul>

        <h2>2. Adequação do meio bucal</h2>
        <p>Antes da realização da cirurgia, deverá ser realizada a adequação do meio bucal, incluindo:</p>
        <ol>
          <li><strong>Fechamento de cavidades:</strong> tratamento prévio das cavidades dentárias presentes.</li>
          <li><strong>Tratamento Periodontal Básico:</strong> realização do tratamento periodontal necessário antes da intervenção cirúrgica.</li>
        </ol>

        <h2>3. Organização e agendamento das cirurgias</h2>
        <ul>
          <li>A planilha de necessidades cirúrgicas deverá ser atualizada pelos alunos a cada clínica.</li>
          <li>Em geral, será realizada uma cirurgia por clínica quando houver dois professores da área de Periodontia presentes.</li>
        </ul>

        <h2>4. Necessidade de tratamento endodôntico</h2>
        <ul>
          <li>Quando o paciente apresentar necessidade de tratamento endodôntico, deverá haver diálogo prévio com os professores responsáveis.</li>
          <li>Conforme a avaliação e o planejamento dos professores, o tratamento endodôntico poderá ser realizado antes do procedimento cirúrgico periodontal.</li>
        </ul>

        <h2>5. Exames laboratoriais</h2>
        <p><strong>Atenção especial</strong> aos pacientes com risco de hemorragia ou comprometimento do sistema imunológico.</p>
        <p>Os exames laboratoriais relacionados à avaliação são:</p>
        <ol>
          <li>Hemograma completo.</li>
          <li>Glicemia em jejum.</li>
          <li>Coagulograma completo.</li>
        </ol>
        ${fonte}
      `
    },
    {
      id: 'periodontia-transcirurgico',
      title: 'Procedimento Transcirúrgico',
      category: 'Periodontia',
      summary: 'Indicação e orientações de agendamento para procedimentos transcirúrgicos e ACC.',
      order: 4,
      content: `
        <h2>1. Indicação</h2>
        <p>O procedimento transcirúrgico está indicado para pacientes que apresentem condições dentárias que impossibilitem a remoção óssea inicialmente preconizada como ideal.</p>

        <h2>2. Agendamento</h2>
        <ul>
          <li><strong>Procedimentos transcirúrgicos:</strong> não deverão ser agendados dois procedimentos no mesmo turno.</li>
          <li><strong>Cirurgias de aumento de coroa clínica (ACC):</strong> poderão ser agendadas duas cirurgias no mesmo dia.</li>
        </ul>
        ${fonte}
      `
    },
    {
      id: 'periodontia-urgencias-endo',
      title: 'Urgências Endodônticas em Pacientes com Periodontite',
      category: 'Periodontia',
      summary: 'Sequência em três etapas: R-SUPRA e urgência, periograma e RAR, conclusão endodôntica.',
      order: 5,
      content: `
        <p>Nos casos de urgência endodôntica em pacientes com periodontite, poderá ser adotada a seguinte sequência de atendimento:</p>

        <h2>Etapa 1 - Raspagem supragengival e atendimento da urgência</h2>
        <ol>
          <li>Realizar a raspagem supragengival (R-SUPRA) com ultrassom.</li>
          <li>Em seguida, realizar o atendimento da urgência endodôntica.</li>
        </ol>

        <h2>Etapa 2 - Periograma e tratamento periodontal do sextante</h2>
        <ol>
          <li>Realizar o periograma.</li>
          <li>Realizar a raspagem e o alisamento radicular (RAR) do sextante correspondente.</li>
        </ol>

        <h2>Etapa 3 - Conclusão do tratamento endodôntico</h2>
        <p>Prosseguir com a conclusão do tratamento endodôntico.</p>

        <h2>Sequência resumida</h2>
        <p><strong>R-SUPRA com ultrassom → Urgência endodôntica → Periograma e RAR do sextante → Conclusão do tratamento endodôntico.</strong></p>
        ${fonte}
      `
    }
  ];

  // Soma os cinco registros aos protocolos existentes, sem afetar outras especialidades.
  // Se o arquivo for carregado de novo, substitui os mesmos IDs sem duplicá-los.
  const anteriores = Array.isArray(window.GuiaClinicoDB.protocolos)
    ? window.GuiaClinicoDB.protocolos
    : [];
  const ids = new Set(protocolosPeriodontia.map(item => item.id));
  window.GuiaClinicoDB.protocolos = [
    ...anteriores.filter(item => item && !ids.has(item.id)),
    ...protocolosPeriodontia
  ];
})();
