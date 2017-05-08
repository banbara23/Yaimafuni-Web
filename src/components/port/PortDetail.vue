<template>
  <div id="main">
    <div class="row">
      <h5>{{detailStatus.portName}}</h5>
      <p>{{detailStatus.comment}}</p>
      <!--<Card :data='detailStatus.comment' />-->
    </div>
    <div class="row">
      <time-table :header='detailStatus.timeTable.header'
                  :rows='detailStatus.timeTable.row' />
    </div>
  </div>
</template>

<script>
import TimeTable from './PortTimeTable';
import Card from './Card';
import firebase from 'firebase'
const db = firebase.database()

export default {
  name: 'main',
  components: {
    TimeTable,
    Card
  },
  firebase: {
    detailStatus: {
      source: db.ref('/anei/detail/uehara/'),
      asObject: true
    }
  },
  data() {
    return {
      title: 'タイトル',
      contents: 'コンテンツ',
      companyName: '港名'
    }
  }
}
</script>