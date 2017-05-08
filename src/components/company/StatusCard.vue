<template>
  <div class="row">
    <a harf="">
      <div class="card">
        <div class="card-content" v-if="ports">
          
          <p>{{ ports }}</p>
        </div>
      </div>
     </a>
  </div>
</template>

<script>
export default {
  name: 'row',
  props: ['ports']
}
</script>

<style scorped>
.row {
  text-align: left;
}
</style>