<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Aditamentos
    
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-11
        .bloque-texto-g.color-acento-contenido.BG01.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img.BGpostLeft(
            :style="{'background-image': `url(${require('@/assets/curso/tema5/img01.png')})`}"
          )
          .bloque-texto-g__texto.d-grid.p-4
            p.mb-4 Los aditamentos para la confección están catalogados como: fólderes, pies y guías, los cuales proporcionan ayuda en las operaciones de confección, evitan la compra de maquinaria especializada, permiten adecuar maquinas a operaciones especiales y mejoran la calidad y presentación de las costuras. Además, son de fácil instalación en las máquinas y facilitan la manipulación por parte de la persona que las opera.

        .row.align-items-center.justify-content-center(data-aos="flip-up")
          .col-lg-4.mb-4.mb-lg-0
            a.anexo(:href="obtenerLink('/downloads/Anexo5_Guias_folder_aditamentos.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p #[strong Anexo.] Guías folder y aditamentos.
          .col-lg-4.mb-4.mb-lg-0
            a.anexo(:href="obtenerLink('/downloads/Anexo6_Guia_aditamentos_confeccion.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p #[strong Anexo.] Guias, aditamentos para la confección.
          .col-lg-4.mb-4.mb-lg-0
            a.anexo(:href="obtenerLink('/downloads/Anexo7_Aditamentos_maquinas_confeccion.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p #[strong Anexo.] Aditamentos máquinas de confección.

</template>

<script>
export default {
  name: 'Tema5',
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
