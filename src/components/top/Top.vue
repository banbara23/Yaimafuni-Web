<template>
  <div id="main">
    <div class="row">
  
      <div class="col s12 m12 l6">
        <port :data="port.taketomi"
              :title="title.taketomi" />
      </div>
  
      <div class="col s12 m12 l6">
        <port :data="port.kohama"
              :title="title.kohama" />
      </div>
  
      <div class="col s12 m12 l6">
        <port :data="port.kuroshima"
              :title="title.kuroshima" />
      </div>
  
      <div class="col s12 m12 l6">
        <port :data="port.uehara"
              :title="title.uehara" />
      </div>
  
      <div class="col s12 m12 l6">
        <port :data="port.hatoma"
              :title="title.hatoma" />
      </div>
  
      <div class="col s12 m12 l6">
        <port :data="port.oohara"
              :title="title.oohara" />
      </div>
  
      <div class="col s12 m12 l6">
        <port :data="port.hateruma"
              :title="title.hateruma" />
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
  data() {
    return {
      title: {
        taketomi: '竹富島',
        kohama: '小浜島',
        kuroshima: '黒島',
        oohara: '大原(西表島)',
        uehara: '上原(西表島)',
        hatoma: '鳩間島',
        hateruma: '波照間島',
      }
    }
  },
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
