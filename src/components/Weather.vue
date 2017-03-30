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
    props: ['value'],
    data() {
      return {
        title: '今日の天気',
        msg: this.value
      }
    },
    created: () => {
      console.log("called Weather.created()")
      console.log(this.value)
    },
  }
</script>

<style scorped>
  .row {
    text-align: left;
  }
</style>