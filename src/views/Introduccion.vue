<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-primario
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-5.p-0.bgImg01(data-aos="flip-up")
      .col-lg-7.BG04.p-4
        figure.mt-5.mb-2
          img(src="@/assets/curso/intro/img02.svg", alt="supervisor de confección")
        p.bg-white.p-4.brdBtn En este componente formativo se abordarán temáticas fundamentadas en las fortalezas que debe adquirir un aprendiz como supervisor de confección. Se desarrollan contenidos sobre maquinaria, tipos de puntadas, costuras, agujas y la relación de estas aplicando las normas técnicas velando por la seguridad y conservación del personal que manipula dicha maquinaria, al igual que la seguridad de la misma maquinaria utilizada en los procesos de confección.  



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
