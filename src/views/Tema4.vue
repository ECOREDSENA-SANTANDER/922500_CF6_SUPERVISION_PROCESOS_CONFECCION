<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Agujas
    
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10
        .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-5.mb-4.mb-lg-0
              img(src="@/assets/curso/tema3/img01.svg", alt="Máquinas de confección")
            .col-lg-7
              .bloque-texto-a__texto.p-4
                p.mb-4Las agujas, componentes esenciales en el proceso de costura, se caracterizan por una serie de referencias y especificaciones técnicas que incluyen su clasificación y grosor. A continuación, se ofrecerá una descripción detallada de cada aspecto y la funcionalidad que estas proporcionan para optimizar las operaciones en la confección.
        
    .row 
      p.mb-4 Según el material “Máquina de Coser (2016)”, la aguja se identifica como una herramienta fundamental en la costura, imprescindible en las máquinas de confección. Su función principal es penetrar el material a coser y transportar el hilo, facilitando así la unión de los tejidos.
        .row.justify-content-center(data-aos="fade-left") 
          .col-lg-8
            .BGgt.mb-4(data-aos="flip-up")
              .BG02.p-4.mb-4.brdBtn
                h2.mb-0.text-center Partes de la aguja
          
        .row.d-flex.justify-content-center.fondo2.p-4
          .col-10.col-md-8.col-lg-4
            ImagenInfografica.color-acento-contenido.mb-5

              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema4/img02.svg', alt='Texto que describa la imagen')

              .tarjeta.color-acento-botones.BGesp01.p-3(x="41.8%" y="3.1%")
                .h5.mb-2.text-dark Base
                p.text-dark.mb-0 Es la parte superior de la aguja y tiene forma de cúpula para facilitar el ingreso en la perforación de la barra de aguja.
                
              .tarjeta.color-acento-botones.BGesp01.p-3(x="79.7%" y="29.5%")
                .h5.mb-2.text-dark Cabo
                p.text-dark.mb-0 Es la parte de donde se sujeta la aguja, en ella viene grabado un número que identifica el calibre de la aguja y la insignia o nombre de la casa fabricante de la aguja.
                
              .tarjeta.color-acento-botones.BGesp01.p-3(x="79.7%" y="78.2%")
                .h5.mb-2.text-dark Chaflan
                p.text-dark.mb-0 Es un rebaje que se encuentra en la parte inferior de la hoja, es por ahí donde pasa el tomador de lazada y es como guía para el hilo.
                
              .tarjeta.color-acento-botones.BGesp01.p-3(x="79.7%" y="96.4%")
                .h5.mb-2.text-dark Punta
                p.text-dark.mb-0 Parte encargada de abrir o desplazar el material para que la aguja pueda llevar el hilo al tomador de lazada, además sus formas son variadas como los materiales a coser.        
                
              .tarjeta.color-acento-botones.BGesp01.p-3(x="31%" y="44.9%")
                .h5.mb-2.text-dark Cono
                p.text-dark.mb-0 Es donde el talón se reduce para formar la hoja y tiene forma cónica porque si esa parte toca la tela, pueda continuar abriendo el tejido y no romperlo.
                
              .tarjeta.color-acento-botones.BGesp01.p-3(x="31%" y="69.2%")
                .h5.mb-2.text-dark Ranura larga
                p.text-dark.mb-0 Canal que se encuentra en la hoja de la aguja y se extiende desde el ojo al declive.
                
              .tarjeta.color-acento-botones.BGesp01.p-3(x="31%" y="86.6%")
                .h5.mb-2.text-dark Ojo
                p.text-dark.mb-0 Perforación que tiene una aguja para pasar el hilo y mucho depende su tamaño de acuerdo con el número de la aguja.
        
    .row
      .mb-4.d-flex.py-4
        .d-flex.flex-wrap.align-items-center.pe-4.fondo-rojo.p-2.px-4
          img.col-lg.d-none.d-lg-flex(src='@/assets/curso/tema1/boton.svg' style="max-width: 50px; left: 43px; position: absolute" data-aos="fade-left")
          h3.col.px-4.mb-0.text-white(data-aos="fade-right") Tipos de puntas en las agujas
        
    .row
      p.mb-4 Es posible identificar diversos tipos de puntas de aguja según su estructura y funciones:
      .col-lg-4
        img(src='@/assets/curso/tema4/agujas.png', alt='Texto que describa la imagen')
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeon-rosado" data-aos="slide-up").py-4
          div(titulo="Agujas universales")
            p Tienen una punta redondeada, son utilizadas para coser tejidos de punto, algodón, lino. Se clasifican los grosores finos para telas ligeras y de mayor grosor para telas más pesadas.
          
          div(titulo="Ballpoint o punta de bola")
            p Ideales para coser tejidos de punto, telas con bastante elasticidad. Proporciona seguridad a las fibras ya que al insertarse en la tela solo abre un pequeño poro sin romper las fibras que componen el tejido.
          
          div(titulo="Quilting o aguja para acolchados")
            p Esta aguja tiene una punta afilada y cónica con un eje largo, puede perforar múltiples capas de tela manteniendo unas condiciones de puntadas rectas, perforando capas gruesas sin dañar el tejido.
          
          div(titulo="Sharp o aguja de punta azul")
            p Punta extremadamente fina, esta aguja es ideal para hacer pespuntes en telas delicadas, como seda o microfibras.
    
    p.mb-4 En la figura 2 de puede apreciar la diferencia entre cada una de las puntas de las agujas.

    .titulo-sexto.color-acento-contenido
      h5 Fiigura 2
      span Tipos de puntas de agujas
    
    .color-verde.p-4(data-aos="fade")
      h2.mb-0.text-center ¿Qué punta de aguja necesito?

    .row.justify-content-center.mb-2
      .col-6.col-md-4.col-lg-2.mb-4.mb-lg-0.d-flex
        .BGgt.d-flex.flex-column.justify-content-between(data-aos="slide-up")
          .pb-4.px-4
            figure.mb-4
              img.w-75.mx-auto(src='@/assets/curso/tema4/img03.svg', alt='SPI')
            h4.text-center Fina
            h3.text-center SPI
            p.text-center.mb-0 Se suele usar para tejidos gruesos ya que puede perforarlos, logrando así unas puntadas precisas.
          .BGgt2.p-4
            p.text-center.mb-0 Ej.: gorras, correas,...
      
      .col-6.col-md-4.col-lg-2.mb-4.mb-lg-0.d-flex
        .agujas-verdes.d-flex.flex-column.justify-content-between(data-aos="slide-up")
          .pb-4.px-4
            figure.mb-4
              img.w-75.mx-auto(src='@/assets/curso/tema4/img04.svg', alt='NB')
            h4.text-center Bola normal
            h3.text-center NB
            p.text-center.mb-0 Recomendada para tejidos con poca elacticidad y no muy gruesos.
          .BGgt2.p-4
            p.text-center.mb-0 Ej.: camisetas, polos, mantas,...
        
      .col-6.col-md-4.col-lg-2.mb-4.mb-lg-0.d-flex
        .BGgt.d-flex.flex-column.justify-content-between(data-aos="slide-up")
          .pb-4.px-4
            figure.mb-4
              img.w-75.mx-auto(src='@/assets/curso/tema4/img05.svg', alt='SPI')
            h4.text-center Bola pequeña
            h3.text-center SES
            p.text-center.mb-0 Para tejidos y géneros de punto, es la que menos daño produce en las fibras.
          .BGgt2.p-4
            p.text-center.mb-0 Ej.: generos de punto en general
        
      .col-6.col-md-4.col-lg-2.mb-4.mb-lg-0.d-flex
        .BGgt.d-flex.flex-column.justify-content-between(data-aos="slide-up")
          .pb-4.px-4
            figure.mb-4
              img.w-75.mx-auto(src='@/assets/curso/tema4/img06.svg', alt='SUK')
            h4.text-center Bola media
            h3.text-center SUK
            p.text-center.mb-0 Para tejidos elásticos o con elastómero, porque no perforan las fibras, las desplazan a un lado.
          .BGgt2.p-4
            p.text-center.mb-0 Ej.: trajes de baño
      
      .col-6.col-md-4.col-lg-2.mb-4.mb-lg-0.d-flex
        .BGgt.d-flex.flex-column.justify-content-between(data-aos="slide-up")
          .pb-4.px-4
            figure.mb-4
              img.w-75.mx-auto(src='@/assets/curso/tema4/img07.svg', alt='SKL')
            h4.text-center Bola especial
            h3.text-center SKL
            p.text-center.mb-0 Para tejidos elásticos o con elastómeros, porque no perforan las fibras, las desplazan a un lado.
          .BGgt2.p-4
            p.text-center.mb-0 Ej.: lenceria
      
      .col-6.col-md-4.col-lg-2.mb-4.mb-lg-0.d-flex
        .BGgt.d-flex.flex-column.justify-content-between(data-aos="slide-up")
          .pb-4.px-4
            figure.mb-4
              img.w-75.mx-auto(src='@/assets/curso/tema4/img08.svg', alt='SKF')
            h4.text-center Bola grande
            h3.text-center SKF
            p.text-center.mb-0 Para tejidos elásticos con estructuras muy gruesas y abiertas
          .BGgt2.p-4
            p.text-center.mb-0 Ej.: jerseys
      
    figcaption #[strong Fuente:] Blog Insumos Textiles. (2021).
    .row
      .mb-4.d-flex.py-4
        .d-flex.flex-wrap.align-items-center.pe-4.fondo-rojo.p-2.px-4
          img.col-lg.d-none.d-lg-flex(src='@/assets/curso/tema1/boton.svg' style="max-width: 50px; left: 43px; position: absolute" data-aos="fade-left")
          h3.col.px-4.mb-0.text-white(data-aos="fade-right") Tipos de en las agujas
    
    p.mb-4 La numeración asignada para el calibre de agujas se puede ver de manera minuciosa en el cabo de la aguja, consta de un numero de dos cifras, donde indica el diámetro o grosor de esta.
    
    .BefCont.mb-5
      .row.justify-content-center.position-relative.p-4
        .col-lg-12
          .row.justify-content-center
            .col-lg-5(data-aos="fade-right")
              figure.mb-4
                img(src='@/assets/curso/tema4/img09.png', alt='Calibres y grosor de agujas')
            .col-lg-7(data-aos="fade-left")
              .titulo-sexto.color-acento-contenido
                h5 Tabla 1
                span Calibres de agujas, consideración de tejido con relación de hilos a utilizar
              
              .minCont1
                table.text-center.bg-white.mb-2.tableS1
                  thead
                    tr
                      th(rowspan='2').color-sistema-texto #[b Tejido]
                      th.BG01s(colspan='2') Hilo
                      th.BG01s(colspan='2') Aguja
                    tr.color-texto-rojo
                      th Tex
                      th Nm
                      th N&uacute;mero Europeo (NM)
                      th N&uacute;mero Americano (Singer)
                  tbody
                    tr
                      td.color-texto-rojo(rowspan='4') #[b Fino]
                      td 14
                      td 200
                      td 55
                      td 6
                    tr
                      td 16
                      td 180
                      td 65
                      td 9
                    tr
                      td 21
                      td 140
                      td 70
                      td 10
                    tr
                      td 30
                      td 80
                      td 80
                      td 12
                    tr
                      td.color-texto-rojo(rowspan='2') #[b Medio]
                      td 45
                      td 60
                      td 90
                      td 14
                    tr
                      td 70
                      td 40
                      td 110
                      td 18
                    tr
                      td.color-texto-rojo(rowspan='3') #[b Grueso]
                      td 90
                      td 30
                      td 120
                      td 19
                    tr
                      td 105
                      td 27
                      td 125
                      td 20
                    tr
                      td 135
                      td 20
                      td 140
                      td 22
                    tr
                      td.color-texto-rojo(rowspan='7') #[b Muy grueso]
                      td 210
                      td 13
                      td 160
                      td 23
                    tr
                      td 270
                      td 10
                      td 180
                      td 24
                    tr
                      td 350
                      td 8
                      td 230
                      td 26
                    tr
                      td 400
                      td 7
                      td 250
                      td 27
                    tr
                      td 500
                      td 6
                      td 280
                      td 28
                    tr
                      td 600
                      td 5
                      td 280
                      td 28
                    tr
                      td 700
                      td 4
                      td 300
                      td 29                    
                    tr
                      td.text-start(colspan='5')
                        | Estos valores recomendados son orientativos y se ofrecen como una referencia de partida, pero deber&aacute;n comprobarse y adaptarse a cada caso.
              
              figcaption #[strong Fuente:] Blog Insumos Textiles. (2021).
    p.mb-4 En los paneles de selección de agujas utilizados para las máquinas recubridoras, fileteadoras (sobre hiladoras) y planas, se destacan dos importantes líneas de información: la resaltada en amarillo, donde se encuentran las referencias de las agujas, y la marcada en naranja, que identifica el calibre de las agujas.        
   
    .row.justify-content-center
      .col-lg-8(data-aos="fade")
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4
          span Referencias de agujas maquina recubridora, maquina fileteadora (sobre hiladora) y maquina plana
        figure.color-rosadopalido
          img(src='@/assets/curso/tema4/img10.png', alt='Referencias de agujas')
              



      




</template>

<script>
export default {
  name: 'Tema4',
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
