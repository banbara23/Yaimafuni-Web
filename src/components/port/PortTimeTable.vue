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
          <td class="valign-wrapper">
            <img v-if="row.left.status.code" :src="`../../static/${row.left.status.code}.svg`">
            {{row.left.status.text}}</td>
          <td>
            {{row.right.time}}
            <span v-if="row.right.memo">
              <br>{{row.right.memo}}</span>
          </td>
          <td class="valign-wrapper">
            <img v-if="row.right.status.code" :src="`../../static/${row.right.status.code}.svg`">
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
  props: ['header', 'rows']
}
</script>

<style  scoped>
table {
  background-color: #FFFFFF;
}
td img {
  widows: 18px;
  height: 18px;
  margin-right: 4px;
}
</style>