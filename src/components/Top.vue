<template>
  <div id="main" class="container">
    <div class="row">
    <h6>本日の運行情報（港別）</h6>
      <div class="col-md-8 col-md-offset-2">
        <router-link to="portList">
          <Collection></Collection>
        </router-link>
      </div>
    </div>
      <div class="row">
        <h6>天候情報</h6>
          <router-link to="/Weather">
            <Weather></Weather>
          </router-link>
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
h6 {
  text-align: left;
}
</style>
