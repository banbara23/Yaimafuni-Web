<template>
  <div id="main">
    <div class="collection">
      <a href="#"
         class="collection-item black-text">
            安栄観光
            <span class="new badge"
              v-bind:class="{blue:company.anei.allNormalFlag,
              red:company.anei.cancelFlag,
              orange:company.anei.cationFlag}" 
              data-badge-caption="">{{company.anei.comment}}</span>
          </a>
  
      <a href="#"
        class="collection-item black-text">
          八重山観光フェリー
        <span class="new badge"
              v-bind:class="{blue:company.ykf.allNormalFlag,
              red:company.ykf.cancelFlag,
              orange:company.ykf.cationFlag}" 
              data-badge-caption="">{{company.ykf.comment}}</span>
      </a>
  
      <a href="#"
         class="collection-item black-text">
            石垣ドリーム観光
        <span class="new badge"
              v-bind:class="{blue:company.dream.allNormalFlag,
              red:company.dream.cancelFlag,
              orange:company.dream.cationFlag,
              orange:company.dream.suspendFlag}" 
              data-badge-caption="">{{company.dream.comment}}</span>
          </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main',
  props: ['company'],
  data() {
    return {
      title: '今日の天気'
    }
  }
}
</script>