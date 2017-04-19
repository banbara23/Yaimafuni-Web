<template>
  <div id="main">
    <h6>本日の運行情報</h6>
    <p>{{topPort}}</p>
    
    <div class="card">
      <ul class="collection">
        <li class="collection-item avatar">
          <img src="images/yuna.jpg"
               alt=""
               class="circle">
          <span class="title">Title</span>
          <p>First Line
            <br> Second Line
          </p>
          <a href="#!"
             class="secondary-content"><i class="material-icons">grade</i></a>
        </li>
        <li class="collection-item avatar">
          <i class="material-icons circle">folder</i>
          <span class="title">Title</span>
          <p>First Line
            <br> Second Line
          </p>
          <a href="#!"
             class="secondary-content"><i class="material-icons">grade</i></a>
        </li>
        <li class="collection-item avatar">
          <i class="material-icons circle green">insert_chart</i>
          <span class="title">Title</span>
          <p>First Line
            <br> Second Line
          </p>
          <a href="#!"
             class="secondary-content"><i class="material-icons">grade</i></a>
        </li>
        <li class="collection-item avatar">
          <i class="material-icons circle red">play_arrow</i>
          <span class="title">Title</span>
          <p>First Line
            <br> Second Line
          </p>
          <a href="#!"
             class="secondary-content"><i class="material-icons">grade</i></a>
        </li>
      </ul>
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