<template>
  <div class="app">
    <div class="row">
      <vue-progress-bar></vue-progress-bar>
      <div class="col s12 m12 l6">
        <div class="card">
          <div id="card-header" class="blue darken-3 white-text">
            <h4>今日の天気</h4> {{weather.today.date}}
          </div>
          <div class="my-card-panel">
            <div v-if="weather.today">
              <p>天気：{{weather.today.weather}}</p>
              <p>気温
                <br />　最高{{weather.today.temperature.hight}}
                <br />　最低{{weather.today.temperature.low}}</p>
              <p>風：{{weather.today.wind}}</p>
              <p>波：{{weather.today.wave}}</p>
            </div>
          </div>
          <div class="divider"></div>
          <div class="under-contents ">
            <p>3時間毎の天気</p>
            <table class="table bordered ">
              <tbody>
                <tr>
                  <td>
                    <span class="title">時間</span>
                  </td>
                  <td v-for="data in weather.today.table">{{data.hour}}</td>
                </tr>
                <tr>
                  <td>
                    <span class="title">天気</span>
                  </td>
                  <td v-for="data in weather.today.table">{{data.weather}}</td>
                </tr>
                <tr>
                  <td>
                    <span class="title">風向</span>
                  </td>
                  <td v-for="data in weather.today.table">{{data.windBlow}}</td>
                </tr>
                <tr>
                  <td>
                    <span class="title">風速</span>
                  </td>
                  <td v-for="data in weather.today.table">{{data.windSpeed}}m</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  
       <div class="col s12 m12 l6">
        <div class="card">
          <div id="card-header" class="blue darken-3 white-text">
            <h4>明日の天気</h4> {{weather.tomorrow.date}}
          </div>
          <div class="my-card-panel">
            <div v-if="weather.tomorrow">
              <p>天気：{{weather.tomorrow.weather}}</p>
              <p>気温
                <br />　最高{{weather.tomorrow.temperature.hight}}
                <br />　最低{{weather.tomorrow.temperature.low}}</p>
              <p>風：{{weather.tomorrow.wind}}</p>
              <p>波：{{weather.tomorrow.wave}}</p>
            </div>
          </div>
          <div class="divider"></div>
          <div class="under-contents ">
            <p>3時間毎の天気</p>
            <table class="table bordered ">
              <tbody>
                <tr>
                  <td>
                    <span class="title">時間</span>
                  </td>
                  <td v-for="data in weather.tomorrow.table">{{data.hour}}</td>
                </tr>
                <tr>
                  <td>
                    <span class="title">天気</span>
                  </td>
                  <td v-for="data in weather.tomorrow.table">{{data.weather}}</td>
                </tr>
                <tr>
                  <td>
                    <span class="title">風向</span>
                  </td>
                  <td v-for="data in weather.tomorrow.table">{{data.windBlow}}</td>
                </tr>
                <tr>
                  <td>
                    <span class="title">風速</span>
                  </td>
                  <td v-for="data in weather.tomorrow.table">{{data.windSpeed}}m</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col s12 m12 l12">
        <!-- todo: blankは将来外す-->
        <a class="waves-effect waves-teal btn-large orange" href="http://www.tenki.jp/forecast/10/50/9410/47207-daily.html" target="_blank">詳しく見る</a>
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
      asObject: true,
      readyCallback: function () {
        this.$Progress.finish();
      }
    }
  },
  created() {
    this.$Progress.start();
    this.weather = {
      today: {
        date: '...',
        temperature: {
          hight: '',
          low: ''
        },
        wind: '',
        wave: ''
      },
      tomorrow: {
        date: '...',
        temperature: {
          hight: '',
          low: ''
        },
        wind: '',
        wave: ''
      }
    }
  }
}
</script>

<style scoped>
.under-contents {
  padding: 0px 20px 0px 20px;
}

.my-card-panel {
  margin: 0px 20px 10px 20px;
}

.card-panel {
  margin-top: 0px;
}

table {
  margin-top: 10px;
  padding-left: 20px;
  padding-right: 0px;
}

td {
  padding: 8px 2px;
  font-size: 16px;
  width: 100px;
}

span.title {
  font-weight: bold;
}
</style>