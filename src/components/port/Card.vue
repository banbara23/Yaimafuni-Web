<template>
  <div class="detailCard">
    <div class="card">
      <div class="card-content">
        <span v-if="data.portName" class="card-title"> {{data.portName}}  - {{company}}</span>
        <h5 :class="getClass">{{data.status.text}}</h5>
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

</style>