<template>
  <div class="bokebox">
    <div class="title">title{{this.$store.state.ID}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bokmess: ''
    }
  },
  methods: {
  },
  created () {
  }
}
</script>

<style scoped>
.bokebox{
  width: 1000px;
  height: 100%;
  margin: 0 auto;
}
.title{
  height: 60px;
  line-height: 60px;
  text-align: center;
}
</style>
