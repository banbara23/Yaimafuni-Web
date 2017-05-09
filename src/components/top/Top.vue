<template>
  <div id="main">
    <div class="row">
      <!--<h6>運行情報（会社別）</h6>-->
      <div class="col s12 m12 l6">
        <top-company-collection :company="company" />
      </div>
  
      <!--<h6>運行情報（港別）</h6>-->
      <div class="col s12 m12 l6">
        <top-port-collection :data="port" />
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
import TopPortCollection from './TopPortCollection'
import TopCompanyCollection from './TopCompanyCollection'
import Weather from './TopWeather'
import firebase from 'firebase'
const db = firebase.database()

export default {
  name: 'main',
  firebase: {
    company: {
      source: db.ref('/top_company'),
      asObject: true
    },
    port: {
      source: db.ref('/top_port'),
      asObject: true
    },
    weatherToday: {
      source: db.ref('/weather/today'),
      asObject: true
    }
  },
  components: {
    Weather,
    TopPortCollection,
    TopCompanyCollection
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
