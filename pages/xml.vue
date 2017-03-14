<template lang="pug">
  .app-page
    h1.title Import XML

    .content
      h2 Upload Users
      input(type="file" v-on:change="onFileChange")
      br
      br
      //.button.m-tiny(v-on:click="uploadFile()") upload via node
      //| &nbsp;
      .button.m-tiny(v-on:click="uploadFileSpring()") upload xml
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        file: undefined
      }
    },
    notifications: {
      showImportSuccess: {
        type: 'info'
      },
      showImportError: {
        title: 'Sorry! Something has gone wrong',
        type: 'error'
      }
    },
    methods: {
      onFileChange (e) {
        var files = e.target.files || e.dataTransfer.files
        if (files.length) {
          this.file = files[0]
        }
      },
      uploadFile (springApi) {
        let data = new FormData()
        data.append('file', this.file)

        let baseURL = 'http://localhost:3001'
        if (springApi) {
          baseURL = 'http://localhost:8080'
        }

        axios.request({
          url: '/api/users/import',
          method: 'post',
          baseURL,
          data
        })
          .then(response => {
            console.log('response', response)
            let message = `processing time: ${response.time}`

            if (springApi) {
              this.showImportSuccess({
                title: 'Yay! The file has been queued for import',
                message: response
              })
            } else {
              this.showImportSuccess({
                title: 'Yay! The file was imported',
                message: response
              })
            }
          })
          .catch(error => {
            console.error('error', error)
            this.showImportError({
              message: error
            })
          })
      },
      uploadFileSpring () {
        let springApi = true
        this.uploadFile(springApi)
      }
    }
  }
</script>
