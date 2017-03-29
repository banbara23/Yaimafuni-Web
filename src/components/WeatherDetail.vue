<template>
  <div>
  <div class="card-panel ">
    <div class="row">
    <div class="col-md-8">
      <h5>今日の天気</h5>
      <p>気温：25℃</p>
      <p>天気：晴れ</p>
      <p>風：北東の風やや強く</p>
      <p>波：2メートル</p>
    </div>
    </div>
    </div>
   <div class="card-panel ">
   <div class="row">
    <h5>明日の天気</h5>
      <p>気温：25℃</p>
      <p>天気：晴れ</p>
      <p>風：北東の風やや強く</p>
      <p>波：2メートル</p>
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