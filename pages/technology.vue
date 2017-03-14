<template lang="pug">
  .app-page
    h1.title Technology Stack

    .content
      h2 Node API
      table.-wide
        tr
          td(width="20%")
            a.name(href="http://expressjs.com/" target="_blank") Express.js
          td Fast, unopinionated, minimalist web framework for Node.js
        tr
          td
            a.name(href="http://mongoosejs.com/" target="_blank") Mongoose
          td Elegant mongodb object modeling for node.js
        tr
          td
            a.name(href="https://github.com/expressjs/morgan" target="_blank") Morgan
          td HTTP request logger middleware for node.js


      h2 Spring API
      table.-wide
        tr
          td(width="20%")
            a.name(href="https://projects.spring.io/spring-boot/" target="_blank") Spring Boot
          td Create stand-alone, production-grade Spring based Applications that you can "just run"
        tr
          td
            a.name(href="https://github.com/spring-projects/spring-boot/tree/master/spring-boot-starters/spring-boot-starter-data-mongodb" target="_blank") Mongodb starter
          td MongoDB starter for Spring-Boot
        tr
          td
            a.name(href="https://logging.apache.org/log4j/2.0/" target="_blank") Log4j 2
          td Most popular Java-based logging utility

      h2 Data
      table.-wide
        tr
          td(width="20%")
            a.name(href="https://www.mongodb.com/" target="_blank") MongoDB
          td MongoDB is an open-source, document database designed for ease of development and scaling
        tr
          td
            a.name(href="http://activemq.apache.org/" target="_blank") ActiveMQ
          td Most popular and powerful open source messaging and Integration Patterns server


      h2 Frontend
      table.-wide
        tr
          td(width="20%")
            a.name(href="https://vuejs.org/" target="_blank") Vue.js
          td Intuitive, Fast and Composable MVVM for building interactive interfaces
        tr
          td
            a.name(href="https://github.com/vuejs/vuex" target="_blank") Vuex
          td Centralized State Management for Vue.js
        tr
          td
            a.name(href="https://github.com/mzabriskie/axios" target="_blank") Axios
          td Promise based HTTP client for the browser and node.js
        tr
          td
            a.name(href="https://webpack.github.io/" target="_blank") Webpack
          td Most powerful module bundler for browser
        tr
          td
            a.name(href="https://github.com/pugjs/pug" target="_blank") Pug
          td Robust, elegant, feature rich template engine
        tr
          td
            a.name(href="http://sass-lang.com/" target="_blank") Sass
          td Most mature, stable, and powerful professional grade CSS extension language in the world
        tr
          td
            a.name(href="https://necolas.github.io/normalize.css/" target="_blank") Normalize.css
          td A collection of HTML element and attribute style-normalizations
</template>

<style lang="scss">
  table {
    margin-bottom: 3rem;
    border-radius: 3px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0,0,0,0.15);

    &>td {
      padding: 0.5rem 1rem;

      &:nth-child(odd) {
        background-color: #fff;
      }
      &:nth-child(even) {
        background-color: #f4f4f4;
      }

      &>.name {
        display: inline-block;
        width: 10rem;
      }
      &>td {
        display: inline-block;
      }
    }
  }
</style>
