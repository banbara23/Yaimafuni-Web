<template>
  <div class="weather">
    <div class="card hoverable">
      <div class="card-content black-text">
        <span class="card-title">{{ title }}</span>
        <p>{{ msg }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'row',
    props: ['weatherResponse'],
    data() {
      return {
        title: '4月17日(月)の天気',
        msg: '曇後雨　波：1.5メートル後2メートル　風：南の風後やや強く'
      }
    },
    created: () => {
      console.log("called Weather.created()")
      console.log(this.weatherResponse)
    },
  }
</script>

<style scorped>
  .row {
    text-align: left;
  }
</style>