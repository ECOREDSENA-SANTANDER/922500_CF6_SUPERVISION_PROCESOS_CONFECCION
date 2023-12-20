<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-primario
      .titulo-principal__numero
        span 1
      h1 Máquinas de confección
    
    figure.mb-4(data-aos="fade-left")
      img(src="@/assets/curso/tema1/img01.jpg", alt="Máquinas de confección")
    
    p.mb-4 Con el fin de reconocer e identificar las partes y tipos de máquinas y sus usos, es importante entender los conceptos básicos y terminología relacionada con las funciones y generaciones de maquinaria. Esto proporcionará los conocimientos de relación entre insumos, maquinaria y ajustes para facilitar el desarrollo operativo del personal que manipula la maquinaria y las prendas a fabricar.

    p.mb-4 De esta forma, vamos a explorar los siguientes elementos:

    TabsA.color-acento-contenido.mb-5(data-aos="fade-up")
      .tarjeta.color-acento-Botones.BG04.p-4(titulo="Costura")
        .position-relative.d-block.d-lg-flex.justify-content-end
          .BGwhite05.brdFull.pst01.p-4
            h3.text-dark Costura
            p.text-dark.mb-0 Es el entrelazamiento y/o unión entre dos o más hilos puestos en recorrido de una o más telas.
          figure.pst02
            img(src='@/assets/curso/tema1/img02.png', alt='Costura')
      
      .tarjeta.color-acento-Botones.BG04.p-4(titulo="Características")
        .position-relative.d-block.d-lg-flex.justify-content-end
          .BGwhite05.brdFull.pst01.p-4
            h3.text-dark Características
            p.text-dark.mb-0 Están estrechamente relacionadas con el tipo de puntada, material puesto para coser y la relación entre elementos (hilos, tela y ajuste de máquina).
          figure.pst02
            img(src='@/assets/curso/tema1/img03.png', alt='Características')
      
      .tarjeta.color-acento-Botones.BG04.p-4(titulo="Apariencia")
        .position-relative.d-block.d-lg-flex.justify-content-end
          .BGwhite05.brdFull.pst01.p-4
            h3.text-dark Apariencia
            p.text-dark.mb-0 Es la presentación final de la costura, donde se evalúa que la puntada y la lazada no quedan con defectos.
          figure.pst02
            img(src='@/assets/curso/tema1/img08.png', alt='Apariencia')
      
      .tarjeta.color-acento-Botones.BG04.p-4(titulo="Seguridad")
        .position-relative.d-block.d-lg-flex.justify-content-end
          .BGwhite05.brdFull.pst01.p-4
            h3.text-dark Seguridad
            p.text-dark.mb-0 Se refiere a la capacidad de la puntada para desarmarse o deshilarse el material.
          figure.pst02
            img(src='@/assets/curso/tema1/img04.png', alt='Seguridad')
      
      .tarjeta.color-acento-Botones.BG04.p-4(titulo="Confort")
        .position-relative.d-block.d-lg-flex.justify-content-end
          .BGwhite05.brdFull.pst01.p-4
            h3.text-dark Confort
            p.text-dark.mb-0 Es la comodidad y elongación que brinda la costura en la tela  cuando está expuesta al contacto con la piel y al momento de uso de la prenda.
          figure.pst02
            img(src='@/assets/curso/tema1/img05.png', alt='Confort')

      .tarjeta.color-acento-Botones.BG04.p-4(titulo="Resistencia")
        .position-relative.d-block.d-lg-flex.justify-content-end
          .BGwhite05.brdFull.pst01.p-4
            h3.text-dark Resistencia
            p.text-dark.mb-0 Es la capacidad que tiene la costura de soportar refuerzos y cargas en la tela, sin reventarse o dañarse.
          figure.pst02
            img(src='@/assets/curso/tema1/img06.png', alt='Resistencia')
      
      .tarjeta.color-acento-Botones.BG04.p-4(titulo="Clasificación")
        .position-relative.d-block.d-lg-flex.justify-content-end
          .BGwhite05.brdFull.pst01.p-4
            h3.text-dark Clasificación
            p.text-dark.mb-0 Según la forma en que se entrelazan los hilos, el número de agujas, hileras de puntadas, el lugar que ocupan en orden dentro del grupo y la cantidad de costuras previas que lleva, las costuras están clasificadas en 4 grupos: sobrepuestas, envivadas, engarzadas y tope a tope también llamadas canto a canto.
          figure.pst02
            img(src='@/assets/curso/tema1/img07.png', alt='Clasificación')
    
    p.mb-4(data-aos="fade-up") A continuación, se presentan las costuras que producen los diferentes tipos de máquinas y operaciones que se realizan con las mismas:

    TabsB.color-acento-contenido.mb-5(data-aos="zoom-in-left")
      .py-4.py-md-5.BG02.pb-5(titulo="Sobrepuestas")        
        SlyderA
          .row.justify-content-center.m-4
            .col-md-11.col-lg-9
              .row.align-items-end
                .col-lg-6
                  figure.mb-2
                    img(src='@/assets/curso/tema1/Simg11.svg', alt='Sobrepuestas 01')
                  h3 Máquinas que la producen
                  .bg-white.brdBtn.p-4
                    p.mb-0 Planas 1 aguja, fileteadoras con puntada de seguridad o sin ella siempre que estén cosiendo en 2 o más telas, recubridoras, máquinas de zigzag.
                .col-lg-6.bg-white.brdBtn.p-4
                  p.mb-4 
                    strong Algunas operaciones que se realizan con este tipo de costura
                  ul.lista-ul--color.mb-0
                    li 
                      i.lista-ul__vineta
                      | Cuadrar bolsillos delanteros.
                    li 
                      i.lista-ul__vineta
                      | Cerrar costados o entre pierna en fileteadora.
                    li 
                      i.lista-ul__vineta
                      | Recubrir vistas o falsos.
                    li 
                      i.lista-ul__vineta
                      | Cerrar bolsillos.
                    li 
                      i.lista-ul__vineta
                      | Pegar cierre.
                    li 
                      i.lista-ul__vineta
                      | Pegar ribetes.
                    li 
                      i.lista-ul__vineta
                      | Pegar marquillas.
                    li 
                      i.lista-ul__vineta
                      | Fijar bolsillo delantero.
                    li 
                      i.lista-ul__vineta
                      | Pegar aletilla.
                    li 
                      i.lista-ul__vineta
                      | Unir tiro delantero cuando uno va embonado.
                    li.mb-0
                      i.lista-ul__vineta
                      | Presillas pasador.
          
          .row.justify-content-center.m-4
            .col-md-11.col-lg-9
              .row.align-items-end
                .col-lg-6
                  figure.mb-2
                    img(src='@/assets/curso/tema1/Simg16.svg', alt='Sobrepuestas 06')
                  h3 Máquinas que la producen
                  .bg-white.brdBtn.p-4
                    p.mb-0 Planas 2 agujas, máquinas de cadeneta con 2 o más agujas como cerradoras de codo, recubridoras, reportadoras, empretinadoras.
                .col-lg-6.bg-white.brdBtn.p-4
                  p.mb-4 
                    strong Algunas operaciones que se realizan con este tipo de costura
                  ul.lista-ul--color.mb-0
                    li 
                      i.lista-ul__vineta
                      | Pegar vivos o sesgos sobre puestos.
          
          .row.justify-content-center.m-4
            .col-md-11.col-lg-9
              .row.align-items-end
                .col-lg-6
                  figure.mb-2
                    img(src='@/assets/curso/tema1/Simg12.svg', alt='Sobrepuestas 02')
                  h3 Máquinas que la producen
                  .bg-white.brdBtn.p-4
                    p.mb-0 Planas en una o 2 agujas.
                .col-lg-6.bg-white.brdBtn.p-4
                  p.mb-4 
                    strong Algunas operaciones que se realizan con este tipo de costura                  
                  ul.lista-ul--color.mb-0
                    li 
                      i.lista-ul__vineta
                      | Pegar bolsillo.
                    li.mb-0
                      i.lista-ul__vineta
                      | Embonar algunas operaciones.
          
          .row.justify-content-center.m-4
            .col-md-11.col-lg-9
              .row.align-items-end
                .col-lg-6
                  figure.mb-2
                    img(src='@/assets/curso/tema1/Simg13.svg', alt='Sobrepuestas 03')
                  h3 Máquinas que la producen
                  .bg-white.brdBtn.p-4
                    p.mb-0 Plana 1 aguja o fileteadora.
                .col-lg-6.bg-white.brdBtn.p-4
                  p.mb-4 
                    strong Algunas operaciones que se realizan con este tipo de costura                  
                  ul.lista-ul--color.mb-0
                    li 
                      i.lista-ul__vineta
                      | Embonar algunas operaciones.
                    li.mb-0
                      i.lista-ul__vineta
                      | Pegar aletilla con la ayuda guía.
          
          .row.justify-content-center.m-4
            .col-md-11.col-lg-9
              .row.align-items-end
                .col-lg-6
                  figure.mb-2
                    img(src='@/assets/curso/tema1/Simg14.svg', alt='Sobrepuestas 04')
                  h3 Máquinas que la producen
                  .bg-white.brdBtn.p-4
                    p.mb-0 Plana 1 aguja o fileteadora.
                .col-lg-6.bg-white.brdBtn.p-4
                  p.mb-4 
                    strong Algunas operaciones que se realizan con este tipo de costura                  
                  ul.lista-ul--color.mb-0
                    li.mb-0 
                      i.lista-ul__vineta
                      | Cuando se unen primero las piezas y luego se voltean para asentarlas como cerrar y asentar tapas y pegar y asentar aletilla al delantero o pegar bolsillo delantero y luego asentarlo (también se conoce como entalegar o embonar).
          
          .row.justify-content-center.m-4
            .col-md-11.col-lg-9
              .row.align-items-end
                .col-lg-6
                  figure.mb-2
                    img(src='@/assets/curso/tema1/Simg15.svg', alt='Sobrepuestas 05')
                  h3 Máquinas que la producen
                  .bg-white.brdBtn.p-4
                    p.mb-0 Plana 1 o 2 agujas, máquinas de cadeneta con 1 o más agujas.
                .col-lg-6.bg-white.brdBtn.p-4
                  p.mb-4 
                    strong Algunas operaciones que se realizan con este tipo de costura                  
                  ul.lista-ul--color.mb-0
                    li 
                      i.lista-ul__vineta
                      | Para dobladillar cargaderas de overol.
                    li.mb-0
                      i.lista-ul__vineta
                      | Boca de bolsillo delantero con el forro en una sola operación con guía.
      
      .py-4.py-md-5.BG01.pb-5(titulo="Envivadas")      
        SlyderA
          .row.justify-content-center.m-4
            .col-md-11.col-lg-9
              .row.align-items-end
                .col-lg-6
                  figure.mb-2
                    img(src='@/assets/curso/tema1/Simg21.svg', alt='Sobrepuestas 01')
                  h3 Máquinas que la producen
                  .bg-white.brdBtn.p-4
                    p.mb-0 Plana o cadeneta 1 o más agujas. 
                .col-lg-6.bg-white.brdBtn.p-4
                  p.mb-4 
                    strong Algunas operaciones que se realizan con este tipo de costura
                  ul.lista-ul--color.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      | Sesgar cuando el sesgo no lleva dobladillo por encima ni por debajo.
          
          .row.justify-content-center.m-4
            .col-md-11.col-lg-9
              .row.align-items-end
                .col-lg-6
                  figure.mb-2
                    img(src='@/assets/curso/tema1/Simg22.svg', alt='Sobrepuestas 02')
                  h3 Máquinas que la producen
                  .bg-white.brdBtn.p-4
                    p.mb-0 Recubridora (general mente) o máquina de 2 agujas.
                .col-lg-6.bg-white.brdBtn.p-4
                  p.mb-4 
                    strong Algunas operaciones que se realizan con este tipo de costura
                  ul.lista-ul--color.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      | Sesgar camisetas, blusas, o en general prendas con dobladillo por el derecho solamente.
          
          .row.justify-content-center.m-4
            .col-md-11.col-lg-9
              .row.align-items-end
                .col-lg-6
                  figure.mb-2
                    img(src='@/assets/curso/tema1/Simg23.svg', alt='Sobrepuestas 03')
                  h3 Máquinas que la producen
                  .bg-white.brdBtn.p-4
                    p.mb-0 Plana 1 aguja o cadeneta.
                .col-lg-6.bg-white.brdBtn.p-4
                  p.mb-4 
                    strong Algunas operaciones que se realizan con este tipo de costura
                  ul.lista-ul--color.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      | Sesgar o empretinar con 1 sola aguja.
          
          .row.justify-content-center.m-4
            .col-md-11.col-lg-9
              .row.align-items-end
                .col-lg-6
                  figure.mb-2
                    img(src='@/assets/curso/tema1/Simg24.svg', alt='Sobrepuestas 04')
                  h3 Máquinas que la producen
                  .bg-white.brdBtn.p-4
                    p.mb-0 Plana 2 agujas, máquinas de cadeneta como resortadoras, recubridoras, empretinadoras.
                .col-lg-6.bg-white.brdBtn.p-4
                  p.mb-4 
                    strong Algunas operaciones que se realizan con este tipo de costura
                  ul.lista-ul--color.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      | Empretinar o sesgar con 2 o más agujas.
          
          .row.justify-content-center.m-4
            .col-md-11.col-lg-9
              .row.align-items-end
                .col-lg-6
                  figure.mb-2
                    img(src='@/assets/curso/tema1/Simg25.svg', alt='Sobrepuestas 05')
                  h3 Máquinas que la producen
                  .bg-white.brdBtn.p-4
                    p.mb-0 Plana 1 aguja o cadeneta 1 aguja o combinaciones de fileteadora sin puntada de seguridad con plana o cadeneta.
                .col-lg-6.bg-white.brdBtn.p-4
                  p.mb-4 
                    strong Algunas operaciones que se realizan con este tipo de costura
                  ul.lista-ul--color.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      | Sesgar o empretinar cuando las pestañas o márgenes de costura no son iguales por los dos lados, se hace en dos operaciones.
          
          .row.justify-content-center.m-4
            .col-md-11.col-lg-9
              .row.align-items-end
                .col-lg-6
                  figure.mb-2
                    img(src='@/assets/curso/tema1/Simg25.svg', alt='Sobrepuestas 05')
                  h3 Máquinas que la producen
                  .bg-white.brdBtn.p-4
                    p.mb-0 Plana 1 aguja o cadeneta 1 aguja o combinaciones de fileteadora sin puntada de seguridad con plana o cadeneta.
                .col-lg-6.bg-white.brdBtn.p-4
                  p.mb-4 
                    strong Algunas operaciones que se realizan con este tipo de costura
                  ul.lista-ul--color.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      | Sesgar o pretinar en plana, se pega el sesgo o la pretina y luego se asienta.

      .py-4.py-md-5.BG03.pb-5(titulo="Engarzadas ")      
        SlyderA
          .row.justify-content-center.m-4
            .col-md-11.col-lg-9
              .row.align-items-end
                .col-lg-6
                  figure.mb-2
                    img(src='@/assets/curso/tema1/Simg31.svg', alt='Sobrepuestas 01')
                  h3 Máquinas que la producen
                  .bg-white.brdBtn.p-4
                    p.mb-0 Plana o cadeneta. 
                .col-lg-6.bg-white.brdBtn.p-4
                  p.mb-4 
                    strong Algunas operaciones que se realizan con este tipo de costura
                  ul.lista-ul--color.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      | Unir piezas de material que no están sobrepuestas en su extensión sino en el borde únicamente.
          
          .row.justify-content-center.m-4
            .col-md-11.col-lg-9
              .row.align-items-end
                .col-lg-6
                  figure.mb-2
                    img(src='@/assets/curso/tema1/Simg32.svg', alt='Sobrepuestas 02')
                  h3 Máquinas que la producen
                  .bg-white.brdBtn.p-4
                    p.mb-0 Plana 2 agujas, máquinas de cadeneta con más de 2 agujas. 
                .col-lg-6.bg-white.brdBtn.p-4
                  p.mb-4 
                    strong Algunas operaciones que se realizan con este tipo de costura
                  ul.lista-ul--color.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      | Pretina de sándwich o doble, vivos o sesgos dobles.
          
          .row.justify-content-center.m-4
            .col-md-11.col-lg-9
              .row.align-items-end
                .col-lg-6
                  figure.mb-2
                    img(src='@/assets/curso/tema1/Simg33.svg', alt='Sobrepuestas 03')
                  h3 Máquinas que la producen
                  .bg-white.brdBtn.p-4
                    p.mb-0 Plana 2 agujas, máquinas de cadeneta con más de 2 agujas.
                .col-lg-6.bg-white.brdBtn.p-4
                  p.mb-4 
                    strong Algunas operaciones que se realizan con este tipo de costura
                  ul.lista-ul--color.mb-4
                    li
                      i.lista-ul__vineta
                      | Cerrar entrepierna o costados.
                    li
                      i.lista-ul__vineta
                      | Encotillar.
                    li
                      i.lista-ul__vineta
                      | Armar tiro trasero.
                    li
                      i.lista-ul__vineta
                      | Unir almilla.
                  p.mb-0 General mente en cerradora de codo o también en dos agujas con guía.
          
          .row.justify-content-center.m-4
            .col-md-11.col-lg-9
              .row.align-items-end
                .col-lg-6
                  figure.mb-2
                    img(src='@/assets/curso/tema1/Simg34.svg', alt='Sobrepuestas 04')
                  h3 Máquinas que la producen
                  .bg-white.brdBtn.p-4
                    p.mb-0 Plana o cadeneta.
                .col-lg-6.bg-white.brdBtn.p-4
                  p.mb-4 
                    strong Algunas operaciones que se realizan con este tipo de costura
                  ul.lista-ul--color.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      | Embonar o entalegar, hombros, almillas, generalmente con guía.

          .row.justify-content-center.m-4
            .col-md-11.col-lg-9
              .row.align-items-end
                .col-lg-6
                  figure.mb-2
                    img(src='@/assets/curso/tema1/Simg35.svg', alt='Sobrepuestas 05')
                  h3 Plana 2 agujas o cadenetas con 2 o más agujas.
                  .bg-white.brdBtn.p-4
                    p.mb-0 Plana 2 agujas o cadenetas con 2 o más agujas.
                .col-lg-6.bg-white.brdBtn.p-4
                  p.mb-4 
                    strong Algunas operaciones que se realizan con este tipo de costura
                  ul.lista-ul--color.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      | Envivar o sesgar por un solo lado, algunos tipos de pretinas anatómicas y perillas de camisas.
          
          .row.justify-content-center.m-4
            .col-md-11.col-lg-9
              .row.align-items-end
                .col-lg-6
                  figure.mb-2
                    img(src='@/assets/curso/tema1/Simg36.svg', alt='Sobrepuestas 06')
                  h3 Plana 2 agujas o cadenetas con 2 o más agujas.
                  .bg-white.brdBtn.p-4
                    p.mb-0 Plana o cadeneta.
                .col-lg-6.bg-white.brdBtn.p-4
                  p.mb-4 
                    strong Algunas operaciones que se realizan con este tipo de costura
                  ul.lista-ul--color.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      | Embonar o entalegar en dos operaciones, casi todas las costuras que van unidas en fileteadoras y luego asentadas en plana, dos agujas o cadenetas, como asentar costados, hombros, mangas.

      .py-4.py-md-5.BG04.pb-5(titulo="Tope a tope o Canto a canto")
        SlyderA
          .row.justify-content-center.m-4
            .col-md-11.col-lg-9
              .row.align-items-end
                .col-lg-6
                  figure.mb-2
                    img(src='@/assets/curso/tema1/Simg41.svg', alt='Sobrepuestas 01')
                  h3 Máquinas que la producen
                  .bg-white.brdBtn.p-4
                    p.mb-0 Recubridora o #[em flatseamer].
                .col-lg-6.bg-white.brdBtn.p-4
                  p.mb-4 
                    strong Algunas operaciones que se realizan con este tipo de costura
                  ul.lista-ul--color.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      | Unir piezas por el borde como pretinas, sesgos, algunas piezas de la ropa interior.
          
          .row.justify-content-center.m-4
            .col-md-11.col-lg-9
              .row.align-items-end
                .col-lg-6
                  figure.mb-2
                    img(src='@/assets/curso/tema1/Simg42.svg', alt='Sobrepuestas 02')
                  h3 Máquinas que la producen
                  .bg-white.brdBtn.p-4
                    p.mb-0 Fileteadora.
                .col-lg-6.bg-white.brdBtn.p-4
                  p.mb-4 
                    strong Algunas operaciones que se realizan con este tipo de costura
                  ul.lista-ul--color.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      | Para unir pretinas o sesgos se unen en fileteadora con la puntada floja y luego se abren las dos telas en sentidos opuestos.
          
          .row.justify-content-center.m-4
            .col-md-11.col-lg-9
              .row.align-items-end
                .col-lg-6
                  figure.mb-2
                    img(src='@/assets/curso/tema1/Simg43.svg', alt='Sobrepuestas 03')
                  h3 Máquinas que la producen
                  .bg-white.brdBtn.p-4
                    p.mb-0 Zigzag.
                .col-lg-6.bg-white.brdBtn.p-4
                  p.mb-4 
                    strong Algunas operaciones que se realizan con este tipo de costura
                  ul.lista-ul--color.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      | Unir piezas por el borde como pretinas, sesgos, algunas piezas de la ropa interior.
    
    h3(data-aos="fade-left") Los pespuntes:

    p.mb-5(data-aos="fade") Cuando la sucesión de puntadas está hecha sobre un mismo material entrelazado con el mismo (dobladillado) o no, recibe el nombre de pespuntes. Estos apoyan y afirman las costuras internas, lo cual genera a modo visual una apariencia estética, pero estas costuras también generan refuerzo a diversos materiales que necesitan tener una mayor resistencia por la composición de la tela; están clasificados así:

    h2(data-aos="fade-up") Para acabados de orillos o bordes

    .BG01.pb-5(data-aos="zoom-in")
      SlyderA
        .row.justify-content-center.m-4
          .col-md-11.col-lg-9
            .row.align-items-end
              .col-lg-6
                figure.mb-2
                  img(src='@/assets/curso/tema1/Simg51.svg', alt='Sobrepuestas 01')
                h3 Máquinas que la producen
                .bg-white.brdBtn.p-4
                  p.mb-0 Plana o 2 agujas, cadeneta doble, recubridoras.
              .col-lg-6.bg-white.brdBtn.p-4
                p.mb-4 
                  strong Algunas operaciones que se realizan con este tipo de costura
                ul.lista-ul--color.mb-0
                  li
                    i.lista-ul__vineta
                    | Doblar bandas de cuello de camisas.
                  li.mb-0
                    i.lista-ul__vineta
                    | Doblar puños, ruedos de camisetas.

        .row.justify-content-center.m-4
          .col-md-11.col-lg-9
            .row.align-items-end
              .col-lg-6
                figure.mb-2
                  img(src='@/assets/curso/tema1/Simg52.svg', alt='Sobrepuestas 02')
                h3 Máquinas que la producen
                .bg-white.brdBtn.p-4
                  p.mb-0 Plana o 2 agujas, cadeneta doble, recubridoras.
              .col-lg-6.bg-white.brdBtn.p-4
                p.mb-4 
                  strong Algunas operaciones que se realizan con este tipo de costura
                ul.lista-ul--color.mb-0
                  li
                    i.lista-ul__vineta
                    | Doblar bandas de cuello de camisas.
                  li.mb-0
                    i.lista-ul__vineta
                    | Doblar puños, ruedos de camisetas.

        .row.justify-content-center.m-4
          .col-md-11.col-lg-9
            .row.align-items-end
              .col-lg-6
                figure.mb-2
                  img(src='@/assets/curso/tema1/Simg53.svg', alt='Sobrepuestas 03')
                h3 Máquinas que la producen
                .bg-white.brdBtn.p-4
                  p.mb-0 Fileteadora.
              .col-lg-6.bg-white.brdBtn.p-4
                p.mb-4 
                  strong Algunas operaciones que se realizan con este tipo de costura
                ul.lista-ul--color.mb-0
                  li.mb-0
                    i.lista-ul__vineta
                    | Filetear aletillas, costados (costuras abiertas).
        
        .row.justify-content-center.m-4
          .col-md-11.col-lg-9
            .row.align-items-end
              .col-lg-6
                figure.mb-2
                  img(src='@/assets/curso/tema1/Simg54.svg', alt='Sobrepuestas 04')
                h3 Plana o cadeneta.
                .bg-white.brdBtn.p-4
                  p.mb-0 Fileteadora.
              .col-lg-6.bg-white.brdBtn.p-4
                p.mb-4 
                  strong Algunas operaciones que se realizan con este tipo de costura
                ul.lista-ul--color.mb-0
                  li.mb-0
                    i.lista-ul__vineta
                    | Resortar encarterando elástico (observar la posición del elástico).
        
        .row.justify-content-center.m-4
          .col-md-11.col-lg-9
            .row.align-items-end
              .col-lg-6
                figure.mb-2
                  img(src='@/assets/curso/tema1/Simg54.svg', alt='Sobrepuestas 04')
                h3 Plana o cadeneta.
                .bg-white.brdBtn.p-4
                  p.mb-0 Fileteadora.
              .col-lg-6.bg-white.brdBtn.p-4
                p.mb-4 
                  strong Algunas operaciones que se realizan con este tipo de costura
                ul.lista-ul--color.mb-0
                  li.mb-0
                    i.lista-ul__vineta
                    | Hacer pasador.
        
        .row.justify-content-center.m-4
          .col-md-11.col-lg-9
            .row.align-items-end
              .col-lg-6
                figure.mb-2
                  img(src='@/assets/curso/tema1/Simg54.svg', alt='Sobrepuestas 04')
                h3 Plana 1 o dos agujas, recubridoras, cadeneta.
                .bg-white.brdBtn.p-4
                  p.mb-0 Fileteadora.
              .col-lg-6.bg-white.brdBtn.p-4
                p.mb-4 
                  strong Algunas operaciones que se realizan con este tipo de costura
                ul.lista-ul--color.mb-0
                  li.mb-0
                    i.lista-ul__vineta
                    | Resortar encarterando elástico.
        
        .row.justify-content-center.m-4
          .col-md-11.col-lg-9
            .row.align-items-end
              .col-lg-6
                figure.mb-2
                  img(src='@/assets/curso/tema1/Simg54.svg', alt='Sobrepuestas 04')
                h3 Plana 1 aguja o fileteadora.
                .bg-white.brdBtn.p-4
                  p.mb-0 Fileteadora.
              .col-lg-6.bg-white.brdBtn.p-4
                p.mb-4 
                  strong Algunas operaciones que se realizan con este tipo de costura
                ul.lista-ul--color.mb-0
                  li.mb-0
                    i.lista-ul__vineta
                    | Hacer tira de espagueti.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
