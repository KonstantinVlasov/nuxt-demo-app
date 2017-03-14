<template lang="pug">
  .app-menu
    .logo
      img(src="~assets/img/logo.png")
    .title Airbus Web App Demo

    .menu
      nuxt-link.menuitem(to="/" exact) Home
      nuxt-link.menuitem(to="/users") Users Dashboard
      nuxt-link.menuitem(to="/xml") Import XML
      nuxt-link.menuitem(to="/technology") Technology Stack
</template>

<style lang="scss">
  @import "~assets/css/vars";

  .app-menu {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 10;
    width: $menu-width;
    color: white;
    background-image: linear-gradient(45deg, #0e749f 0%, #4eb8cb 100%);
    box-shadow: 1px 0 3px rgba(0,0,0,0.2);

    &>.logo {
      display: block;
      margin: 1rem auto 0.25rem;
      width: 7.5rem;
      overflow: hidden;
      height: 6rem;
    }

    &>.title {
      text-align: center;
      font-size: 14px;
      margin-bottom: 1rem;
    }

    &>.menu {

      &>.menuitem {
        display: block;
        height: 3rem;
        line-height: 3rem;
        padding: 0 2rem;
        color: inherit;
        text-decoration: none;
        transition: 0.4s all ease;

        &.-active, &:hover {
          background-color: rgba(255,255,255,0.1);
        }
      }
    }
  }
</style>
