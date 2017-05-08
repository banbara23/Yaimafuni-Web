<template>
  <div>
    <table class="bordered">
      <thead class="blue darken-3 white-text" v-if="header">
        <tr>
          <th colspan="2">{{header.left}}</th>
          <th colspan="2">{{header.right}}</th>
        </tr>
      </thead>
      <tbody v-if="rows">
        <tr v-for="row in rows">
          <td>{{row.left.time}}<span v-if="row.left.memo"><br>{{row.left.memo}}</span></td>
          <td>{{getStatus(row.left.status)}}</td>
          <td>{{row.right.time}}<span v-if="row.right.memo"><br>{{row.right.memo}}</span></td>
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