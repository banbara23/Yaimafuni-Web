<template>
  <div id="main" class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <Collection></Collection>
      </div>
    </div>
     <div class="row">
      <Weather></Weather>
     </div>
  </div>
</template>

<script>
import Weather from './Weather';
import Collection from './Collection';
export default {
  components: {
    Weather,
    Collection
  },
  name: 'main',
  data () {
    return {
      msg: '本日の運行情報'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  color: #ffffff;
}
</style>
