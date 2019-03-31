<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script> /*eslint-disable */
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'

  import navbar from 'vue-strap/src/Navbar'
  import dropdown from 'vue-strap/src/Dropdown'
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'

import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
  Vue.use(VueAxios, axios)
export default {
  name: 'App',
  components:{
    'navbar': navbar,
    'dropdown': dropdown
  }
}
</script>

<style>
#app {

  height: 100%;
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
