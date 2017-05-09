<template>
  <div class="app">
    <div class="row">
      <div class="card">
        <div class="col s12 m12 l6">
          <div class="card-panel">
            <span class="card-title">今日の天気</span>
            <div v-if="weather.today">
              <p>{{weather.today.date}} {{weather.today.weather}}</p>
              <p>気温</p>
              <p>　最高{{weather.today.temperature.hight}}</p>
              <p>　最低{{weather.today.temperature.low}}</p>
              <p>風：{{weather.today.wind}}</p>
              <p>波：{{weather.today.wave}}</p>
            </div>
          </div>
        </div>
      </div>
  
      <div class="card">
        <div class="col s12 m12 l6">
          <div class="card-panel"
               v-if="weather.tomorrow">
            <span class="card-title">明日の天気</span>
            <div v-if="weather.today">
              <p>{{weather.tomorrow.date}} {{weather.tomorrow.weather}}</p>
              <p>気温</p>
              <p>　最高{{weather.tomorrow.temperature.hight}}</p>
              <p>　最低{{weather.tomorrow.temperature.low}}</p>
              <p>風：{{weather.tomorrow.wind}}</p>
              <p>波：{{weather.tomorrow.wave}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
const db = firebase.database()

export default {
  name: 'app',
  firebase: {
    weather: {
      source: db.ref('/weather'),
      asObject: true
    }
  }
}
</script>