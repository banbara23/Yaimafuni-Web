<template>
  <div id="main" class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <router-link to="portDetail">
          <CompanyTable></CompanyTable>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Collection from './Collection';
import CompanyTable from './CompanyTable';
export default {
  components: {
    Collection,
    CompanyTable
  },
  name: 'main',
  data () {
    return {
      msg: '本日の運行情報'
    }
  }
}
</script>