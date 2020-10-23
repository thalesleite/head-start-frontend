const QUESTIONS = {
  modules: [{
      id: 1,
      questions: [{
        id: 1,
        name: '1.1',
        question: 'Qual é a definição correta de FOOD LAW?',
        options: [{
            value: '1',
            text: 'Conceito ensinado pelo seu gerente de que o alimento não vai causar nenhum mal ao consumidor quando preparado e/ou consumido de acordo com a maneira planejada.'
          }, {
            value: '2',
            text: 'As leis, regulamentos e disposições administrativas que regem os alimentos em geral e a segurança dos alimentos em particular, a nível comunitário e/ou nacional; abrange qualquer fase da produção, transformação e distribuição de alimentos.'
          }, {
            value: '3',
            text: 'As leis, regulamentos e coleção de informações que o negócio cria para identificar perigos e a avaliação de controle, para serem colocados em prática, se necessários'
          }, {
            value: '4',
            text: 'Nenhuma das anteriores.'
        }],
        answer: '2'
      }, {
        id: 2,
        name: '1.2',
        question: `Leia a frase a seguir e assinale Verdadeiro ou Falso: “A contaminação cruzada é definida como a transferência direta ou indireta de um agente biológico, químico, entre outros contaminantes, de um lugar/alimento para outro que pode causar esse alimento a não ser seguro para consumo humano.”`,
        options: [{
            value: '1',
            text: 'Verdadeiro'
          }, {
            value: '2',
            text: 'Falso'
          }, {
            value: '3',
            text: ''
          }, {
            value: '4',
            text: ''
        }],
        answer: '1'
      }, {
        id: 3,
        name: '1.3',
        question: 'O principal objetivo da Legislação Alimentar é:',
        options: [{
            value: '1',
            text: 'Garantir um elevado nível de proteção da vida humana e da saúde e da proteção dos interesses dos consumidores.'
          }, {
            value: '2',
            text: 'Garantir a padronização de todos os negócios com limitada flexibilidade e a nível nacional.'
          }, {
            value: '3',
            text: 'Garantir que os negócios paguem as taxas necessárias para o governo referente alimentos.'
          }, {
            value: '4',
            text: 'Garantir o fechamento de negócios que não paguem taxas dos produtos.'
        }],
        answer: '1'
      }, {
        id: 4,
        name: '1.4',
        question: 'Assinale a alternativa correta:',
        options: [{
            value: '1',
            text: 'Todo estabelecimento deve cumprir as regras estabelecidas na Legislação de Trabalho Alimentar(Regulamento 777 / 2007 / BBC).'
          }, {
            value: '2',
            text: 'Todo estabelecimento deve cumprir as regras estabelecidas na Legislação de Higiene Alimentar (Regulamento 852/2004 / EC).'
          }, {
            value: '3',
            text: 'Todo estabelecimento deve cumprir as regras estabelecidas na Legislação de Higiene Alimentar  (Lei 19780/2030 / ITY).'
          }, {
            value: '4',
            text: 'Nenhuma das anteriores.'
        }],
        answer: '2'
      }, {
        id: 5,
        name: '1.5',
        question: 'Identifique qual das alternativas abaixo é a incorreta:',
        options: [{
          value: '1',
          text: 'O manipulador de alimento é a pessoa legalmente responsável por garantir que os requisitos da legislação alimentar sejam cumpridos na empresa do setor alimentício sob o seu controle.'
        }, {
          value: '2',
          text: 'Regulamento (EC) 852/2004 é o regulamento referente à higiene dos gêneros alimentícios.'
        }, {
          value: '3',
          text: 'Os funcionários ocasionais, sazonais ou voluntários não precisam receber treinamento em Higiene e Segurança Alimentar, somente os funcionários fixos.'
        }, {
          value: '4',
          text: 'Todas as afirmativas são incorretas.'
        }],
        answer: '3'
      }]
    }, {
      id: 2,
      questions: [{
        id: 1,
        name: '2.1',
        question: `"Higiene Alimentar é fundamental para desenvolver condições e medidas necessárias para garantir a segurança e adequação dos alimentos ao longo da cadeia produtiva, desde o produtor até o consumidor." Essa afirmação é:`,
        options: [{
            value: '1',
            text: 'Verdadeira'
          }, {
            value: '2',
            text: 'Falsa'
          }, {
            value: '3',
            text: ''
          }, {
            value: '4',
            text: ''
        }],
        answer: '1'
      }, {
        id: 2,
        name: '2.2',
        question: 'Qual é autoridade nacional responsável pela coordenação da aplicação da Legislação sobre Segurança Alimentar na Irlanda?',
        options: [{
            value: '1',
            text: 'NCFI (National College of Food of Ireland).'
          }, {
            value: '2',
            text: 'FSAI (The Food Safety Authority of Ireland).'
          }, {
            value: '3',
            text: 'AFI (Authority of Food of Ireland).'
          }, {
            value: '4',
            text: 'Nenhuma das anteriores.'
        }],
        answer: '2'
      }, {
        id: 3,
        name: '2.3',
        question: 'Identifique as principais consequências na falta de Higiene Alimentar:',
        options: [{
            value: '1',
            text: 'O risco de ocasionar doenças graves, que podem até levar ao óbito.'
          }, {
            value: '2',
            text: 'Destruir a imagem e reputação do negócio.'
          }, {
            value: '3',
            text: 'Caso uma empresa desobedeça as regras, será multada e, dependendo da gravidade, poderá ser fechada pelas autoridades, além de ter o caso publicado nas mídias.'
          }, {
            value: '4',
            text: 'Todas as anteriores.'
        }],
        answer: '4'
      }, {
        id: 4,
        name: '2.4',
        question: 'Qual é o principal motivo pelo qual o manipulador de alimentos deve adotar boas práticas de Higiene Pessoal?',
        options: [{
            value: '1',
            text: 'Uma Higiene Pessoal correta faz parte dos pré-requisitos do sistema de HACCP, pois prevê a contaminação dos alimentos, evitando a contaminação alimentar.'
          }, {
            value: '2',
            text: 'Caso o funcionário não mantenha uma boa higiene pessoal pode causar conflitos com o dono do negócio e perder o emprego.'
          }, {
            value: '3',
            text: 'É preciso ter uma aparência de limpeza caso o estabelecimento passe por algum tipo de auditoria.'
          }, {
            value: '4',
            text: 'Receber críticas de clientes, gerentes e supervisores.'
        }],
        answer: '1'
      }, {
        id: 5,
        name: '2.5',
        question: 'O manipulador de alimentos precisa se certificar de lavar as mãos depois de:',
        options: [{
          value: '1',
          text: 'Lidar com carne crua e alimentos alérgenos.'
        }, {
          value: '2',
          text: 'Tossir, espirrar, coçar orelha, nariz, olhos, tocar nos cabelos e fumar.'
        }, {
          value: '3',
          text: 'Manipular resíduos e produtos químicos.'
        }, {
          value: '4',
          text: 'Todas as anteriores.'
        }],
        answer: '4'
      }]
    }, {
      id: 3,
      questions: [{
        id: 1,
        name: '3.1',
        question: `Leia a frase a seguir e assinale Verdadeiro ou Falso: “Os perigos alimentares podem ser descritos como um agente biológico, interno, externo, resistente e quase impossível de ser eliminado.”`,
        options: [{
            value: '1',
            text: 'Verdadeiro'
          }, {
            value: '2',
            text: 'Falso'
          }, {
            value: '3',
            text: ''
          }, {
            value: '4',
            text: ''
        }],
        answer: '2'
      }, {
        id: 2,
        name: '3.2',
        question: 'Complete a frase a seguir com a alternativa correta: O perigo físico acontece quando o alimento é contaminado por objetos estranhos, por exemplo…',
        options: [{
            value: '1',
            text: 'Bactérias, vírus e parasitas.'
          }, {
            value: '2',
            text: 'Vidros, metais, ossos, pedras, madeiras, plásticos, insetos.'
          }, {
            value: '3',
            text: 'jkslajslka kasjlas asklaslas lasnla'
          }, {
            value: '4',
            text: 'Nenhuma das anteriores..'
        }],
        answer: '2'
      }, {
        id: 3,
        name: '3.3',
        question: 'Marque a alternativa incorreta:',
        options: [{
            value: '1',
            text: 'Os perigos biológicos de origem alimentar incluem microrganismos como bactérias, vírus e parasitas.'
          }, {
            value: '2',
            text: 'O choque anafilático é uma reação alérgica grave que surge poucos segundos ou minutos após se estar em contato com uma substância a que se tem alergia.'
          }, {
            value: '3',
            text: 'As bactérias patogênicas são responsáveis pela grande maioria dos surtos e casos de doenças transmitidas por alimentos.'
          }, {
            value: '4',
            text: 'Alimentos crus e de origem animal são alimentos seguros que menos sofrem contaminação por microrganismos, por terem nutrientes e água que não permitem sua multiplicação.'
        }],
        answer: '4'
      }, {
        id: 4,
        name: '3.4',
        question: 'Quais pessoas geralmente não são consideradas parte dos grupos vulneráveis?',
        options: [{
            value: '1',
            text: 'Idosos.'
          }, {
            value: '2',
            text: 'Adolescentes.'
          }, {
            value: '3',
            text: 'Pessoas recebendo tratamentos médicos, como quimioterapia.'
          }, {
            value: '4',
            text: 'Mulheres grávidas.'
        }],
        answer: '2'
      }, {
        id: 5,
        name: '3.5',
        question: `Assinale se a frase a seguir é Verdadeira ou Falsa: “A intoxicação alimentar acontece através de alimentos/bebidas contaminados com bactérias, parasitas e/ou vírus, toxinas e agentes químicos, e pode acontecer entre 1 a 72 horas depois da ingestão do alimento contaminado.”`,
        options: [{
            value: '1',
            text: 'Verdadeiro'
          }, {
            value: '2',
            text: 'Falso'
          }, {
            value: '3',
            text: ''
          }, {
            value: '4',
            text: ''
        }],
        answer: '1'
      }]
    }, {
      id: 4,
      questions: [{
        id: 1,
        name: '4.1',
        question: 'Assinale a alternativa incorreta: ',
        options: [{
            value: '1',
            text: 'A função da rastreabilidade é de acompanhar um produto em todas as etapas, ou seja, desde a produção até a chegada ao consumidor final.'
          }, {
            value: '2',
            text: 'O manipulador de alimentos, antes de receber a entrega e fazer o armazenamento adequado, necessita verificar os detalhes necessários do produto entregue, tais como datas de validade, vazamentos, danos e qualquer outra obstrução nos produtos.'
          }, {
            value: '3',
            text: 'O manipulador de alimentos deve fiscalizar para que os produtos não corram risco de serem falsificados, como a presença de etiquetas que estão impressas diretamente na embalagem e não numa etiqueta colada sobre a data de validade.'
          }, {
            value: '4',
            text: 'Nem todos os gêneros alimentícios, ao entrarem no estabelecimento, necessitam ser rastreáveis ao fornecedor, somente carne crua e aves. '
        }],
        answer: '4'
      }, {
        id: 2,
        name: '4.2',
        question: `“O manipulador de alimentos deve se certificar que as primeiras mercadorias a chegar são as primeiras a serem vendidas. Portanto, deve-se armazenar os novos produtos atrás dos que já estão armazenados, de acordo com o sistema conhecido como FIFO: First In, First Out.” Essa afirmação é:`,
        options: [{
            value: '1',
            text: 'Verdadeira'
          }, {
            value: '2',
            text: 'Falsa'
          }, {
            value: '3',
            text: ''
          }, {
            value: '4',
            text: ''
        }],
        answer: '1'
      }, {
        id: 3,
        name: '4.3',
        question: 'Assinale a alternativa correta:',
        options: [{
            value: '1',
            text: 'O manipulador de alimentos deve controlar e registar a temperatura das geladeiras/ congeladores pelo menos duas vezes por dia.'
          }, {
            value: '2',
            text: 'O manipulador de alimentos deve controlar e registar a temperatura das geladeiras/ congeladores pelo menos duas vezes por semana.'
          }, {
            value: '3',
            text: 'O manipulador de alimentos deve controlar e registar a temperatura das geladeiras/ congeladores pelo menos duas vezes a cada dois meses.'
          }, {
            value: '4',
            text: 'O manipulador de alimentos deve controlar e registar a temperatura das geladeiras/ congeladores pelo menos duas vezes a cada hora.'
        }],
        answer: '1'
      }, {
        id: 4,
        name: '4.4',
        question: 'Assinale a alternativa correta referente a uma das medidas preventivas na hora de preparar um alimento:',
        options: [{
            value: '1',
            text: 'Usar um pano umedecido com desinfetante na tábua de alimentos para limpá-la entre cada operação.'
          }, {
            value: '2',
            text: 'Usar a mesma faca para diferentes tipos de alimentos, mas passar um pano com água quente entre cada operação.'
          }, {
            value: '3',
            text: 'Cortar vegetais e peixe cru juntos e ao mesmo tempo, pois ajuda a evitar a contaminação cruzada.'
          }, {
            value: '4',
            text: 'Usar um sistema organizado de cores entre os utensílios para auxiliar no processo de segregação de alimentos.'
        }],
        answer: '4'
      }, {
        id: 5,
        name: '4.5',
        question: ' Os termostatos de geladeira e cold display devem ser ajustados de forma a garantir que o alimento esteja a temperaturas entre:',
        options: [{
          value: '1',
          text: '7°C e 20°C.'
        }, {
          value: '2',
          text: '0°C e 5°C.'
        }, {
          value: '3',
          text: '0°C e 15°C.'
        }, {
          value: '4',
          text: '10°C e 15°C.'
        }],
        answer: '2'
      }]
    }, {
      id: 5,
      questions: [{
        id: 1,
        name: '5.1',
        question: 'Assinale a alternativa incorreta:',
        options: [{
            value: '1',
            text: 'HACCP é um sistema que identifica, avalia, e controla perigos que são significantes para a Segurança Alimentar.'
          }, {
            value: '2',
            text: 'HACCP é a abreviação em inglês de Hazard Analysis and Critical Control Point.'
          }, {
            value: '3',
            text: 'O sistema HACCP é baseado em 24 princípios.'
          }, {
            value: '4',
            text: 'Todas as empresas do setor alimentício, que se dediquem a qualquer fase da produção, transformação, armazenagem, distribuição de gêneros alimentícios, tem que desenvolver o sistema HACCP.'
        }],
        answer: '3'
      }, {
        id: 2,
        name: '5.2',
        question: 'Qual alternativa corresponde a origem e criação do sistema HACCP:',
        options: [{
            value: '1',
            text: 'O sistema HACCP foi criado e desenvolvido nos anos 60 pela companhia americana Pillsbury, em parceria com as Forças Armadas Americanas, para atender a um pedido do FBI.'
          }, {
            value: '2',
            text: 'O sistema HACCP foi criado e desenvolvido nos anos 60 pela companhia americana Pillsbury, em parceria com as Forças Armadas Americanas, para atender a um pedido da NASA.'
          }, {
            value: '3',
            text: 'O sistema HACCP foi criado e desenvolvido nos anos 60 pela companhia americana Pillsbury, em parceria com as Forças Armadas Americanas, para atender um pedido da CIA.'
          }, {
            value: '4',
            text: 'O sistema HACCP foi criado e desenvolvido nos anos 60 pela companhia americana Pillsbury, em parceria com as Forças Armadas Americanas, para atender um pedido exclusivo do Presidente.'
        }],
        answer: '1'
      }, {
        id: 3,
        name: '5.3',
        question: `Assinale Verdadeiro ou Falso: “HACCP é uma abordagem criada com o objetivo principal de reduzir os gastos dos estabelecimentos e entregar uma boa imagem de segurança para o consumidor, e, dessa maneira, estimular a economia local e global.”`,
        options: [{
            value: '1',
            text: 'Verdadeiro'
          }, {
            value: '2',
            text: 'Falso'
          }, {
            value: '3',
            text: ''
          }, {
            value: '4',
            text: ''
        }],
        answer: '2'
      }, {
        id: 4,
        name: '5.4',
        question: 'Assinale as principais vantagens da aplicação do sistema HACCP:',
        options: [{
            value: '1',
            text: 'O aumento da segurança dos alimentos e da saúde pública.'
          }, {
            value: '2',
            text: 'Redução de queixas e reembolsos.'
          }, {
            value: '3',
            text: 'Redução de desperdício.'
          }, {
            value: '4',
            text: 'Todas as alternativas anteriores estão corretas.'
        }],
        answer: '4'
      }, {
        id: 5,
        name: '5.5',
        question: 'Assinale a alternativa incorreta: São exemplos de pré - requisitos:',
        options: [{
            value: '1',
            text: 'Manter um alto nível de higiene pessoal.'
          }, {
            value: '2',
            text: 'Manter o ambiente limpo e higienizado.'
          }, {
            value: '3',
            text: 'Estabelecer um controle de pragas eficiente.'
          }, {
            value: '4',
            text: 'Consertar um detector de metais que esteja falhando na produção de uma fábrica.'
        }],
        answer: '4'
      }]
    }, {
      id: 6,
      questions: [{
        id: 1,
        name: '6.1',
        question: 'Assinale abaixo a alternativa correta referente a alguns exemplos de pragas:',
        options: [{
            value: '1',
            text: 'Gerente, supervisor, dono do negócio e clientes.'
          }, {
            value: '2',
            text: 'Mosquitos, moscas, ratos, baratas e pombas.'
          }, {
            value: '3',
            text: 'Produtos químicos na comida, agrotóxicos e pesticidas.'
          }, {
            value: '4',
            text: 'Todas as alternativas estão corretas.'
        }],
        answer: '2'
      }, {
        id: 2,
        name: '6.2',
        question: `“Uma medida destrutiva é muito mais fácil de se aplicar em relação a uma medida preventiva de pragas.” Essa afirmação é:`,
        options: [{
            value: '1',
            text: 'Verdadeira'
          }, {
            value: '2',
            text: 'Falsa'
          }, {
            value: '3',
            text: ''
          }, {
            value: '4',
            text: ''
        }],
        answer: '2'
      }, {
        id: 3,
        name: '6.3',
        question: 'Assinale a alternativa incorreta em termos de medidas preventivas de controles de pragas:',
        options: [{
            value: '1',
            text: 'Manter janelas, portas, ralos, drenos fechados/vedados.'
          }, {
            value: '2',
            text: 'Manter uma rotação de estoque e ambiente limpo constantemente.'
          }, {
            value: '3',
            text: 'Identificar a(s) praga(s) que causaram a infestação.'
          }, {
            value: '4',
            text: 'Armazenar alimentos em prateleiras distantes do chão e não encostar os alimentos nas paredes.'
        }],
        answer: '3'
      }, {
        id: 4,
        name: '6.4',
        question: 'Assinale a alternativa incorreta referente a indícios de pragas no estabelecimento:',
        options: [{
            value: '1',
            text: 'Embalagens danificadas.'
          }, {
            value: '2',
            text: 'A porta da congelador e da cozinha aberta.'
          }, {
            value: '3',
            text: 'Excrementos, tais como fezes e urina de animais.'
          }, {
            value: '4',
            text: 'Pelos e cabelos de animais.'
        }],
        answer: '2'
      }, {
        id: 5,
        name: '6.5',
        question: `Assinale a alternativa correta: Para atuar em conformidade com as Leis de Segurança Alimentar, as instalações devem ser concebidas de forma que...`,
        options: [{
            value: '1',
            text: 'Facilitem a limpeza.'
          }, {
            value: '2',
            text: 'Reduzam os riscos de contaminação.'
          }, {
            value: '3',
            text: 'Facilitem a manutenção.'
          }, {
            value: '4',
            text: 'Todas as anteriores.'
        }],
        answer: '4'
      }]
    }
  ]
};

export default QUESTIONS;