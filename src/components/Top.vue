<template>
  <div id="main" class="container">
    <div class="row">
      <h6>本日の運行情報（港別）</h6>
      <div class="col-md-8 col-md-offset-2">
        <router-link to="portList">
          <Collection></Collection>
        </router-link>
      </div>
    </div>
    
    <div class="row">
      <h6>天候情報</h6>
      <router-link to="/Weather">
        <Weather :weather="weather"></Weather>
      </router-link>
    </div>
  </div>
</template>

<script>
  import Weather from './Weather'
  import Collection from './Collection'
  import firebase from 'firebase'
  import config from '../../config.json'

  firebase.initializeApp(config);
  
  const weatherRef = firebase.database().ref('weather');
  export default {
    firebase: {
      company: firebase.database().ref('/top_company'),
      port: firebase.database().ref('/top_port'),
      weather: weatherRef
    },
    components: {
      Weather,
      Collection
    },
    name: 'main',
    data() {
      return {
        msg: '本日の運行情報',
        weather: this.weather
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h6 {
    text-align: left;
  }
</style>
