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
        title: '今日の天気',
        msg: ''
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