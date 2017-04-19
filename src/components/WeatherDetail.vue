<template>
  <div>
    <div class="row">
      <!-- 今日 -->
      <div class="card-panel">
        <h5>今日の天気</h5>
        <p>{{weather.today.date}} {{weather.today.weather}}</p>
        <p>気温</p>
        <p>　最高{{weather.today.temperature.hight}}</p>
        <p>　最低{{weather.today.temperature.low}}</p>
        <p>風：{{weather.today.wind}}</p>
        <p>波：{{weather.today.wave}}</p>
      </div>

      <!-- 明日 -->
      <div class="card-panel">
        <h5>今日の天気</h5>
        <p>{{weather.tomorrow.date}} {{weather.tomorrow.weather}}</p>
        <p>気温</p>
        <p>　最高{{weather.tomorrow.temperature.hight}}</p>
        <p>　最低{{weather.tomorrow.temperature.low}}</p>
        <p>風：{{weather.tomorrow.wind}}</p>
        <p>波：{{weather.tomorrow.wave}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
const db = firebase.database()

export default {
  name: 'row',
  data() {
    return {
      title1: '今日の天気',
      msg1: '北東の風やや強く、波2メートル'
    }
  },
  firebase: {
    weather: {
      source: db.ref('/weather'),
      asObject: true
    }
  }
}

</script>

<style scorped>
.row {
  text-align: left;
}
</style>