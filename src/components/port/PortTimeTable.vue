<template>
  <div id='main'>
    <table class="bordered">
      <thead class="blue darken-3 white-text" v-if="header">
        <tr>
          <th colspan="2">{{header.left}}</th>
          <th colspan="2">{{header.right}}</th>
        </tr>
      </thead>
      <tbody v-if="rows">
        <tr v-for="row in rows">
          <td>{{row.left.time}}
            <span v-if="row.left.memo">
              <br>{{row.left.memo}}</span>
          </td>
          <td>
            <i class="material-icons blue-text">{{getIcon(row.left.status.code)}}</i>
            {{row.left.status.text}}</td>
          <td>
            {{row.right.time}}
            <span v-if="row.right.memo">
              <br>{{row.right.memo}}</span>
          </td>
          <td>
            <i class="material-icons blue-text">{{getIcon(row.right.status.code)}}</i>
            {{row.right.status.text}}</td>
          </td>
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
        case '':
          codeText = ''
          break;
        default:
          codeText = '△'
          break;
      }
      return codeText + ' ' + status.text
    },
    getIcon: function (statusCode) {
      switch (statusCode) {
        case 'normal':
          return 'ic_radio_button_unchecked'
        case 'cancel':
          return 'ic_clear'
        case 'cation':
          return 'ic_change_history'
        case 'suspend':
          return 'ic_change_history'
        default:
          return ''
      }
    }
  }
}
</script>

<style  scoped>
table {
  background-color: #FFFFFF;
}
</style>