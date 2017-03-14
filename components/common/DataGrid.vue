<template lang="pug">
  table
    thead
      tr
        th(v-for="key in columns") {{ key | capitalize}}

    tbody
      tr(v-for="entry in data")
        td(v-for="key in columns") {{ entry[key] }}
</template>

<script>
  export default {
    name: 'data-grid',
    props: {
      data: Array,
      columns: Array
    },
    filters: {
      capitalize: function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
      }
    }
  }
</script>

<style lang="scss">
  @import "~assets/css/vars";

  .data-grid {

  }
</style>
