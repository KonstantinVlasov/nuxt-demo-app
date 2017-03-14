<template lang="pug">
  .app-page
    h1.title Airbus Web App Demo

    .content
      h2 Hello There
      div This is demo application. Checkout other pages please:
      br
      nuxt-link(to="/users") Users Dashboard
      br
      nuxt-link(to="/xml") Import XML
      br
      nuxt-link(to="/technology") Technology Stack
</template>
