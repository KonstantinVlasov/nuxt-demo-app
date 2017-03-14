<template lang="pug">
  .app-page
    h1.title Users Dashboard

    .content
      h2 User List
      data-grid(
        v-bind:data="users"
        v-bind:columns="['name', 'email', 'website', 'phone']"
      )
      br

      h2 Create User
      form.create-user(v-on:submit.prevent="saveUser()")
        label
          span Name
          input(v-model="user.name" placeholder="Enter user name" required)
        label
          span Email
          input(v-model="user.email" placeholder="Enter user email" required)
        label
          span Website
          input(v-model="user.website" placeholder="Enter user website")
        label
          span Phone
          input(v-model="user.phone" placeholder="Enter user phone")
        button.button.m-tiny(type="submit") Save
</template>

<script>
  import DataGrid from '~components/common/DataGrid.vue'
  import axios from 'axios'

  export default {
    components: {
      DataGrid
    },
    data () {
      return {
        user: {

        }
      }
    },
    computed: {
      users () {
        return this.$store.state.users.users
      }
    },
    fetch (context) {
      return context.store.dispatch('users/getUsers')
    },
    notifications: {
      showNotify: {
        type: 'info'
      }
    },
    methods: {
      saveUser () {
        axios.request({
          url: '/api/users',
          method: 'post',
          baseURL: 'http://localhost:3001',
          data: this.user
        })
          .then(response => {
            console.log('response', response)
            let message = `processing time: ${response.time}`
            this.showNotify({
              title: 'Yay! User was saved',
              message: response
            })
            context.store.dispatch('users/getUsers')
          })
          .catch(error => {
            console.error('error', error)
            this.showNotify({
              title: 'Sorry! Something has gone wrong',
              message: error,
              type: 'error'
            })
          })
      }
    }
  }
</script>

<style lang="scss">
.create-user {
  width: 15rem;
}
</style>
