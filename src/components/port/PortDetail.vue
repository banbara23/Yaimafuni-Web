<template>
  <div id="main">
    <div class="row">
      <h5>{{portName}}</h5>
      <!--<Card :data='detailStatus.comment' />-->
    </div>
    <div class="row">
      <div class="collection">
  
        <router-link to="/portDetail/taketomi"
                     class="collection-item black-text">
  
          <span class="new badge"
                v-if="aneiDetail"
                v-bind:class="{
                      blue: aneiDetail.status.code == 'nomal',
                      red: aneiDetail.status.code == 'cancel',
                      amber: aneiDetail.status.code == 'suspend',
                      orange: aneiDetail.status.code == 'cation'}"
                data-badge-caption="">
                      {{aneiDetail.status.text}}
              </span> 安栄観光
          <br><span class="blue-grey-text">{{aneiDetail.comment}}</span>
        </router-link>
    
        <router-link to="/portDetail/taketomi"
                     class="collection-item black-text">
  
          <span class="new badge"
                v-if="aneiDetail"
                v-bind:class="{
                      blue: aneiDetail.status.code == 'nomal',
                      red: aneiDetail.status.code == 'cancel',
                      amber: aneiDetail.status.code == 'suspend',
                      orange: aneiDetail.status.code == 'cation'}"
                data-badge-caption="">
                      {{aneiDetail.status.text}}
              </span> 八重山観光フェリー
          <br><span class="blue-grey-text">{{aneiDetail.comment}}</span>
        </router-link>

         <router-link to="/portDetail/taketomi"
                     class="collection-item black-text">
  
          <span class="new badge"
                v-if="aneiDetail"
                v-bind:class="{
                      blue: aneiDetail.status.code == 'nomal',
                      red: aneiDetail.status.code == 'cancel',
                      amber: aneiDetail.status.code == 'suspend',
                      orange: aneiDetail.status.code == 'cation'}"
                data-badge-caption="">
                      {{aneiDetail.status.text}}
              </span> 石垣ドリーム観光
          <br><span class="blue-grey-text">{{aneiDetail.comment}}</span>
        </router-link>
      </div>
    </div>
  
    <!--<div class="row">
        <time-table :header='detailStatus.timeTable.header'
                    :rows='detailStatus.timeTable.row' />
      </div>-->
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
  firebase() {
    return {
      aneiDetail: {
        source: db.ref('/anei/detail/').child(this.$route.params.id),
        asObject: true
      },
      // ykfDetail: {
      //   source: db.ref('/ykf/detail/').child(this.$route.params.id),
      //   asObject: true
      // },
      // dreamDetail: {
      //   source: db.ref('/dream/detail/').child(this.$route.params.id),
      //   asObject: true
      // }
    }
  },
  computed: {
    portName: function () {
      switch (this.$route.params.id) {
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
    }
  }
}
</script>