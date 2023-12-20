<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 2
      h1 Maquinaria y equipo de procesos de confección
    
    .bloque-texto-g.color-acento-contenido.BG03.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img.BGpostLeft(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img01.png')})`}"
      )
      .bloque-texto-g__texto.wNew.d-grid.p-4
        p.mb-4 En base a las diferentes máquinas y la composición de su estructura, tipo de operación a desarrollar y partes que la conforman, es importante señalar el conjunto de piezas que funcionan por accionamiento mecánico, estas son las siguientes:

        .row.d-flex.align-items-end
          .col-lg-6
            ul.lista-ul--color.mb-0
              li 
                i.lista-ul__vineta
                | Cabezote
              li 
                i.lista-ul__vineta
                | Brazo
          
          .col-lg-6
            ul.lista-ul--color.mb-0
              li 
                i.lista-ul__vineta
                | Cabezote
              li 
                i.lista-ul__vineta
                | Brazo
    
    p.mb-4 La pieza denominada cama es la que cobra vital importancia en el origen de las operaciones más relevantes de un producto a confeccionar, bien sea, por su dificultad, complejidad, tiempo de producción o calidad, entre otros.
    p.mb-4 Algunos tipos de máquinas pueden modificar la cama e incluso el mueble de la máquina para adaptarse mejor a las condiciones del producto, es por ello por lo que si se trabaja con prendas de gran volumen podemos encontrar términos como:

    .row.align-items-center.justify-content-center.mb-4
      .col-md-5.mb-4.mb-lg-0(data-aos="flip-up")
        ul.lista-ul--color.mb-0
          li 
            i.lista-ul__vineta
            | Máquina sumergida
          li 
            i.lista-ul__vineta
            | Máquina semisumergida
          li 
            i.lista-ul__vineta
            | Máquina no sumergida
          li 
            i.lista-ul__vineta
            | Cama plana
          li 
            i.lista-ul__vineta
            | Cama cilíndrica o de brazo
          li 
            i.lista-ul__vineta
            | Cama cilíndrica - transversal o de codo
          li 
            i.lista-ul__vineta
            | Cama poste
          li 
            i.lista-ul__vineta
            | Cama tipo zócalo 
      
      .col-md-5(data-aos="fade")
        figure.mb-2
          img(src='@/assets/curso/tema2/img02.svg', alt='Máquinas')
    
    p.mb-4(data-aos="fade-up") Ampliaremos información de enhebre de máquinas y sus tipos de puntadas en los siguientes documentos:

    .row.align-items-center.justify-content-center(data-aos="flip-up")
      .col-lg-4.mb-4.mb-lg-0
        a.anexo(:href="obtenerLink('/downloads/Anexo1_Enhebrado_calibracion_maquina_plana.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[strong Anexo.] Enhebrado y calibración máquina plana.
      .col-lg-4.mb-4.mb-lg-0
        a.anexo(:href="obtenerLink('/downloads/Anexo2_Enhebrado_fileteadora.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[strong Anexo.] Enhebrado fileteadora.
      .col-lg-4.mb-4.mb-lg-0
        a.anexo(:href="obtenerLink('/downloads/Anexo3_Enhebrado_maquina_recubridora.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[strong Anexo.] Enhebrado máquina recubridora.

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
