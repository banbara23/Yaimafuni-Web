<template>
  <div class="row">
    <a harf="">
      <div class="card">
        <div class="card-content" v-if="data">
          <span class="card-title">{{ data.name }}</span>
          <p>{{ data.comment }}</p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'row',
  props: ['data'],
}
</script>

<style scorped>
.row {
  text-align: left;
}
</style>