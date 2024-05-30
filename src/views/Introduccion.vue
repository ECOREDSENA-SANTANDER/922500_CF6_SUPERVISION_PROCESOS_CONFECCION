<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-12(data-aos="flip-up")
        img(src="@/assets/curso/intro/osito.png", alt="")
        p.color-verde.p-4 En este componente formativo se abordarán temáticas fundamentadas en las fortalezas que debe adquirir un aprendiz como supervisor de confección. Se desarrollan contenidos sobre maquinaria, tipos de puntadas, costuras, agujas y la relación de estas aplicando las normas técnicas velando por la seguridad y conservación del personal que manipula dicha maquinaria, al igual que la seguridad de la misma maquinaria utilizada en los procesos de confección.  

    .py-4
    figure.mb-5(data-aos="zoom-in-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/_p4uKdCb1HY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Desarrollar operaciones en máquinas de confección



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
