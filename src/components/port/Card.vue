<template>
  <div class="detailCard">
    <div class="card">
      <div id="card-header" class="blue darken-3 white-text">
        <h4>{{cardStatus.portName}}</h4>
        <span>{{company}}</span>
      </div>
      <div class="card-content">
        <h4 :class="getClass">{{cardStatus.status.text}}</h4>
        <p v-if="cardStatus.comment"> {{cardStatus.comment}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailCard',
  props: ['cardStatus', 'company'],
  data() {
    return {
      data: {
        comment: '',
        status: {
          code: '',
          text: ''
        }
      }
    }
  },
  computed: {
    getClass: function () {
      console.log(this.data.status.code)
      let color;
      switch (this.cardStatus.status.code) {
        case 'normal':
          color = 'blue';
          break;
        case 'cancel':
          color = 'red';
          break;
        case 'cation':
          color = 'orange';
          break;
        case 'suspend':
          color = 'red';
          break;
        default:
          color = 'orange';
      }
      return `${color}-text`
    }
  }
}
</script>

<style scorped>
div#card-header {
  padding: 10px 20px 10px 20px;
  /*font-size: 16px;*/
}

/*div#card-header span {
  font-weight: bold;
}*/
</style>