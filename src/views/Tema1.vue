<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Máquinas de confección
    
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10
        .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              img(src="@/assets/curso/tema1/001.svg", alt="Máquinas de confección")
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Con el fin de reconocer e identificar las partes y tipos de máquinas y sus usos, es importante entender los conceptos básicos y terminología relacionada con las funciones y generaciones de maquinaria. Esto proporcionará los conocimientos de relación entre insumos, maquinaria y ajustes para facilitar el desarrollo operativo del personal que manipula la maquinaria y las prendas a fabricar.

    p.mb-4 De esta forma, vamos a explorar los siguientes elementos:

    TabsA.color-acento-botones.mb-5(data-aos="fade-up")
      .tarjeta.color-rosadopalido.p-4(titulo="Costura")
        .row.p-4 
          .col.lg-3
            h4.text-dark Costura
            p.text-dark.mb-0 Es el entrelazamiento y/o unión entre dos o más hilos puestos en recorrido de una o más telas.
          .col-lg-8
            figure
              img(src='@/assets/curso/tema1/cotura.png', alt='Características')
        
      .tarjeta.color-rosadopalido.p-4(titulo="Características")
        .row.p-4 
          .col.lg-3
            h3.text-dark Características
            p.text-dark.mb-0 Están estrechamente relacionadas con el tipo de puntada, material puesto para coser y la relación entre elementos (hilos, tela y ajuste de máquina).
          figure.pst02
            img(src='@/assets/curso/tema1/02.png', alt='Características')
      
      .tarjeta.color-rosadopalido.p-4(titulo="Apariencia")
        .row.p-4 
          .col.lg-3
            h3.text-dark Apariencia
            p.text-dark.mb-0 Es la presentación final de la costura, donde se evalúa que la puntada y la lazada no quedan con defectos.
          figure.pst02
            img(src='@/assets/curso/tema1/03.png', alt='Apariencia')
      
      .tarjeta.color-rosadopalido.p-4(titulo="Seguridad")
        .row.color-rosadopalido.p-4 
          .col.lg-3
            h3.text-dark Seguridad
            p.text-dark.mb-0 Se refiere a la capacidad de la puntada para desarmarse o deshilarse el material.
          figure.pst02
            img(src='@/assets/curso/tema1/04.png', alt='Seguridad')
      
      .tarjeta.color-rosadopalido.p-4(titulo="Confort")
        .row.color-rosadopalido.p-4 
          .col.lg-3
            h3.text-dark Confort
            p.text-dark.mb-0 Es la comodidad y elongación que brinda la costura en la tela  cuando está expuesta al contacto con la piel y al momento de uso de la prenda.
          figure.pst02
            img(src='@/assets/curso/tema1/05.png', alt='Confort')

      .tarjeta.color-rosadopalido.p-4(titulo="Resistencia")
        .row.color-rosadopalido.p-4 
          .col.lg-3
            h3.text-dark Resistencia
            p.text-dark.mb-0 Es la capacidad que tiene la costura de soportar refuerzos y cargas en la tela, sin reventarse o dañarse.
          figure.pst02
            img(src='@/assets/curso/tema1/06.png', alt='Clasificación')
      
      .tarjeta.color-rosadopalido.p-4(titulo="Costura")
        .row.color-rosadopalido.p-4 
          .col.lg-3
            h3.text-dark Clasificación
            p.text-dark.mb-0 Según la forma en que se entrelazan los hilos, el número de agujas, hileras de puntadas, el lugar que ocupan en orden dentro del grupo y la cantidad de costuras previas que lleva, las costuras están clasificadas en 4 grupos: sobrepuestas, envivadas, engarzadas y tope a tope también llamadas canto a canto.
          figure.pst02
            img(src='@/assets/curso/tema1/07.png', alt='Clasificación')
    
    p.mb-4(data-aos="fade-up") A continuación, se presentan las costuras que producen los diferentes tipos de máquinas y operaciones que se realizan con las mismas, para ello debe seguir el cursor hacia la derecha tanto en los títulos como en la flecha que indica más contenido dentro de cada uno.
    h3.color-texto-rojo.py-4 Costuras sobrepuestas

    .row.align-items-center
      SlyderA(tipo="b").fondo1.p-4
        .row.align-items-center
          .col-md-6.p-4
            figure
              img(src='@/assets/curso/tema1/001.png', alt='')
          .col-md-6.p-4
            h5.py-4 Máquinas que la producen
            p Planas 2 agujas, máquinas de cadeneta con 2 o más agujas como cerradoras de codo, recubridoras, reportadoras, empretinadoras.
            h5.py-4 Algunas operaciones que se realizan con este tipo de costura
            p Pegar vivos o sesgos sobre puestos. 
        
        .row.align-items-center
          .col-md-6.p-4
            figure
              img(src='@/assets/curso/tema1/002.png', alt='')
          .col-md-6.p-4
            h5.py-4 Máquinas que la producen
            p Planas 1 aguja, fileteadoras con puntada de seguridad o sin ella siempre que estén cosiendo en 2 o más telas, recubridoras, máquinas de zigzag.
            h5 Algunas operaciones que se realizan con este tipo de costura
            ul.lista-ul--color
              li
                i.fas.fa-car-side.px-2
                | Cuadrar bolsillos delanteros. 
              li
                i.fas.fa-car-side.px-2
                | Cerrar costados o entre pierna en fileteadora.
              li
                i.fas.fa-car-side.px-2
                | Recubrir vistas o falsos.
              li
                i.fas.fa-car-side.px-2
                | Cerrar bolsillos.
              li
                i.fas.fa-car-side.px-2
                | Pegar cierre.
              li
                i.fas.fa-car-side.px-2
                | Pegar ribetes.
              li
                i.fas.fa-car-side.px-2
                | Pegar marquillas.
              li
                i.fas.fa-car-side.px-2
                | Fijar bolsillo delantero
              li
                i.fas.fa-car-side.px-2
                | Pegar aletilla.
              li
                i.fas.fa-car-side.px-2
                | Unir tiro delantero cuando uno va embonado
              li
                i.fas.fa-car-side.px-2
                | Presillas pasador.

        .row.align-items-center
          .col-md-6.p-4
            figure
              img(src='@/assets/curso/tema1/003.png', alt='')
          .col-md-6.p-4
            h5.py-4 Máquinas que la producen
            p Planas en una o 2 agujas.
            h5 Algunas operaciones que se realizan con este tipo de costura
            ul.lista-ul--color
              li
                i.fas.fa-car-side.px-2
                | Pegar bolsillo. 
              li
                i.fas.fa-car-side.px-2
                | Embonar algunas operaciones.
      
        .row.align-items-center
          .col-md-6.p-4
            figure
              img(src='@/assets/curso/tema1/004.png', alt='')
          .col-md-6.p-4
            h5.py-4 Máquinas que la producen
            p Plana 1 aguja o fileteadora
            h5 Algunas operaciones que se realizan con este tipo de costura
            ul.lista-ul--color
              i.fas.fa-car-side.px-2
              | Embonar algunas operaciones.
            ul.lista-ul--color
              i.fas.fa-car-side.px-2
              | Pegar aletilla con la ayuda guía.

        .row.align-items-center
          .col-md-6.p-4
            figure
              img(src='@/assets/curso/tema1/005.png', alt='')
          .col-md-6.p-4
            h5.py-4 Máquinas que la producen
            p Plana 1 aguja o fileteadora
            h5 Algunas operaciones que se realizan con este tipo de costura
            p.py-3 Cuando se unen primero las piezas y luego se voltean para asentarlas como cerrar y asentar tapas y pegar y asentar aletilla al delantero o pegar bolsillo delantero y luego asentarlo (también se conoce como entalegar o embonar.)
        
        .row.align-items-center
          .col-md-6.p-4
            figure
              img(src='@/assets/curso/tema1/006.png', alt='')
          .col-md-6.p-4
            h5.py-4 Máquinas que la producen
            p Plana 1 o 2 agujas, máquinas de cadeneta con 1 o más agujas.
            h5 Algunas operaciones que se realizan con este tipo de costura
            ul.lista-ul--color
              i.fas.fa-car-side.px-2
              | Para dobladillar cargaderas de overol.
            ul.lista-ul--color
              i.fas.fa-car-side.px-2
              | Boca de bolsillo delantero con el forro en una sola operación con guía.
      
      h3.color-texto-rojo.py-4 Envivadas
      
      AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta color-rosadopalido")
        .row(titulo="Envivada 1")
          .col-md-6
            figure
              img(src='@/assets/curso/tema1/1.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h5.p-4 Máquinas que la producen
            p.px-4 Plana o cadeneta 1 o más agujas.
            h5.p-4 Algunas operaciones que se realizan con este tipo de costura
            p.px-4 Sesgar cuando el sesgo no lleva dobladillo por encima ni por debajo.
        .row(titulo="Envivada 2")
          .col-md-6
            figure
              img(src='@/assets/curso/tema1/2.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h5.p-4 Máquinas que la producen
            p.px-4 Recubridora (general mente) o máquina de 2 agujas.
            h5.p-4 Algunas operaciones que se realizan con este tipo de costura
            p.px-4 Sesgar camisetas, blusas, o en general prendas con dobladillo por el derecho solamente.
        .row(titulo="Envivada 3")
          .col-md-6
            figure
              img(src='@/assets/curso/tema1/3.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h5.p-4 Máquinas que la producen
            p.px-4 Plana 1 aguja o cadeneta.
            h5.p-4 Algunas operaciones que se realizan con este tipo de costura
            p.px-4 Sesgar o empretinar con 1 sola aguja.
        .row(titulo="Envivada 4")
          .col-md-6
            figure
              img(src='@/assets/curso/tema1/4.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h5.p-4 Máquinas que la producen
            p.px-4 Plana 2 agujas, máquinas de cadeneta como resortadoras, recubridoras, empretinadoras.
            h5.p-4 Algunas operaciones que se realizan con este tipo de costura
            p.px-4 Empretinar o sesgar con 2 o más agujas.
        .row(titulo="Envivada 5")
          .col-md-6
            figure
              img(src='@/assets/curso/tema1/5.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h5.p-4 Máquinas que la producen
            p.px-4 Plana 1 aguja o cadeneta 1 aguja o combinaciones de fileteadora sin puntada de seguridad con plana o cadeneta.
            h5.p-4 Algunas operaciones que se realizan con este tipo de costura
            p.px-4 Sesgar o empretinar cuando las pestañas o márgenes de costura no son iguales por los dos lados, se hace en dos operaciones.
        .row(titulo="Envivada 6")
          .col-md-6
            figure
              img(src='@/assets/curso/tema1/6.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h5.p-4 Máquinas que la producen
            p.px-4 Plana 1 aguja o cadeneta 1 aguja o combinaciones de fileteadora sin puntada de seguridad con plana o cadeneta.
            h5.p-4 Algunas operaciones que se realizan con este tipo de costura
            p.px-4 Sesgar o pretinar en plana, se pega el sesgo o la pretina y luego se asienta.

      h3.color-texto-rojo.py-4 Engarzadas

      .row.align-items-center
        SlyderA(tipo="b").fondo1.p-4
          .row.align-items-center
            .col-md-6.p-4
              figure
                img(src='@/assets/curso/tema1/slyder201.png', alt='')
            .col-md-6.p-4
              h5.py-4 Máquinas que la producen
              p Plana o cadeneta.
              h5.py-4 Algunas operaciones que se realizan con este tipo de costura
              p Unir piezas de material que no están sobrepuestas en su extensión sino en el borde únicamente. 
          
          .row.align-items-center
            .col-md-6.p-4
              figure
                img(src='@/assets/curso/tema1/slyder202.png', alt='')
            .col-md-6.p-4
              h5.py-4 Máquinas que la producen
              p Plana 2 agujas, máquinas de cadeneta con más de 2 agujas.
              h5.py-4 Algunas operaciones que se realizan con este tipo de costura
              p Pretina de sándwich o doble, vivos o sesgos dobles.
             
          .row.align-items-center
            .col-md-6.p-4
              figure
                img(src='@/assets/curso/tema1/slyder203.png', alt='')
            .col-md-6.p-4
              h5.py-4 Máquinas que la producen
              p Plana 2 agujas, máquinas de cadeneta con más de 2 agujas.
              h5 Algunas operaciones que se realizan con este tipo de costura
              ul.lista-ul--color
                i.fas.fa-car-side.px-2
                | Cerrar entrepierna o costados. 
              ul.lista-ul--color
                i.fas.fa-car-side.px-2
                | Encotillar.
              ul.lista-ul--color
                i.fas.fa-car-side.px-2
                | Armar tiro trasero.
              ul.lista-ul--color
                i.fas.fa-car-side.px-2
                | Unir almilla. 
              p Generalmente en cerradora de codo o también en dos agujas con guía.
        
          .row.align-items-center
            .col-md-6.p-4
              figure
                img(src='@/assets/curso/tema1/slyder204.png', alt='')
            .col-md-6.p-4
              h5.py-4 Máquinas que la producen
              p Plana o cadeneta.
              h5.py-4 Algunas operaciones que se realizan con este tipo de costura
              p Embonar o entalegar, hombros, almillas, generalmente con guía.
              

          .row.align-items-center
            .col-md-6.p-4
              figure
                img(src='@/assets/curso/tema1/slyder205.png', alt='')
            .col-md-6.p-4
              h5.py-4 Máquinas que la producen
              p Plana 2 agujas o cadenetas con 2 o más agujas.
              h5 Algunas operaciones que se realizan con este tipo de costura
              p.py-3 Envivar o sesgar por un solo lado, algunos tipos de pretinas anatómicas y perillas de camisas.
          
          .row.align-items-center
            .col-md-6.p-4
              figure
                img(src='@/assets/curso/tema1/slyder206.png', alt='')
            .col-md-6.p-4
              h5.py-4 Máquinas que la producen
              p Plana o cadeneta.
              h5.py-4 Algunas operaciones que se realizan con este tipo de costura
              p Embonar o entalegar en dos operaciones, casi todas las costuras que van unidas en fileteadoras y luego asentadas en plana, dos agujas o cadenetas, como asentar costados, hombros, mangas.


      h3.color-texto-rojo.py-4 Tope a tope o canto a canto

      TabsC
        .py-3.py-md-4(titulo="Tope a tope o canto a canto 1")
          .row
            .col-md-6
              figure
                img(src='@/assets/curso/tema1/tope1.png', alt='Texto que describa la imagen')
               
            .col-md-6.mb-4.mb-md-0
              h5.py-4 Máquinas que la producen
              p Recubridora o flatseamer.
              h5.py-4 Algunas operaciones que se realizan con este tipo de costura
              p Unir piezas por el borde como pretinas, sesgos, algunas piezas de la ropa interior.
        
        .py-3.py-md-4(titulo="Tope a tope o canto a canto 2")
          .row
            .col-md-6
              figure
                img(src='@/assets/curso/tema1/tope2.png', alt='Texto que describa la imagen')
                
            .col-md-6
              h5.py-4 Máquinas que la producen
              p Fileteadora.
              h5.py-4 Algunas operaciones que se realizan con este tipo de costura
              p Para unir pretinas o sesgos se unen en fileteadora con la puntada floja y luego se abren las dos telas en sentidos opuestos.
          
        .py-3.py-md-4(titulo="Tope a tope o canto a canto 3")
          .row
            .col-md-6
              figure
                img(src='@/assets/curso/tema1/tope3.png', alt='Texto que describa la imagen')
                
            .col-md-6.mb-4.mb-md-0
              h5.py-4 Máquinas que la producen
              p Zigzag
              h5.py-4 Algunas operaciones que se realizan con este tipo de costura
              p Unir piezas por el borde como pretinas, sesgos, algunas piezas de la ropa interior.
         
      .mb-4.d-flex.py-4
        .d-flex.flex-wrap.align-items-center.pe-4.fondo-rojo.p-2.px-4
          img.col-lg.d-none.d-lg-flex(src='@/assets/curso/tema1/boton.svg' style="max-width: 50px; left: 43px; position: absolute" data-aos="fade-left")
          h3.col.px-4.mb-0.text-white(data-aos="fade-right") Los pespuntes
          
      
      .row
        p Se aplica a una secuencia de puntadas realizadas sobre un mismo tejido, ya sea que esté doblado sobre sí mismo (dobladillado) o no. Los pespuntes no solo brindan soporte y fortalecimiento a las costuras internas, mejorando así la estética visual de la prenda, sino que también proporcionan refuerzo adicional a materiales que requieren mayor resistencia debido a su composición textil. Estas costuras se clasifican de la siguiente manera:

        h3.color-texto-rojo.py-4 Para acabados de orillos o bordes

      .row.align-items-center
        SlyderA(tipo="b").fondo1.p-4
          .row.align-items-center
            .col-md-6.p-4
              figure
                img(src='@/assets/curso/tema1/verde1.png', alt='')
            .col-md-6.p-4
              h5.py-4 Máquinas que la producen
              p Plana 1 o 2 agujas, cadeneta con una o más agujas.
              h5.py-4 Algunas operaciones que se realizan con este tipo de costura
              ul.lista-ul--color
                i.fas.fa-car-side.px-2
                | Dobladillar bota de pantalón o jean. 
              ul.lista-ul--color
                i.fas.fa-car-side.px-2
                | Ruedos de camisa.
              ul.lista-ul--color
                i.fas.fa-car-side.px-2
                | Dobladillar bolsillos.
           
          
          .row.align-items-center
            .col-md-6.p-4
              figure
                img(src='@/assets/curso/tema1/verde2.png', alt='')
            .col-md-6.p-4
              h5.py-4 Máquinas que la producen
              p Plana o 2 agujas, cadeneta doble, recubridoras.
              h5.py-4 Algunas operaciones que se realizan con este tipo de costura
              ul.lista-ul--color
                i.fas.fa-car-side.px-2
                | Doblar bandas de cuello de camisas. 
              ul.lista-ul--color
                i.fas.fa-car-side.px-2
                | Doblar puños, ruedos de camisetas.
    
          .row.align-items-center
            .col-md-6.p-4
              figure
                img(src='@/assets/curso/tema1/verde3.png', alt='')
            .col-md-6.p-4
              h5.py-4 Máquinas que la producen
              p Plana o 2 agujas, cadeneta doble, recubridoras.
              h5 Algunas operaciones que se realizan con este tipo de costura
              ul.lista-ul--color
                i.fas.fa-car-side.px-2
                | Doblar bandas de cuello de camisas.
              ul.lista-ul--color
                i.fas.fa-car-side.px-2
                | Doblar puños, ruedos de camisetas.
            
          .row.align-items-center
            .col-md-6.p-4
              figure
                img(src='@/assets/curso/tema1/verde4.png', alt='')
            .col-md-6.p-4
              h5.py-4 Máquinas que la producen
              p Fileteadora
              h5.py-4 Algunas operaciones que se realizan con este tipo de costura
              p Filetear aletillas, costados (costuras abiertas).
              

          .row.align-items-center
            .col-md-6.p-4
              figure
                img(src='@/assets/curso/tema1/verde5.png', alt='')
            .col-md-6.p-4
              h5.py-4 Máquinas que la producen
              p Plana o cadeneta.
              h5 Algunas operaciones que se realizan con este tipo de costura
              p.py-3 Resortar encarterando elástico (revisar la posición del elástico).
          
          .row.align-items-center
            .col-md-6.p-4
              figure
                img(src='@/assets/curso/tema1/verde6.png', alt='')
            .col-md-6.p-4
              h5.py-4 Máquinas que la producen
              p Plana dos agujas, recubridora.
              h5.py-4 Algunas operaciones que se realizan con este tipo de costura
              p Hacer pasador.
          
          .row.align-items-center
            .col-md-6.p-4
              figure
                img(src='@/assets/curso/tema1/verde7.png', alt='')
            .col-md-6.p-4
              h5.py-4 Máquinas que la producen
              p Plana 1 o dos agujas, recubridoras, cadeneta.
              h5 Algunas operaciones que se realizan con este tipo de costura
              p.py-3 Resortar encarterando elástico.
          
          .row.align-items-center
            .col-md-6.p-4
              figure
                img(src='@/assets/curso/tema1/verde8.png', alt='')
            .col-md-6.p-4
              h5.py-4 Máquinas que la producen
              p Plana 1 aguja o fileteadora.
              h5.py-4 Algunas operaciones que se realizan con este tipo de costura
              p Hacer tira de espagueti.
    
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
