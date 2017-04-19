<template>
  <div id="main" class="container">
    <div class="row">
      <h6>運行情報（会社別）</h6>
      <div class="col-md-8 col-md-offset-2">
        <router-link to="portList">
          <top-company-collection />
        </router-link>
      </div>
    </div>
    <div class="row">
      <h6>運行情報（港別）</h6>
      <div class="col-md-8 col-md-offset-2">
        
          <top-port-collection />
        
      </div>
    </div>

    <div class="row">
      <h6>天候情報</h6>      
      <router-link to="/Weather">
        <weather :weather="weatherToday" />
      </router-link>
    </div>
  </div>
</template>

<script>
  import Weather from './TopWeather'
  import TopPortCollection from './TopPortCollection'
  import TopCompanyCollection from './TopCompanyCollection'
  import firebase from 'firebase'
  import firebaseconfig from '../../firebase-config.json'
  firebase.initializeApp(firebaseconfig);
  const db = firebase.database()
  
  export default {
    name: 'main',
    data() {
      return {
        msg: '本日の運行情報'
      }
    },
    firebase: {
      company: db.ref('/top_company'),
      port: db.ref('/top_port'),
      weatherToday: {
        source: db.ref('/weather/today'),
        asObject:true
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
  h6 {
    text-align: left;
  }
</style>
