const vimeo = 'https://player.vimeo.com/video';

// Modulo 1
const videoModulo11 = `${vimeo}/469698588`;
const videoModulo12 = `${vimeo}/469705858`;
// Modulo 2
const videoModulo21 = `${vimeo}/469698588`;
const videoModulo22 = `${vimeo}/469705858`;
const videoModulo23 = `${vimeo}/469698588`;
// Modulo 3
const videoModulo31 = `${vimeo}/469698588`;
const videoModulo32 = `${vimeo}/469705858`;
const videoModulo33 = `${vimeo}/469698588`;
// Modulo 4
const videoModulo41 = `${vimeo}/469698588`;
const videoModulo42 = `${vimeo}/469705858`;
const videoModulo43 = `${vimeo}/469698588`;
// Modulo 5
const videoModulo51 = `${vimeo}/469698588`;
const videoModulo52 = `${vimeo}/469705858`;
// Modulo 6
const videoModulo61 = `${vimeo}/469698588`;
const videoModulo62 = `${vimeo}/469705858`;
const videoModulo63 = `${vimeo}/469698588`;
// Modulo 7
const videoModulo71 = `${vimeo}/469698588`;

const SIDEMNU = [
  {
    id: 1,
    title: 'Módulo 1',
    items: [{
        link: '1.1',
        title: '1.1 Introdução',
        video: videoModulo11,
        hidden: false
      },{
        link: '1.2',
        title: '1.2 Termos, definições e  Vocabulário',
        video: videoModulo12,
        hidden: true
      }, {
        link: '1.3',
        title: 'Revisão',
        hidden: true
    }],
    hidden: false,
    enabled: true
  }, {
    id: 2,
    title: 'Módulo 2',
    items: [{
        link: '2.1',
        title: '2.1 Segurança e Higiene Alimentar',
        video: videoModulo21,
        hidden: true
      }, {
        link: '2.2',
        title: '2.2 Higiene Pessoal',
        video: videoModulo22,
        hidden: true
      }, {
        link: '2.3',
        title: '2.3 Limpeza e Higienização',
        video: videoModulo23,
        hidden: true
      }, {
        link: '2.4',
        title: 'Revisão',
        hidden: true
    }],
    hidden: true,
    enabled: false
  }, {
    id: 3,
    title: 'Módulo 3',
    items: [{
        link: '3.1',
        title: '3.1 Contaminação Alimentar',
        video: videoModulo31,
        hidden: true
      }, {
        link: '3.2',
        title: '3.2 Intoxicação e Infecção Alimentar',
        video: videoModulo32,
        hidden: true
      }, {
        link: '3.3',
        title: '3.3 Microbiologia',
        video: videoModulo33,
        hidden: true
      }, {
        link: '3.4',
        title: 'Revisão',
        hidden: true
    }],
    hidden: true,
    enabled: false
  }, {
    id: 4,
    title: 'Módulo 4',
    items: [{
        link: '4.1',
        title: '4.1 Comprando, Recebendo Entregas e  Armazenamento',
        video: videoModulo41,
        hidden: true
      }, {
        link: '4.2',
        title: '4.2 Preparo de Alimentos - parte 1',
        video: videoModulo42,
        hidden: true
      }, {
        link: '4.3',
        title: '4.3 Preparo de Alimentos - parte 2',
        video: videoModulo43,
        hidden: true
      }, {
        link: '4.4',
        title: 'Revisão',
        hidden: true
    }],
    hidden: true,
    enabled: false
  }, {
    id: 5,
    title: 'Módulo 5',
    items: [{
        link: '5.1',
        title: '5.1 Servindo alimentos e layout das facilidades/equipamentos',
        video: videoModulo51,
        hidden: true
      }, {
        link: '5.2',
        title: '5.2 Controle de peste e resíduos',
        video: videoModulo52,
        hidden: true
      }, {
        link: '5.3',
        title: 'Revisão',
        hidden: true
    }],
    hidden: true,
    enabled: false
  }, {
    id: 6,
    title: 'Módulo 6',
    items: [{
        link: '6.1',
        title: '6.1 HACCP',
        video: videoModulo61,
        hidden: true
      }, {
        link: '6.2',
        title: '6.2 Treinamento de staff e registros',
        video: videoModulo62,
        hidden: true
      }, {
        link: '6.3',
        title: '6.3 Requerimentos Legais',
        video: videoModulo63,
        hidden: true
      }, {
        link: '6.4',
        title: 'Revisão',
        hidden: true
    }],
    hidden: true,
    enabled: false
  }, {
    id: 7,
    title: 'Módulo 7',
    items: [{
        link: '7.1',
        title: '7.1  Importância de Pré-Requisitos',
        video: videoModulo71,
        hidden: true
      }, {
        link: '7.2',
        title: 'Revisão',
        hidden: true
    }],
    hidden: true,
    enabled: false
  }, {
    id: 8,
    title: 'Prova de Certificação',
    items: [{
        link: '8.1',
        title: '8.1 Prova',
        hidden: true
    }],
    hidden: true,
    enabled: false
  }
];

export default SIDEMNU;