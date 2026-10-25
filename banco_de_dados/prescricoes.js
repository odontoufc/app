/**
 * Guia Clínico — Banco de dados de prescrições.
 * Conteúdo TRANSCRITO do HTML original do projeto, sem modificação de
 * medicamentos, quantidades e posologias.
 *
 * ATENÇÃO: esses são modelos legados, NÃO prescrições validadas nem
 * recomendações individualizadas. Antes de publicar ou utilizar, revisar
 * indicações, contraindicações, alergias, interações, doses, apresentações
 * e adequação às diretrizes clínicas e aos pacientes.
 *
 * Arquivo estático para GitHub Pages, independente de Firebase.
 * Carregar depois das bibliotecas e ANTES de app.js em prescricoes.html.
 * Estrutura consumida por renderPrescricoes() em app.js.
 */
(function () {
    'use strict';

    window.GuiaClinicoDB = window.GuiaClinicoDB || {};
    window.GuiaClinicoDB.prescricoes = {
        "analgesicos": [
            {
                "nome": "Dipirona 500mg",
                "quantidade": "12 comprimidos",
                "posologia": "Tomar 01 (um) comprimido, a cada 06 (seis) horas, durante 03 (três) dias."
            },
            {
                "nome": "Paracetamol 750mg",
                "quantidade": "12 comprimidos",
                "posologia": "Tomar 01 (um) comprimido, a cada 06 (seis) horas, durante 03 (três) dias."
            }
        ],
        "anti-inflamatorios": [
            {
                "nome": "Ibuprofeno 600mg",
                "quantidade": "09 comprimidos",
                "posologia": "Tomar 01 (um) comprimido, a cada 08 (oito) horas, durante 03 (três) dias."
            },
            {
                "nome": "Nimesulida 100mg",
                "quantidade": "06 comprimidos",
                "posologia": "Tomar 01 (um) comprimido, a cada 12 (doze) horas, durante 03 (três) dias."
            }
        ],
        "corticosteroides": [
            {
                "nome": "Dexametasona 4mg",
                "quantidade": "02 comprimidos",
                "posologia": "Tomar 02 (dois) comprimidos, 01 (uma) hora antes do procedimento."
            },
            {
                "nome": "Betametasona 2mg",
                "quantidade": "02 comprimidos",
                "posologia": "Tomar 02 (dois) comprimidos, 01 (uma) hora antes do procedimento."
            }
        ],
        "antibioticos": [
            {
                "nome": "Amoxicilina 500mg",
                "quantidade": "21 comprimidos",
                "posologia": "Tomar 01 (um) comprimido, a cada 08 (oito) horas, durante 07 (sete) dias."
            },
            {
                "nome": "Ampicilina 500mg",
                "quantidade": "28 comprimidos",
                "posologia": "Tomar 01 (um) comprimido, a cada 06 (seis) horas, durante 07 (sete) dias."
            },
            {
                "nome": "Clavulin 500mg",
                "quantidade": "21 comprimidos",
                "posologia": "Tomar 01 (um) comprimido, a cada 08 (oito) horas, durante 07 (sete) dias."
            },
            {
                "nome": "Dalacin C 300mg (Clindamicina)",
                "quantidade": "28 comprimidos",
                "posologia": "Tomar 01 (um) comprimido, a cada 06 (seis) horas, durante 07 (sete) dias."
            },
            {
                "nome": "Cefalexina 500mg",
                "quantidade": "28 comprimidos",
                "posologia": "Tomar 01 (um) comprimido, a cada 06 (seis) horas, durante 07 (sete) dias."
            },
            {
                "nome": "Flagyl 250mg (Metronidazol)",
                "quantidade": "21 comprimidos",
                "posologia": "Tomar 01 (um) comprimido, a cada 08 (oito) horas, durante 07 (sete) dias.",
                "observacoes": "(Associar em infecções graves)"
            }
        ],
        "antifungicos": [
            {
                "nome": "Nistatina 100.000 UI/ml",
                "quantidade": "01 frasco",
                "posologia": "Bochechar 05ml, a cada 06 (seis) horas, durante 14 (quatorze) dias."
            }
        ],
        "colutorios": [
            {
                "nome": "Digluconato de clorexidina 0,12%",
                "quantidade": "01 frasco",
                "posologia": "Bochechar 15ml por 01 (um) minuto, a cada 12 (doze) horas (30 min após escovação), durante 07 (sete) dias."
            }
        ],
        "corticosteroides-topicos": [
            {
                "nome": "Omcilon-A em Orabase 10g",
                "quantidade": "01 tubo",
                "posologia": "Aplicar pequena quantidade nas lesões, sem esfregar, até formar película, 03 (três) vezes ao dia (após refeições), durante 07 (sete) dias."
            }
        ]
    };
})();
