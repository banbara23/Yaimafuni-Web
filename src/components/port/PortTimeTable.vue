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
      let statusText = '';
      switch (status.code) {
        case 'normal':
          codeText = '○'
          statusText = '通常運行'
          break;
        case 'cancel':
          codeText = '×'
          statusText = '欠航'
          break;
        case 'cation':
          codeText = '△'
          statusText = '注意'
          break;
        case 'suspend':
          codeText = '△'
          statusText = '運休'
          break;
        default:
        codeText = '△'
        statusText = '注意'
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