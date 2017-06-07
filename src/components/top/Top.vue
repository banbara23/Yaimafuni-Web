<template>
  <div id="main">
    <vue-progress-bar />
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
let progress;

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
      hateruma: { title: '波照間島', code: 'hateruma' },
      port: null
    }
  },
  created() {
    progress = 0;
    this.$Progress.start();
    // 初期値設定
    const initStatus = {
      anei: {
        status: null
      },
      ykf: {
        status: null
      },
      dream: {
        status: null
      }
    };

    this.port = {
      taketomi: initStatus,
      kohama: initStatus,
      kuroshima: initStatus,
      oohara: initStatus,
      uehara: initStatus,
      hatoma: initStatus,
      hateruma: {
          anei: {
            status: null
          }
      }
    }
  },
  firebase: {
    weatherToday: {
      source: db.ref('/weather/today'),
      asObject: true,
      readyCallback: function () {
        progress++
        if (progress > 1) {
          this.$Progress.finish();
        }
      }
    },
    port: {
      source: db.ref('/top_port'),
      asObject: true,
      readyCallback: function () {
        progress++
        if (progress > 1) {
          this.$Progress.finish();
        }
      }
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
