<template>
  <div class="main">
    <div class="card">
      <div id="card-header"
           class="blue darken-3 white-text">
        <h5>八重山の天気</h5>
      </div>
      <div class="card-content black-text"
           v-if="weather">
        <p>{{ weather.date }}</p>
        <p>{{ weather.weather }}</p>
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