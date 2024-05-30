<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Aditamentos
    
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10
        .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-5.mb-4.mb-lg-0
              img(src="@/assets/curso/tema5/img01.svg", alt="Máquinas de confección")
            .col-lg-7
              .bloque-texto-a__texto.p-4
                p.mb-4 Los aditamentos para la confección están catalogados como: #[em fólderes], pies y guías, los cuales proporcionan ayuda en las operaciones de confección, evitan la compra de maquinaria especializada, permiten adecuar maquinas a operaciones especiales y mejoran la calidad y presentación de las costuras. Además, son de fácil instalación en las máquinas y facilitan la manipulación por parte de la persona que las opera.
        
        p.mb-4 En los documentos encontrados a continuación, detallan guías, #[em fólderes] y aditamentos, su uso y el tipo de costura que estos generan, entre otros:
        
        .row.justify-content-center(data-aos="fade-left") 
          .col-lg-6
            .tarjeta.tarjeta-descarga.color-secundario.p-3.mb-5
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img(src="@/assets/curso/tema2/documento.svg")
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0
                          p.color-textoazul.mb-1 Anexo. Guías #[em folder] y aditamentos.
                        .col-sm-auto
                          a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo5_Guias_folder_aditamentos.pdf')" target="_blank")
                            span Descargas
                            i.fas.fa-download
            .tarjeta.tarjeta-descarga.color-secundario.p-3.mb-5
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img(src="@/assets/curso/tema2/documento.svg")
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0
                          p.color-textoazul.mb-1 Anexo. Guias, aditamentos para la confección.
                        .col-sm-auto
                          a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo6_Guia_aditamentos_confeccion.pdf')" target="_blank")
                            span Descargas
                            i.fas.fa-download
            
            .tarjeta.tarjeta-descarga.color-secundario.p-3.mb-5
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img(src="@/assets/curso/tema2/documento.svg")
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0
                          p.color-textoazul.mb-1 Anexo. Aditamentos máquinas de confección.
                        .col-sm-auto
                          a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo7_Aditamentos_maquinas_confeccion.pdf')" target="_blank")
                            span Descargas
                            i.fas.fa-download
          .col-lg-5.col-9
            img(src="@/assets/curso/tema5/img02.svg")
          .col-lg-11
            img(src="@/assets/curso/tema5/linea.svg")

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
