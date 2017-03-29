<template>
  <div class="weather">
    <div class="card hoverable">
      <div class="card-content black-text">
        <span class="card-title">{{ title1 }}</span>
        <p>{{ msg1 }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'row',
  data () {
    return {
      title1: '今日の天気',
      msg1: '北東の風やや強く、波2メートル'
    }
  }
}

</script>

<style scorped>
.row {
  text-align: left;
}

</style>