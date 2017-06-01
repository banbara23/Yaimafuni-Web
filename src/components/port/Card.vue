<template>
  <div class="detailCard">
    <div class="card">
      <div id="card-header" class="blue darken-3 white-text">
        <h4>{{data.portName}}</h4>
        <span>{{company}}</span>
      </div>
      <div class="card-content">
        <!--<span v-if="data.portName" class="card-title"> {{data.portName}}</span>-->
        <h3 :class="getClass">{{data.status.text}}</h3>
        <p v-if="data.comment"> {{data.comment}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailCard',
  props: ['data', 'company'],
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
      let color;
      switch (this.data.status.code) {
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
          color = 'amber';
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