<template>
  <div id="main">
    <div class="row">
      <TimeTable_Anei></TimeTable_Anei>
    </div>
  </div>
</template>

<script>
import TimeTable_Anei from './TimeTable_Anei';
export default {
  components: {
    TimeTable_Anei
  },
  name: 'main',
  data() {
    return {
      msg: '本日の運行情報'
    }
  }
}
</script>