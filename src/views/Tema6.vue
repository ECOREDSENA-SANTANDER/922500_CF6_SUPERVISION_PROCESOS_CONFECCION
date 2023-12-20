<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 6
      h1 Tipos de puntadas y costuras
    
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-11
        .bloque-texto-g.color-acento-contenido.BG03.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.BGpostLeft(
            :style="{'background-image': `url(${require('@/assets/curso/tema6/img01.png')})`}"
          )
          .bloque-texto-g__texto.d-grid.p-4
            p.mb-4 En el proceso de confección se identifican los diversos tipos de puntadas y costuras que componen el resultado final, a partir de estos elementos se perciben las características que identificarán la composición operativa de la prenda.
            .row.d-flex.justify-content-center(data-aos="flip-up")
              .col-lg-8
                a.anexo(:href="obtenerLink('/downloads/Anexo8_Tipos_puntadas_costuras.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p #[strong Anexo.] Tipos de puntadas y costuras.

</template>

<script>
export default {
  name: 'Tema6',
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
