<template>
  <div id="app">
    <navi />
    <br />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import firebaseconfig from '../firebase-config.json'
firebase.initializeApp(firebaseconfig);

import navi from './components/Navigation';
export default {
  components: {
    navi
  },
  name: 'app'
}
</script>

<style>
a {
  color: #2c3e50;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #00b1cd;
}

Navi {
  text-align: left;
}
</style>
