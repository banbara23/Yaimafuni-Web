<template>
  <div id="portDetail">
    <div class="row">
      <h5>{{companyName}}</h5>
      <Card :data='detail' />
    </div>
  
    <div class="row"
         v-if="timeTable">
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
  name: 'portDetail',
  components: {
    TimeTable,
    Card
  },
  data() {
    return {
      params: this.$route.params,
      detail: {
        status: {
          code: '',
          text: ''
        }
      }
    }
  },
  firebase() {
    return {
      detail: {
        source: db.ref(this.$route.params.company)
          .child(this.$route.params.port),
        asObject: true
      },
      timeTable: {
        source: db.ref(this.$route.params.company)
          .child('detail')
          .child(this.$route.params.port)
          .child('timeTable'),
        asObject: true
      }
    }
  },
  computed: {
    portName: function () {
      switch (this.$route.params.port) {
        case 'taketomi':
          return '竹富島航路'
        case 'kohama':
          return '小浜島航路'
        case 'kuroshima':
          return '黒島航路'
        case 'uehara':
          return '上原(西表島)航路'
        case 'oohara':
          return '大原(西表島)航路'
        case 'hatoma':
          return '鳩間島航路'
        case 'hateruma':
          return '波照間島航路'
        default:
          return ''
      }
    },
    companyName: function () {
      switch (this.$route.params.company) {
        case 'anei':
          return '安栄観光'
        case 'ykf':
          return '八重山観光フェリー'
        case 'dream':
          return '石垣ドリーム観光'
      }
    }
  }
}
</script>