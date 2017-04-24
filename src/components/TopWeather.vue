<template>
  <div class="weather">
    
    <div class="card hoverable">
      <div class="card-content black-text">
        <p>{{ weather.date }}</p>
        <p>{{ weather.weather }}、{{ weather.wind }}、{{ weather.wave }}</p>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'row',
    props: ['weather'],
    data() {
      return {
        title: '4月17日(月)の天気',
        msg: '曇後雨　波：1.5メートル後2メートル　風：南の風後やや強く'
      }
    }
  }
</script>

<style scorped>
  .row {
    text-align: left;
  }
</style>