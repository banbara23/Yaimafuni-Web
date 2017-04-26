<template>
  <div class="main">
    <div class="card">
      <div class="card-content black-text" v-if="weather">
        <p v-if="weather">{{ weather.date }} {{ weather.weather }}</p>
        <p>風：{{ weather.wind }}</p>
        <p>波：{{ weather.wave }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'main',
    props: ['weather']
  }
</script>

<style scorped>
  .row {
    text-align: left;
  }
</style>