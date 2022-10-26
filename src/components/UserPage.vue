<template>
  <div>
    <div class="userbox">
      <div class="userimg">
            <img :src="this.$store.state.userdata[0].user_pic" alt=""/>
      </div>
      <div class="usernickname">
        昵称:{{this.$store.state.userdata[0].nickname}}
      </div>
      <div class="uertitle">
        个人简介:{{this.$store.state.userdata[0].user_title}}
      </div>
      <div class="hrbottpn"></div>
      <div class="usernav">
        <button><router-link to="/usertext">自序</router-link></button>
        <button><router-link to="/userboke">发布博客</router-link></button>
        <button><router-link to="/home">主页</router-link></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  },
  created () {
  }

}
</script>

<style scoped>
.userbox{
  width: 500px;
  height: 500px;
  padding-top: 10px;
  background-color: beige;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 60px;
  text-align: center;
}
.userimg{
  position: relative;
}
.userimg p{
position: absolute;
top: 70px;
left: 41%;
}
.userimg img{
  width: 150px;
  height: 150px;
  border-radius:50% ;
}
.userimg img:hover{
  width: 160px;
  height: 160px;
  border-radius:50% ;
}
.usernickname, .uertitle{
   height: 60px;
   line-height: 40px;
}
.hrbottpn{
  width: 130px;
  margin: 0 auto;
  border-bottom: 1px solid black ;
}
.usernav{
  width: 300px;
  height: 90px;
  line-height: 90px;
  margin: 0 auto;
  text-align: center;
}
.usernav button{
  width: 60px;
  height: 25px;
 margin-left: 20px;
}
.usernav button:hover{
  color: aquamarine;
  background-color: cadetblue;
}
</style>
