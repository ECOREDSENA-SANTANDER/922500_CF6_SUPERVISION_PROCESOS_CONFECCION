<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Maquinaria y equipo de procesos de confección
    
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10
        .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-5.mb-4.mb-lg-0
              img(src="@/assets/curso/tema2/img01.svg", alt="Máquinas de confección")
            .col-lg-7
              .bloque-texto-a__texto.p-4
                p.mb-4 En base a las diferentes máquinas y la composición de su estructura, tipo de operación a desarrollar y partes que la conforman, es importante señalar el conjunto de piezas que funcionan por accionamiento mecánico, estas son las siguientes:
                h5.color-texto-rojo Cabezote, brazo, columna y cama.
    
    p.mb-4.text-center La pieza denominada cama es la que cobra vital importancia en el origen de las operaciones más relevantes de un producto a confeccionar, bien sea, por su dificultad, complejidad, tiempo de producción o calidad, entre otros.
    
    .row.align-items-center.justify-content-center.py-4 
      .col-lg-10
      .row.align-items-center.justify-content-center.mb-4
        .col-md-5.mb-5.mb-lg-0(data-aos="flip-up")
          p.mb-5.p-3.fondo-palido Algunos tipos de máquinas pueden modificar la cama e incluso el mueble de la máquina para adaptarse mejor a las condiciones del producto, por esta razón, si se trabaja con prendas de gran volumen podemos encontrar términos como:
          ul.lista-ul--color.mb-0
            li 
              i.fas.fa-car2-side.px-2
              | Máquina sumergida.
            li 
              i.fas.fa-car2-side.px-2
              | Máquina semisumergida.
            li 
              i.fas.fa-car2-side.px-2
              | Máquina no sumergida.
            li 
              i.fas.fa-car2-side.px-2
              | Cama plana.
            li 
              i.fas.fa-car2-side.px-2
              | Cama cilíndrica o de brazo.
            li 
              i.fas.fa-car2-side.px-2
              | Cama cilíndrica - transversal o de codo.
            li 
              i.fas.fa-car2-side.px-2
              | Cama poste.
            li 
              i.fas.fa-car2-side.px-2
              | Cama tipo zócalo. 
        
        .col-md-5(data-aos="fade")
          figure.mb-2
            img(src='@/assets/curso/tema2/img02.png', alt='Máquinas')
      
    p.mb-4.text-center.color-rosadopalido.p-4(data-aos="fade-up") Ampliaremos información de enhebre de máquinas y sus tipos de puntadas en los siguientes documentos:

      .row.align-items-center.justify-content-center(data-aos="flip-up")
        .col-lg-10 
          .row.align-items-center.justify-content-center
            .col-lg-5.p-4
              img(src='@/assets/curso/tema2/img03.png', alt='')
            .col-lg-5
              .tarjeta.tarjeta-descarga.color-secundario.p-3.mb-5
                .row.justify-content-around.align-items-center
                  .col-3.col-sm-2.col-lg-2
                    img(src="@/assets/curso/tema2/documento.svg")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        p.text-small Anexo. Enhebrado y calibración máquina plana.
                      .col-sm-auto
                        a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo1_Enhebrado_calibracion_maquina_plana.pdf')" target="_blank")
                          span Descargas
                          i.fas.fa-download
                  
              .tarjeta.tarjeta-descarga.color-secundario.p-3.mb-5
                .row.justify-content-around.align-items-center
                  .col-3.col-sm-2.col-lg-2
                    img(src="@/assets/curso/tema2/documento.svg")  
                  .col 
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        p.text-small Anexo. Enhebrado fileteadora.
                      .col-sm-auto
                        a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo2_Enhebrado_fileteadora.pdf')" target="_blank")
                          span Descargas
                          i.fas.fa-download

              .tarjeta.tarjeta-descarga.color-secundario.p-3.mb-5
                .row.justify-content-around.align-items-center
                  .col-3.col-sm-2.col-lg-2
                    img(src="@/assets/curso/tema2/documento.svg")  
                  .col 
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        p.text-small Anexo. Enhebrado máquina recubridora.
                      .col-sm-auto
                        a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo3_Enhebrado_maquina_recubridora.pdf')" target="_blank")
                          span Descargas
                          i.fas.fa-download


</template>

<script>
export default {
  name: 'Tema2',
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
