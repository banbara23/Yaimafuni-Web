<template>
  <div class="weather">
    <div class="card hoverable">
      <div class="card-content black-text">
        <span class="card-title">{{ title }}</span>
        <p>{{ weather.date }} {{ weather.weather }}</p>
        <p>波：{{ weather.wave }}</p>
        <p>風：{{ weather.wind }}</p>
      </div>
    </div>
  </div>
</template>∂

<script>
  export default {
    name: 'row',
    props: ['weather'],
    data() {
      return {
        title: '今日の天気'
      }
    }
  }
</script>

<style scorped>
  .row {
    text-align: left;
  }
</style>