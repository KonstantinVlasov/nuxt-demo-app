<template lang="pug">
  header.app-header header
</template>

<style lang="scss">
  @import "~assets/css/vars";

  .app-header {
    position: absolute;
    top: 0;
    left: $menu-width;
    right: 0;
    height: $header-height;
    line-height: $header-height;
  }
</style>
