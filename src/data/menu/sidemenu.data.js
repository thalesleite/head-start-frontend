import videoModulo from '../../assets/videos/course/modulo1/modulo11.mp4';
// Modulo 1
import videoModulo11 from '../../assets/videos/course/modulo1/modulo11.mp4';
import videoModulo12 from '../../assets/videos/course/modulo1/modulo12.mp4';
// Modulo 2
import videoModulo21 from '../../assets/videos/course/modulo2/modulo21.mp4';
import videoModulo22 from '../../assets/videos/course/modulo2/modulo22.mp4';
import videoModulo23 from '../../assets/videos/course/modulo2/modulo23.mp4';
// Modulo 3
import videoModulo31 from '../../assets/videos/course/modulo3/modulo31.mp4';
import videoModulo32 from '../../assets/videos/course/modulo3/modulo32.mp4';
import videoModulo33 from '../../assets/videos/course/modulo3/modulo33.mp4';
// Modulo 4
import videoModulo41 from '../../assets/videos/course/modulo4/modulo41.mp4';
import videoModulo42 from '../../assets/videos/course/modulo4/modulo42.mp4';
//import videoModulo43 from '../../assets/videos/course/modulo4/modulo43.mp4';
// Modulo 5
//import videoModulo51 from '../../assets/videos/course/modulo5/modulo51.mp4';
//import videoModulo52 from '../../assets/videos/course/modulo5/modulo52.mp4';
// Modulo 6
//import videoModulo61 from '../../assets/videos/course/modulo6/modulo61.mp4';
//import videoModulo62 from '../../assets/videos/course/modulo6/modulo62.mp4';
//import videoModulo63 from '../../assets/videos/course/modulo6/modulo63.mp4';
// Modulo 7
//import videoModulo71 from '../../assets/videos/course/modulo7/modulo71.mp4';

const SIDEMNU = [
  {
    id: 1,
    title: 'Módulo 1',
    items: [{
        link: '1.1',
        title: '1.1 Introdução',
        video: '//player.vimeo.com/video/468646488',
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
        video: videoModulo,
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
        video: videoModulo,
        hidden: true
      }, {
        link: '5.2',
        title: '5.2 Controle de peste e resíduos',
        video: videoModulo,
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
        video: videoModulo,
        hidden: true
      }, {
        link: '6.2',
        title: '6.2 Treinamento de staff e registros',
        video: videoModulo,
        hidden: true
      }, {
        link: '6.3',
        title: '6.3 Requerimentos Legais',
        video: videoModulo,
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
        video: videoModulo,
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