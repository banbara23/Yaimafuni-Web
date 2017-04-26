<template>
  <div id="topPortCollection">
    <div class="collection">
      <!--<p>{{data.uehara}}</p>-->
      <!--
          https://router.vuejs.org/ja/api/router-link.html
          -->
      <router-link to="/portDetail"
                   class="collection-item black-text">
        竹富島航路
        <span class="new badge"
          v-if="data.taketomi"
          v-bind:class="{
            blue: data.taketomi.allNormalFlag,
            red:data.taketomi.cancelFlag,
            amber:data.taketomi.suspendFlag,
            orange:data.taketomi.cationFlag}"
            data-badge-caption="">{{data.taketomi.comment}}</span>
      </router-link>
      <router-link to="/portDetail"
                   class="collection-item black-text">
        小浜島航路
        <span class="new badge"
          v-if="data.kohama"
            v-bind:class="{
              blue: data.kohama.allNormalFlag,
              red: data.kohama.cancelFlag,
              amber: data.kohama.suspendFlag,
              orange: data.kohama.cationFlag}"
              data-badge-caption="">{{data.kohama.comment}}</span>
      </router-link>
      <router-link to="/portDetail"
                   class="collection-item black-text">
        黒島航路
        <span class="new badge"
          v-if="data.kuroshima"
              v-bind:class="{
                blue:data.kuroshima.allNormalFlag,
                red:data.kuroshima.cancelFlag,
                amber:data.kuroshima.suspendFlag,
                orange:data.kuroshima.cationFlag}"
                data-badge-caption="">{{data.kuroshima.comment}}</span>
      </router-link>
      <router-link to="/portDetail"
                   class="collection-item black-text">
        鳩間島航路
        <span class="new badge"
          v-if="data.hatoma"
              v-bind:class="{
                blue:data.hatoma.allNormalFlag,
                red:data.hatoma.cancelFlag,
                amber:data.hatoma.suspendFlag,
                orange:data.hatoma.cationFlag}"
                data-badge-caption="">{{data.hatoma.comment}}</span>
      </router-link>
      <router-link to="/portDetail"
                   class="collection-item black-text">
        上原(西表島)航路
        <span class="new badge"
          v-if="data.uehara"
              v-bind:class="{
                blue:data.uehara.allNormalFlag,
                red:data.uehara.cancelFlag,
                amber:data.uehara.suspendFlag,
                orange:data.uehara.cationFlag}"
                data-badge-caption="">{{data.uehara.comment}}</span>
      </router-link>
      <router-link to="/portDetail"
                   class="collection-item black-text">
        大原(西表島)航路
        <span class="new badge"
          v-if="data.oohara"
              v-bind:class="{
                blue:data.oohara.allNormalFlag,
                red:data.oohara.cancelFlag,
                amber:data.oohara.suspendFlag,
                orange:data.oohara.cationFlag}"
                data-badge-caption="">{{data.oohara.comment}}</span>
      </router-link>
      <router-link to="/portDetail"
                   class="collection-item black-text">
        波照間島航路
        <span class="new badge"
          v-if="data.hateruma"
          v-bind:class="{
            blue:data.hateruma.allNormalFlag,
            red:data.hateruma.cancelFlag,
            amber:data.hateruma.suspendFlag,
            orange:data.hateruma.cationFlag}"
            data-badge-caption="">{{data.hateruma.comment}}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topPortCollection',
  props: ['data']
}
</script>

<style scorped>
span#status {
  font-weight: bold;
}
</style>