<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Tipos de puntadas y costuras
    
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10
        .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-5.mb-4.mb-lg-0
              img(src="@/assets/curso/tema6/img01.svg", alt="Máquinas de confección")
            .col-lg-7
              .bloque-texto-a__texto.p-4
                p.mb-4 En el proceso de confección se identifican los diversos tipos de puntadas y costuras que componen el resultado final, a partir de estos elementos se perciben las características que identificarán la composición operativa de la prenda.
      .row.justify-content-center(data-aos="fade-left") 
          .col-sm-12.col-lg-6
            .tarjeta.tarjeta-descarga.color-secundario.p-3.mb-5
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img(src="@/assets/curso/tema2/documento.svg")
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0
                          p.color-textoazul.mb-1 Anexo. Tipos de puntadas y costuras.
                        .col-sm-auto
                          a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo8_Tipos_puntadas_costuras.pdf')" target="_blank")
                            span Descargas
                            i.fas.fa-download
 

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
