<template>
  <div class="row">
    <div class="col s12 m6">
    <a harf="">
      <div class="card teal accent-4 hoverable">
        <div class="card-content white-text">
          <span class="card-title">{{ title }}</span>
          <p>{{ msg }}</p>
        </div>
      </div>
      </a>
    </div>
  </div> 
</template>

<script>
export default {
  name: 'row',
  data () {
    return {
      title: 'card title',
      msg: 'I am a very simple card. I am good at containing small bits of information.'
    }
  }
}

</script>

<style scorped>
.row {
  text-align: left;
}
</style>