<template>
  <div id="portDetail">
    <div class="row">
      <Card :data='detail'
            :company='companyName' />
    </div>
  
    <div class="row"
         v-if="timeTable">
      <time-table :header='detail.timeTable.header'
                  :rows='detail.timeTable.row' />
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
      detail: null,
      timeTable: {
        header: null,
        row: null
      }
    }
  },
  firebase() {
    return {
      detail: {
        source: db.ref(this.$route.params.company)
          .child(this.$route.params.port),
        asObject: true
      }
    }
  },
  created() {
    this.detail = {
      portName: '',
      status: {
        code: '',
        text: ''
      }
    }

    if (this.$route.params.company == 'dream') {
      this.timeTable = null;
    }
    else {
      this.timeTable = {
        header: {
          left: ' ',
          right: ' '
        }
      }
      this.timeTable.row = [{
        left: {
          time: '',
          memo: '',
          status: {}
        },
        right: {
          time: '',
          memo: '',
          status: {}
        }
      }]
    }
  },
  computed: {
    portName: function () {
      // パラメータから港名を設定
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
      // パラメータから会社名を設定
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