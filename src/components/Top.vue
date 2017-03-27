<template>
  <div class="main container">
    <div class="col s4 offset-s4">
      <Collection></Collection>
    </div>
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
