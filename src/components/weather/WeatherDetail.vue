<template>
  <div class="app">
    <div class="row">
      <div class="col s12 m12 l6">
        <div class="card">
          <div id="card-header"
               class="blue darken-3 white-text">
            <h4>今日の天気</h4> {{weather.today.date}}
          </div>
          <div class="card-panel flow-text">
                <div v-if="weather.today">
                  <p>天気：{{weather.today.weather}}</p>
                  <p>気温
                    <br />　最高{{weather.today.temperature.hight}}
                    <br />　最低{{weather.today.temperature.low}}</p>
                  <p>風：{{weather.today.wind}}</p>
                  <p>波：{{weather.today.wave}}</p>
                </div>
              </div>
        </div>
      </div>
  
      <div class="col s12 m12 l6">
        <div class="card">
          <div id="card-header"
               class="blue darken-3 white-text">
            <h4>明日の天気</h4>
            <span v-if="weather.tomorrow">{{weather.tomorrow.date}}</span>
          </div>
          <div class="card-panel flow-text"
               v-if="weather.tomorrow">
            <p>天気：{{weather.tomorrow.weather}}</p>
            <p>気温
              <br />　最高{{weather.tomorrow.temperature.hight}}
              <br />　最低{{weather.tomorrow.temperature.low}}</p>
            <p>風：{{weather.tomorrow.wind}}</p>
            <p>波：{{weather.tomorrow.wave}}</p>
          </div>
        </div>
      </div>
      <div class="col s12 m12 l6">
        <a class="waves-effect waves-teal btn-large orange"
           href="https://weather.yahoo.co.jp/weather/47/9410.html">天気を詳しく見る</a>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
const db = firebase.database()

export default {
  name: 'app',
  data() {
    return {
      weather: null
    }
  },
  firebase: {
    weather: {
      source: db.ref('/weather'),
      asObject: true
    }
  },
  created() {
    this.weather = {
      today: {
        date: '/',
        temperature: {
          hight: '',
          low:''
        },
        wind: '',
        wave: ''
      },
      tomorrow: {
         date: '/',
        temperature: {
          hight: '',
          low:''
        },
        wind: '',
        wave: ''
      }
    }
  }
}
</script>