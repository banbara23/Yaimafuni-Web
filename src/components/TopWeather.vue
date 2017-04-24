<template>
  <div class="main">
    <div class="card">
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
    name: 'main',
    props: ['weather']
  }
</script>

<style scorped>
  .row {
    text-align: left;
  }
</style>