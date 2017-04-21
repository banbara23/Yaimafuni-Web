<template>
  <div id="main">
    <div class="row">
      <h5>{{companyName}}</h5>
      <Card :title='Statuses.uehara.name'
            :contents='Statuses.uehara' />
    </div>
    <div class="row">
      <time-table :header='timeTable.header'
                  :rows='timeTable.row' />
    </div>
  </div>
</template>

<script>

import TimeTable from './TimeTable_Anei';
import Card from './StatusCard';
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
  computed: {
    companyName: function() {
      switch (this.$route.params.id) {
        case 'anei':
          return '安栄観光'
          break;
        case 'ykf':
          return '八重山観光フェリー'
          break;
        case 'dream':
          return '石垣ドリーム観光'
          break;
        default:
        return ''
          break;
      }
    }
  }
}
</script>