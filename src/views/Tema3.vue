<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Operatividad para confección de prendas
    
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10
        .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-5.mb-4.mb-lg-0
              img(src="@/assets/curso/tema3/img01.svg", alt="Máquinas de confección")
            .col-lg-7
              .bloque-texto-a__texto.p-4
                p.mb-4 Las normas establecen las especificaciones técnicas necesarias para cada producto y describen cómo deben ser implementadas a lo largo del desarrollo del mismo, con el objetivo de cumplir con estándares y especificaciones que aseguren parámetros de calidad. Estos parámetros abarcan desde la presentación hasta la calidad y estética de las prendas o artículos producidos.
        
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10
        .row.justify-content-center(data-aos="fade-left")
          .col-lg-6
            p.mb-4 En el cuadernillo podrá conocer las normas asociadas a la calidad en los procesos de confección.
  
            .tarjeta.tarjeta-descarga.color-secundario.p-3.mb-5
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2
                  img(src="@/assets/curso/tema2/documento.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p.color-textoazul.mb-1 Anexo. Calidad en la confección.
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/Anexo4_Calidad_confeccion.pdf')" target="_blank")
                        span Descargas
                        i.fas.fa-download
          .col-lg-4
            img(src='@/assets/curso/tema3/img002.svg', alt='Puntadas por pulgada (PPP)')      
    
    .mb-4.d-flex.py-4
      .d-flex.flex-wrap.align-items-center.pe-4.fondo-rojo.p-2.px-4
        img.col-lg.d-none.d-lg-flex(src='@/assets/curso/tema1/boton.svg' style="max-width: 50px; left: 43px; position: absolute" data-aos="fade-left")
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") Puntadas por pulgada

    p.mb-5 Es crucial, al definir las especificaciones de una prenda, especificar la cantidad adecuada de puntadas por pulgada (PPP) requerida para su proceso de costura. La importancia de esta medida radica en su impacto en diversos aspectos tales como:

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-up")
      
      .col-8.col-lg-5.p-3
        figure
          img(src='@/assets/curso/tema3/img05.png', alt='Puntadas por pulgada (PPP)')
      .col-lg-7
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta color-rosadopalido")
          div(titulo="Resistencia de la costura")
            p Generalmente, entre más puntadas por pulgada, mayor es la resistencia de la costura. Existen algunos casos raros donde agregar puntadas por pulgada puede causar daño a la tela de forma que la costura es debilitada, como sea, esto solamente pasa en telas específicas que pueden ser fácilmente dañadas por excesivas penetraciones de la aguja.
          
          div(titulo="Apariencia de la puntada")
            p Cada tipo de puntada tiene un aspecto característico de acuerdo a la manera que se emplee. Las costuras se definen según el tipo de puntada y se emplean según las características de las máquinas a ejecutar.
          
          div(titulo="Elasticidad de la costura en telas elásticas")
            p La costura en telas elásticas se determina por el entrelazado de uno o más hilos, a través de una secuencia de movimientos ejecutados por partes específicas de la máquina que generan las puntadas. Las máquinas de coser clasifican las puntadas dentro de un rango de elasticidad, en el cual es crucial considerar la composición de la tela y el nivel de elasticidad que ésta presenta.
      
    .row.justify-content-center.align-items-center
      .col-lg-10
        .row 
          p.mb-4 Ahora bien, el tamaño de la puntada debe ser medido contando la cantidad de entradas de la aguja en la tela dentro de una pulgada.
          .col-lg-5
            .fondo-palido.p-4.brdFull.mb-5(data-aos="flip-up")
              p.mb-0 Existen diferentes contadores de puntadas que hacen esta medida fácil. De igual manera, existe la opción de  colocar una cinta métrica enseguida del pespunte y hacer la misma función en 2,54 cm que es el equivalente a una pulgada.
            p.mb-5 Tal como se presenta en la imagen, la costura cuenta con 9 puntadas por pulgada (PPP).
            .titulo-sexto.color-acento-contenido
              h5 Figura 1
              span Imagen de 9 puntadas por pulgada (PPP).
            figure
              img(src='@/assets/curso/tema3/img04.svg', alt='La imagen muestra una representación de 9 puntadas por pulgada (PPP). En el gráfico, se observa una línea discontinua con 9 segmentos en el espacio de 1 pulgada, que equivale a 2.54 cm. Dos líneas verticales rojas delimitan la longitud de una pulgada')
      
          .col-lg-7(data-aos="fade")
            img(src='@/assets/curso/tema3/img05.svg', alt='Puntadas por pulgada (PPP)')

</template>

<script>
export default {
  name: 'Tema3',
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
