<template>
  <div class="main">
    <h5>{{ msg }}</h5>
    <Card1></Card1>
    <Card2></Card2>
    <Collection></Collection>
      <a class="waves-effect blue-light btn">
        <router-link to="/foo">Go to Foo</router-link>
      </a>
      <a class="waves-effect blue-light btn">
        <router-link to="/bar">Go to Bar</router-link>
      </a>
  </div>
</template>

<script>
import Card1 from './Card';
import Card2 from './Card';
import Collection from './Collection';
export default {
  components: {
    Card1,
    Card2,
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
