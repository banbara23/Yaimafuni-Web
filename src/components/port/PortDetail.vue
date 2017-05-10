<template>
  <div id="main">
    <!--{{detail}}-->
    <div class="row"
         v-if="detail">
      <h5>{{companyName}} > {{detail.portName}}</h5>
      <!--<p>ステータス：{{detail.status.code}}</p>
      <h5>{{detail.status.text}}</h5>
      <h5 v-if="detail.comment">{{detail.comment}}</h5>-->
    </div>
  
    <!--<div class="row"
         v-if="detail.timeTable">
      <time-table :header='detail.timeTable.header'
                  :rows='detail.timeTable.row' />
    </div>-->
  </div>
</template>

<script>
import TimeTable from './PortTimeTable';
import firebase from 'firebase'
const db = firebase.database()

export default {
  name: 'main',
  components: {
    TimeTable
  },
  data() {
    return {
      params: this.$route.params
    }
  },
  firebase() {
    return {
      detail: {
        source: db.ref(this.$route.params.company)
          .child('/detail/')
          .child(this.$route.params.port),
        asObject: true
      }
    }
  },
  computed: {
    portName: function () {
      switch (this.$route.params.port) {
        case 'taketomi':
          return '竹富島航路'
          break;
        case 'kohama':
          return '小浜島航路'
          break;
        case 'kuroshima':
          return '黒島航路'
          break;
        case 'uehara':
          return '上原(西表島)航路'
          break;
        case 'oohara':
          return '大原(西表島)航路'
          break;
        case 'hatoma':
          return '鳩間島航路'
          break;
        case 'hateruma':
          return '波照間島航路'
          break;
        default:
          return ''
          break;
      }
    },
    companyName: function () {
      switch (this.$route.params.company) {
        case 'anei':
          return '安栄観光'
          break;
        case 'ykf':
          return '八重山観光フェリー'
          break;
        case 'dream':
          return '石垣ドリーム観光'
          break;
      }
    }
  }
}
</script>