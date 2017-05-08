<template>
  <div>
    <ul class="collection">
      <li v-for='port in ports' class="collection-item">
        {{port.portName}} {{getStatus(port.status)}}<br />
        {{port.comment}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'main',
  props: ['ports'],
  methods: {
    getStatus: (status) => {
      // 仮表示
      let codeText = '';
      switch (status.code) {
        case 'normal':
          codeText = '○'
          break;
        case 'cancel':
          codeText = '×'
          break;
        case 'cation':
          codeText = '△'
          break;
        case 'suspend':
          codeText = '△'
          break;
        default:
        codeText = '△'
          break;
      }
      return codeText + ' ' + status.text
    }
  }
}
</script>

<style  scoped>
table {
  background-color: #FFFFFF;
}
</style>