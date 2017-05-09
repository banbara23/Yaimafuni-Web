<template>
  <div id="topCompanyCollection">
    <div class="card collection with-header">
      <div class="collection-header cyan white-text"><h5>運行情報（会社別）</h5></div>
      <router-link to="/companyDetail/anei"
                   class="collection-item black-text">
        安栄観光
        <span class="new badge"
          v-if="company.anei"
          v-bind:class="{
            blue:company.anei.allNormalFlag,
            red:company.anei.cancelFlag,
            orange:company.anei.cationFlag}"
          data-badge-caption="">{{company.anei.comment}}</span>
      </router-link>
  
      <router-link to="/companyDetail/ykf"
                   class="collection-item black-text">
        八重山観光フェリー
        <span class="new badge"
          v-if="company.ykf"
          v-bind:class="{
            blue:company.ykf.allNormalFlag,
            red:company.ykf.cancelFlag,
            orange:company.ykf.cationFlag}"
          data-badge-caption="">{{company.ykf.comment}}</span>
      </router-link>
  
      <router-link to="/companyDetail/dream"
                   class="collection-item black-text">
        石垣ドリーム観光
        <span class="new badge"
          v-if="company.dream"
          v-bind:class="{
            blue:company.dream.allNormalFlag,
            red:company.dream.cancelFlag,
            orange:company.dream.cationFlag,
            amber:company.dream.suspendFlag}"
          data-badge-caption="">{{company.dream.comment}}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topCompanyCollection',
  props: ['company'],
  data() {
    return {
      title: '今日の天気'
    }
  }
}
</script>