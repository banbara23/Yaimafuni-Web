<template>
  <div>
    <table class="bordered">
      <thead class="blue darken-3 white-text">
        <tr>
          <th colspan="2">{{header.left}}</th>
          <th colspan="2">{{header.right}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows">
          <td>{{row.left.time}}</td>
          <td>{{getStatus(row.left.status)}}</td>
          <td>{{row.right.time}}</td>
          <td>{{getStatus(row.right.status)}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import firebase from 'firebase'
const db = firebase.database()

export default {
  name: 'main',
  props: ['header', 'rows'],
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