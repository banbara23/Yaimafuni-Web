<template>
    <span class="badge orange white-text"
          id="badge"
          >運休あり</span>
</template>

<script>
export default {
  props: ['status'],
  data() {
    return {
      data: text
    }
  },
  computed: {
    getColor: function () {
      if (this.status.code == 'normal') {
        return {
          blue: true
        }
      }
      else if (this.status.code == 'cancel') {
        return {
          red: true
        }
      }
      else if (this.status.code == 'cation') {
        return {
          orange: true
        }
      }
      else if (this.status.code == 'suspend') {
        return {
          red: true
        }
      }
      else {
        return {
          orange: true
        }
      }
    }
  }
}
</script>

<style scorped>
span#badge {
  font-weight: 300;
  border-radius: 2px;
  /*背景の適用範囲を指定：背景をパティングボックスに適用する*/
  background-clip: padding-box;
}
</style>