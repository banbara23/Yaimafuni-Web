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

import Navi from './components/Navi';
export default {
  components: {
    Navi
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
  background-color: #F5F5F5;
}

Navi {
  text-align: left;
}
</style>
