<template>
  <div>
    <div class="collection">
      <a href="#" class="collection-item black-text">
        安栄観光
        <span v-if="company.anei.allNormalFlag" class="new badge blue" data-badge-caption="">{{company.anei.comment}}</span>
        <span v-if="company.anei.cancelFlag"class="new badge red" data-badge-caption="">{{company.anei.comment}}</span>
        <span v-if="company.anei.cationFlag"class="new badge orange" data-badge-caption="">{{company.anei.comment}}</span>
      </a>

      <a href="#" class="collection-item black-text">
        八重山観光フェリー
        <span v-if="company.ykf.allNormalFlag" class="new badge blue" data-badge-caption="">{{company.ykf.comment}}</span>
        <span v-if="company.ykf.cancelFlag"class="new badge red" data-badge-caption="">{{company.ykf.comment}}</span>
        <span v-if="company.ykf.cationFlag"class="new badge orange" data-badge-caption="">{{company.ykf.comment}}</span>
      </a>
      
      <a href="#" class="collection-item black-text">
        石垣ドリーム観光
        <span v-if="company.dream.allNormalFlag" class="new badge blue" data-badge-caption="">{{company.dream.comment}}</span>
        <span v-if="company.dream.cancelFlag"class="new badge red" data-badge-caption="">{{company.dream.comment}}</span>
        <span v-if="company.dream.cationFlag"class="new badge orange" data-badge-caption="">{{company.dream.comment}}</span>
        <span v-if="company.dream.suspendFlag"class="new badge orange" data-badge-caption="">{{company.dream.comment}}</span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'row',
    props: ['company'],
    data() {
      return {
        title: '今日の天気'
      }
    }
  }
</script>