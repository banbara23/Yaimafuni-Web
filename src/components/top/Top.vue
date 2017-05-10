<template>
  <div id="main">
    <div class="row">
  
      <div class="col s12 m12 l6">
        <port :data="port.taketomi"
              :title="taketomi.title"
              :portCode="taketomi.code" />
      </div>
  
      <div class="col s12 m12 l6">
        <port :data="port.kohama"
              :title="kohama.title"
              :portCode="kohama.code" />
      </div>
  
      <div class="col s12 m12 l6">
        <port :data="port.kuroshima"
              :title="kuroshima.title"
              :portCode="kuroshima.code" />
      </div>
  
      <div class="col s12 m12 l6">
        <port :data="port.uehara"
              :title="uehara.title"
              :portCode="uehara.code" />
      </div>
  
      <div class="col s12 m12 l6">
        <port :data="port.hatoma"
              :title="hatoma.title"
              :portCode="hatoma.code" />
      </div>
  
      <div class="col s12 m12 l6">
        <port :data="port.oohara"
              :title="oohara.title"
              :portCode="oohara.code" />
      </div>
  
      <div class="col s12 m12 l6">
        <port :data="port.hateruma"
              :title="hateruma.title"
              :portCode="hateruma.code" />
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
      taketomi: { title: '竹富島', code: 'taketomi' },
      kohama: { title: '小浜島', code: 'kohama' },
      kuroshima: { title: '黒島', code: 'kuroshima' },
      oohara: { title: '大原(西表島)', code: 'oohara' },
      uehara: { title: '上原(西表島)', code: 'uehara' },
      hatoma: { title: '鳩間島', code: 'hatoma' },
      hateruma: { title: '波照間島', code: 'hateruma' }
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
