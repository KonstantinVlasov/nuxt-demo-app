<template lang="pug">
  .app
    app-menu
    nuxt
</template>

<script>
import AppHeader from '~components/AppHeader.vue'
import AppMenu from '~components/AppMenu.vue'

export default {
  components: {
    AppHeader,
    AppMenu
  }
}
</script>

<style lang="scss" src="normalize.css"></style>
<style lang="scss" src="~assets/css/public.scss"></style>
