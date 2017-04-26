<template>
  <div id="main">
    <div class="row">
      <h5>{{companyName}}</h5>
      <Card :data='Statuses.uehara' />
    </div>
    <div class="row">
      <time-table :header='timeTable.header'
                  :rows='timeTable.row' />
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
    Statuses: {
      source: db.ref('/anei_status/statuses'),
      asObject: true
    },
    timeTable: {
      source: db.ref('/anei_status_detail_uehara'),
      asObject: true
    }
  },
  data() {
    return {
      title: 'タイトル',
      contents: 'コンテンツ'
    }
  }
}
</script>