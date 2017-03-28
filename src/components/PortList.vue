<template>
  <div id="main" class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <Collection></Collection>
      </div>
    </div>
  </div>
</template>

<script>
import Collection from './Collection';
export default {
  components: {
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