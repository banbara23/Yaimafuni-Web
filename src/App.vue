<template>
  <div id="app">
    <Navi></Navi>
    <router-view></router-view>
  </div>
</template>

<script>
import Navi from './components/navi';
export default {
  components : {
    Navi
  },
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #F5F5F5;
}
</style>
