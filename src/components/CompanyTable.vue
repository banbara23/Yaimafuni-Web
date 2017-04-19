<template>
  <div id="main">
    <h6>本日の運行情報</h6>
    <p>{{topPort}}</p>
    <div class="card">
      <table class="bordered">
        <thead>
          <tr>
            <th>会社名</th>
            <th>ステータス</th>
            <th>コメント</th>
          </tr>
        </thead>
  
        <tbody>
          <tr>
            <td>安栄</td>
            <td>運行</td>
            <td>通常運行です</td>
          </tr>
          <tr>
            <td>八観フ</td>
            <td>欠航</td>
            <td>10時まで運行、以降の便は欠航です。</td>
          </tr>
          <tr>
            <td>ドリーム</td>
            <td>運休</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main',
  props: ['topPort']
}
</script>

<style scoped>
thead {
  background-color: #E5E5E5;
}
</style>