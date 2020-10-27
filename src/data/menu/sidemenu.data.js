const vimeo = 'https://player.vimeo.com/video';

// Modulo 1
const videoModulo11 = `${vimeo}/470646633`;
const videoModulo12 = `${vimeo}/470681979`;
const videoModulo13 = `${vimeo}/470745656`;
const videoModulo14 = `${vimeo}/471009395`;
// Modulo 2
const videoModulo21 = `${vimeo}/471535190`;
const videoModulo22 = `${vimeo}/471694937`;
const videoModulo23 = `${vimeo}/469698588`;
// Modulo 3
const videoModulo31 = `${vimeo}/472033421`;
const videoModulo32 = `${vimeo}/472034164`;
const videoModulo33 = `${vimeo}/472034470`;
// Modulo 4
const videoModulo41 = `${vimeo}/472044046`;
const videoModulo42 = `${vimeo}/472208142`;
const videoModulo43 = `${vimeo}/472175806`;
// Modulo 5
const videoModulo51 = `${vimeo}/472264881`;
const videoModulo52 = `${vimeo}/472277371`;
// Modulo 6
const videoModulo61 = `${vimeo}/469698588`;
const videoModulo62 = `${vimeo}/469698588`;

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
        title: '1.2 Termos, Definições e Vocabulário',
        video: videoModulo12,
        hidden: true
      }, {
        link: '1.3',
        title: '1.3 Requerimentos Legais em Segurança Alimentar e Legislação',
        video: videoModulo13,
        hidden: true
      }, {
        link: '1.4',
        title: '1.4 Segurança Alimentar: Benefícios e Consequências em caso de Negligência',
        video: videoModulo14,
        hidden: true
      }, {
        link: '1.5',
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
        title: '2.1 Higiene Alimentar',
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
        title: '3.1 Perigos da Contaminação Alimentar',
        video: videoModulo31,
        hidden: true
      }, {
        link: '3.2',
        title: '3.2 Intoxicação e Infecção Alimentar',
        video: videoModulo32,
        hidden: true
      }, {
        link: '3.3',
        title: '3.3 Crescimento Bacteriano',
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
        title: '4.1 Transporte, Distribuição e Armazenamento',
        video: videoModulo41,
        hidden: true
      }, {
        link: '4.2',
        title: '4.2 Preparando Alimentos',
        video: videoModulo42,
        hidden: true
      }, {
        link: '4.3',
        title: '4.3 Servindo Alimentos',
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
        title: '5.1 HACCP',
        video: videoModulo51,
        hidden: true
      }, {
        link: '5.2',
        title: '5.2 Treinamentos e Registros',
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
        title: '6.1 Controle de Pragas',
        video: videoModulo61,
        hidden: true
      }, {
        link: '6.2',
        title: '6.2 Instalações',
        video: videoModulo62,
        hidden: true
      }, {
        link: '6.3',
        title: 'Revisão',
        hidden: true
    }],
    hidden: true,
    enabled: false
  }, {
    id: 7,
    title: 'Prova de Certificação',
    items: [{
        link: '7.1',
        title: '7.1 Prova',
        hidden: true
    }],
    hidden: true,
    enabled: false
  }
];

export default SIDEMNU;