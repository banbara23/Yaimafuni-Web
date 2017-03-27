<template>
  <div class="weather">
   <div class="col md6">
    <div class="card hoverable">
      <div class="card-content black-text">
        <span class="card-title">{{ title1 }}</span>
        <p>{{ msg1 }}</p>
      </div>
    </div>
    </div>
    <div class="col md6">
    <div class="card hoverable">
      <div class="card-content black-text">
        <span class="card-title">{{ title2 }}</span>
        <p>{{ msg2 }}</p>
      </div>
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
      title2: '明日の天気',
      msg1: '北東の風やや強く、波2メートル',
      msg2: '北東の風やや強く、波2メートル'
    }
  }
}

</script>

<style scorped>
.row {
  text-align: left;
}

</style>