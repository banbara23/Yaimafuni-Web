<template>
  <div id="main">
    <div class="row">
      <Card :title='title' :contents='contents' />
    </div>
    <div class="row">
      <TimeTable_Anei></TimeTable_Anei>
    </div>
  </div>
</template>

<script>
import TimeTable_Anei from './TimeTable_Anei';
import Card from './Card';
export default {
  components: {
    TimeTable_Anei,
    Card
  },
  name: 'main',
  data() {
    return {
      title: 'タイトル',
      contents: 'コンテンツ'
    }
  }
}
</script>