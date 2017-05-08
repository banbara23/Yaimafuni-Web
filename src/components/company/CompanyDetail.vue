<template>
  <div id="main">
    <div class="row">
      <h5>{{companyName}}</h5>
      <p>{{data.comment}}</p>
      <p>{{data.updateTime}}</p>
      <!--<Card :ports='data.ports' />-->
    </div>
    <div class="row">
      <PortStatusList :ports='data.ports' />
    </div>
  </div>
</template>

<script>

import TimeTable from './CompanyTimeTable';
import PortStatusList from './PortStatusList';
import Card from './StatusCard';
import firebase from 'firebase'
const db = firebase.database()

export default {
  name: 'main',
  components: {
    TimeTable,
    PortStatusList,
    Card
  },
  firebase: {
    data: {
      source: db.ref('/anei/list'),
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