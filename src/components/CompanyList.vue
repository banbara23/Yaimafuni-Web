<template>
  <div id="main"
       class="row">
    <h5>本日の運行情報</h5>
    <p>{{Status.comment}}</p>
    <p>{{Status.updateTime}}</p>
  
    <div class="card">
      <ul class="collection">
  
        <li class="collection-item">
          <router-link to="portDetail">
            <span class="title">{{Status.statuses.taketomi.name}}</span>
            <p><span id="status"
                    class="blue-text">{{Status.statuses.taketomi.status.text}}</span>
              <br> {{Status.statuses.taketomi.comment}}
            </p>
          </router-link>
        </li>
  
        <li class="collection-item">
          <span class="title">{{Status.statuses.kohama.name}}</span>
          <p>{{Status.statuses.kohama.status.text}}
            <br> {{Status.statuses.kohama.comment}}
          </p>
        </li>
  
        <li class="collection-item">
          <span class="title">{{Status.statuses.kuroshima.name}}</span>
          <p>{{Status.statuses.kuroshima.status.text}}
            <br> {{Status.statuses.kuroshima.comment}}
          </p>
        </li>
  
        <li class="collection-item">
          <span class="title">{{Status.statuses.uehara.name}}</span>
          <p>{{Status.statuses.uehara.status.text}}
            <br> {{Status.statuses.uehara.comment}}
          </p>
        </li>
  
        <li class="collection-item">
          <span class="title">{{Status.statuses.hatoma.name}}</span>
          <p>{{Status.statuses.hatoma.status.text}}
            <br> {{Status.statuses.hatoma.comment}}
          </p>
        </li>
  
        <li class="collection-item">
          <span class="title">{{Status.statuses.oohara.name}}</span>
          <p>{{Status.statuses.oohara.status.text}}
            <br> {{Status.statuses.oohara.comment}}
          </p>
        </li>
  
        <li class="collection-item">
          <span class="title">{{Status.statuses.hateruma.name}}</span>
          <p>{{Status.statuses.hateruma.status.text}}
            <br> {{Status.statuses.hateruma.comment}}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
const db = firebase.database()

export default {
  name: 'main',
  firebase: {
    Status: {
      source: db.ref('/anei_status'),
      asObject: true
    }
  }
}
</script>

<style scoped>
thead {
  background-color: #E5E5E5;
}

span.title {
  font-weight: bold;
}

span#status {
  font-weight: bold;
}
</style>