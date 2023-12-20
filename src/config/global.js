export default {
  global: {
    componenteFormativo: 'Desarrollar operaciones en máquinas de confección',
    descripcionCurso:
      'En este componente se abordarán conocimientos técnicos en la conceptualización de la industria de la confección, se incluyen conocimientos sobre la maquinaria a utilizar en la elaboración de prendas de vestir, incluyendo normatividad, aditamentos y tipos de puntadas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Máquinas de confección',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Maquinaria y equipo de procesos de confección',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Operatividad para confección de prendas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Agujas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Aditamentos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Tipos de puntadas y costuras',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      //{
      //  nombreRuta: 'complementario',
      //  icono: 'far fa-folder-open',
      //  titulo: 'Material complementario',
      //},
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/material.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: 'https://www.google.com/',
    },
    {
      tema: '',
      referencia: '',
      tipo: '',
      descarga: '/downloads/prueba.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Ajuste',
      significado:
        'Elementos mecánicos que se ajustan a cada tipo de material o tejido, bien sea liviano, semi pesado o pesado.',
    },
    {
      termino: 'Alimentación o transporte',
      significado:
        'Alimentación en la maquinaria de confección se refiere al desplazamiento del material a coser.',
    },
    {
      termino: 'Barra de aguja',
      significado:
        'Elemento mecánico su movimiento es rectilíneo vertical, sostiene la aguja en posición.',
    },
    {
      termino: 'Barra prénsatela',
      significado:
        'Elemento mecánico barra que sujeta el prénsatela o pie de la máquina.',
    },
    {
      termino: 'Calibre de aguja',
      significado: 'Es la que determina el tipo o grosor del material a coser',
    },
    {
      termino: 'Corchete',
      significado:
        'Elemento mecánico utilizado para producir la puntada de cadeneta a un hilo.',
    },
    {
      termino: 'Costura',
      significado: 'Unión de dos o más materiales o tejidos.',
    },
    {
      termino: 'Diente',
      significado:
        'Este dispositivo mecánico es el encargado de desplazar el material a coser.',
    },
    {
      termino: 'Extensor',
      significado:
        'Elemento mecánico utilizado en la mayoría de las veces como auxiliar de los looper, corchetes para formar la puntada.',
    },
    {
      termino: 'Guía hilos',
      significado:
        'Elemento mecánico que sirve para guiar el hilo durante todo su recorrido.',
    },
    {
      termino: 'Lanzadera',
      significado:
        'Elemento mecánico que junto con la aguja, sirve para formar la puntada, su movimiento es oscilatorio.',
    },
    {
      termino: 'Looper',
      significado:
        'Elemento mecánico que tiene hilo propio o sea se puede enhebrar como las agujas, es decir tiene ojo.  ',
    },
  ],
  referencias: [
    {
      referencia:
        'Armando sk. (2012). AGUJAS PARA MÁQUINA DE COSER / LITTLE POST.',
      link: 'https://www.pinterest.es/pin/157133474477830809/',
    },
    {
      referencia: 'Brildor. (2021). ¿Qué aguja debo comprar para mi máquina?',
      link: 'https://www.brildor.com/es/costura/agujas.html',
    },
    {
      referencia:
        'Confecciones con máquinas industriales. (2019). Maquina fileteadora, sobrehiladora u overlook.',
      link:
        'http://confecionesconmaquinasindustriales.blogspot.com/2011/08/maquina-fileteadorasobrehiladora-u.html',
    },
    {
      referencia:
        'El rincón de Celeste Cielo. (2012). Agujas de máquina según el tipo de tela y el hilo.',
      link:
        'https://elrincondecelestecielo.blogspot.com/2012/05/agujas-de-maquina-segun-el-tipo-de-tela.html#:~:text=Tipos%20de%20agujas%3A&text=Donde%20los%20n%C3%BAmero%209%2C%2010,de%20bola%20o%20media%20bola',
    },
    {
      referencia:
        'Groz, B. (2021). Sewing, Agujas para máquinas de coser para la industria de la confección.',
      link:
        'https://groz-beckert.com/mm/media/es/web/pdf/Sewing_machine_needles_for_the_apparel_industry.pdf ',
    },
    {
      referencia: 'Gutierrez S. (s.f). Enhebrado y calibración máquina plana.',
    },
    {
      referencia:
        'Gutierrez S. (s.f). Enhebrado y puesta a punto de máquina recubridora.',
    },
    {
      referencia:
        'Jiménez, A. (2014). Partes y funciones de la máquina collarín. (2021).',
      link:
        'https://prezi.com/me9vvu-vchcj/partes-y-funciones-de-la-maquina-collarin/',
    },
    {
      referencia: 'Máquina de Coser. (2016). La Aguja y sus partes.',
      link: 'https://maquinadecoser.com.pe/la-aguja-y-sus-partes/',
    },
    {
      referencia:
        'Pardo, M. (2012). GUÍAS, PIES ADITAMENTOS PARA LA INDUSTRIA DE LA CONFECCIÓN.',
      link:
        'https://drive.google.com/file/d/1AcqRumpgJ8tC1jikb2bfXNrcPhlr7OFG/view?usp=sharing',
    },
    {
      referencia: 'SENA. (s.f.). Control de calidad en confección.',
    },
    {
      referencia:
        'SENA. (2021). Componente formativo 15, parte A: Taller básico de máquinas. Repositorios SENA.',
    },
    {
      referencia:
        'Top Máquinas de Coser. (s.f). Partes de la máquina de coser industrial.',
      link:
        'https://topmaquinasdecoser.es/partes-de-la-maquina-de-coser-industrial/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ericka Alexandra Blanco Sánchez',
          cargo: 'Experto técnico',
          centro:
            'Regional Antioquia - Centro de formación en diseño, confección y moda',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Adecuador instruccional',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Vilma Lucia Perilla M',
          cargo: 'Revisión pedagógica y metodológica',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Revisión y corrección de estilo',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador web',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
