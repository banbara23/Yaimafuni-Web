<template>
  <div id="main">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <router-link to="portDetail">
          <CompanyTable :topPort="topPort" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Collection from './Collection';
import CompanyTable from './CompanyTable';
import firebase from 'firebase'
const db = firebase.database()

export default {
  components: {
    Collection,
    CompanyTable
  },
  name: 'main',
  data() {
    return {
      msg: '本日の運行情報'
    }
  },
  firebase: {
    topPort: {
      source: db.ref('/anei_status'),
      asObject: true
    },
  }
}
</script>