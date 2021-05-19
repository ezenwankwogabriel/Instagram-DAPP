<template>
  <div id="app">
    <InstaApp/>
  </div>
</template>

<script>
import InstaApp from './components/insta-app.vue'

export default {
  name: 'App',
  components: {
    InstaApp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
