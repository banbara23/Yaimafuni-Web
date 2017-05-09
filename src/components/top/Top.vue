<template>
  <div id="main">
    <div class="row">
  
      <div class="col s12 m12 l6">
        <port :data="port.taketomi" :title='竹富島航路' />
      </div>
  
      <div class="col s12 m12 l6">
        <port :data="port.kohama" :title='小浜島航路' />
      </div>
  
      <div class="col s12 m12 l6">
        <port :data="port.kuroshima" :title='黒島航路' />
      </div>
  
      <div class="col s12 m12 l6">
        <port :data="port.oohara" :title='大原航路' />
      </div>
  
      <div class="col s12 m12 l6">
        <port :data="port.uehara" :title='上原航路' />
      </div>
  
      <div class="col s12 m12 l6">
        <port :data="port.hatoma" :title='鳩間島航路' />
      </div>
  
      <div class="col s12 m12 l6">
        <port :data="port.hateruma" :title='波照間島航路' />
      </div>
  
      <div class="col s12 m12 l6">
        <router-link to="/Weather">
          <weather :weather="weatherToday" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Port from './Port'
import Weather from './TopWeather'
import firebase from 'firebase'
const db = firebase.database()

export default {
  name: 'main',
  firebase: {
    weatherToday: {
      source: db.ref('/weather/today'),
      asObject: true
    },
    port: {
      source: db.ref('/port'),
      asObject: true
    }
  },
  components: {
    Weather,
    Port
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
