<template>
  <div id="app">
    <navi id="navi"/>
    <div class="container">
      <router-view></router-view>
    </div>
    <myfooter id="footer" />
  </div>
</template>

<script>
import firebase from 'firebase'
import firebaseconfig from '../firebase-config.json'
firebase.initializeApp(firebaseconfig);

import navi from './components/Navigation';
import myfooter from './components/Footer';
export default {
  components: {
    navi,
    myfooter
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
  /*color: #2c3e50;*/
  background-color: #00b1cd;
  background-size: 40%;
  background-image: url('./assets/sun.svg');
  background-repeat: no-repeat;
  background-position: right top;
  min-height: 100vh;
  height: 100%
}

#navi {
  text-align: left;
  padding-top: 10px;
  margin-bottom: 100px;
}

#footer {
  margin-top:100px;
}
</style>
