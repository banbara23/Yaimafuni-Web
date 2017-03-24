<template>
  <div class="main">
    <h5>{{ msg }}</h5>
      <a class="waves-effect blue-light btn">
        <router-link to="/foo">Go to Foo</router-link>
      </a>
      <a class="waves-effect blue-light btn">
        <router-link to="/bar">Go to Bar</router-link>
      </a>
  </div>
</template>

<script>
export default {
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
