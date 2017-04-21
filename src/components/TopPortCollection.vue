<template>
  <div id="main">
    <div class="collection">
      <!--<p>{{data.uehara}}</p>-->
      <!--
          https://router.vuejs.org/ja/api/router-link.html
          -->
      <router-link to="/portDetail"
                   class="collection-item black-text">
        竹富島航路
        <span class="new badge"
              v-bind:class="{blue:data.taketomi.allNormalFlag,
              red:data.taketomi.cancelFlag,
              orange:data.taketomi.suspendFlag,
              orange:data.taketomi.cationFlag}"
              data-badge-caption="">{{data.taketomi.comment}}</span>
      </router-link>
      <router-link to="/portDetail"
                   class="collection-item black-text">
        小浜島航路
        <span class="new badge"
              v-bind:class="{blue:data.kohama.allNormalFlag,
              red:data.kohama.cancelFlag,
              orange:data.kohama.suspendFlag,
              orange:data.kohama.cationFlag}"
              data-badge-caption="">{{data.kohama.comment}}</span>
      </router-link>
      <router-link to="/portDetail"
                   class="collection-item black-text">
        黒島航路
        <span class="new badge"
              v-bind:class="{blue:data.kuroshima.allNormalFlag,
              red:data.kuroshima.cancelFlag,
              orange:data.kuroshima.suspendFlag,
              orange:data.kuroshima.cationFlag}"
              data-badge-caption="">{{data.kuroshima.comment}}</span>
      </router-link>
      <router-link to="/portDetail"
                   class="collection-item black-text">
        鳩間島航路
        <span class="new badge"
              v-bind:class="{blue:data.hatoma.allNormalFlag,
              red:data.hatoma.cancelFlag,
              orange:data.hatoma.suspendFlag,
              orange:data.hatoma.cationFlag}"
              data-badge-caption="">{{data.hatoma.comment}}</span>
      </router-link>
      <router-link to="/portDetail"
                   class="collection-item black-text">
        上原(西表島)航路
        <span class="new badge"
              v-bind:class="{blue:data.uehara.allNormalFlag,
              red:data.uehara.cancelFlag,
              orange:data.uehara.suspendFlag,
              orange:data.uehara.cationFlag}"
              data-badge-caption="">{{data.uehara.comment}}</span>
      </router-link>
      <router-link to="/portDetail"
                   class="collection-item black-text">
        大原(西表島)航路
        <span class="new badge"
              v-bind:class="{blue:data.oohara.allNormalFlag,
              red:data.oohara.cancelFlag,
              orange:data.oohara.suspendFlag,
              orange:data.oohara.cationFlag}"
              data-badge-caption="">{{data.oohara.comment}}</span>
      </router-link>
      <router-link to="/portDetail"
                   class="collection-item black-text">
        波照間島航路
        <span class="new badge"
              v-bind:class="{blue:data.hateruma.allNormalFlag,
              red:data.hateruma.cancelFlag,
              orange:data.hateruma.suspendFlag,
              orange:data.hateruma.cationFlag}"
              data-badge-caption="">{{data.hateruma.comment}}</span>
      </router-link>
    </div>
  
    <!--
        <ul class="collection with-header">
          <li class="collection-item">
            <div>竹富島航路
              <div class="secondary-content"><span id="status"
                      class="blue-text"><b>通常運航</b></span></div>
            </div>
          </li>
          <li class="collection-item">
            <div>小浜島航路
              <div class="secondary-content"><span id="status"
                      class="red-text"><b>欠航あり</b></span></div>
            </div>
          </li>
          <li class="collection-item">
            <div>黒島航路
              <div class="secondary-content"><span id="status"
                      class="orange-text"><b>未定あり</b></span></div>
            </div>
          </li>
          <li class="collection-item">
            <div>鳩間島航路
              <div class="secondary-content"><span id="status"
                      class="blue-text"><b>通常運航</b></span></div>
            </div>
          </li>
          <li class="collection-item">
            <div>上原(西表島)航路
              <div class="secondary-content"><span id="status"
                      class="blue-text"><b>通常運航</b></span></div>
            </div>
          </li>
          <li class="collection-item">
            <div>大原(西表島)航路
              <div class="secondary-content"><span id="status"
                      class="blue-text"><b>通常運航</b></span></div>
            </div>
          </li>
          <li class="collection-item">
            <div>波照間島航路
              <div class="secondary-content"><span id="status"
                      class="blue-text"><b>通常運航</b></span></div>
            </div>
          </li>
        </ul>
        -->
  </div>
</template>

<script>
import PortDetail from '@/components/PortDetail'
import Router from 'vue-router'
export default {
  name: 'main',
  props: ['data'],
  methods: {
    ankerClick: (key) => {

      const router = new Router({
        routes: [
          // コロンで始まる動的セグメント
          { path: '/portDetail', component: PortDetail }
        ]
      })

      switch (key) {
        case 'taketomi':
          router.push('/portDetail')
          break;

        default:
          break;
      }
    }
  }
}
</script>

<style scorped>
span#status {
  font-weight: bold;
}
</style>