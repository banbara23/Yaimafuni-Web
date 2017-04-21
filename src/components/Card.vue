<template>
  <div class="row">
    <a harf="">
      <div class="card">
        <div class="card-content">
          <span class="card-title">{{ title }}</span>
          <p>{{ contents }}</p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'row',
  props: ['title','contents'],
}
</script>

<style scorped>
.row {
  text-align: left;
}
</style>