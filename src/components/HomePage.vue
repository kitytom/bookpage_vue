<template>
  <div class="homebox">
   <div class="topbox">
    <span class="topboxone">欢迎{{this.$store.state.userdata.nickname}}来的我的博客首页 </span>
    <span><router-link to="/userpage">个人中心</router-link></span>
    <span><router-link to="/userimg" >个人相册</router-link></span>
    <span><router-link to="/shoucan">网站收藏</router-link></span>
  </div>
  <div class="goback" @click="goback">退出</div>
  <!--  -->
  <div class="useritembox" v-for="(item , index) in usertext" :key="item.id" @click="gotitlemessage($event,index,item.id)">
   <div class="useritem-img">
     <router-link to="/bokmessage" > <img :src="item.titleimg" alt=""></router-link>
    </div>
    <div class="uesertext">
    <div class="user-header">
      <h2>{{item.title}}</h2>
      <h5>时间:{{item.time}}</h5>
    </div>
    <div class="usercontent">
    <router-link to="/bokmessage">  {{item.jieshao}} </router-link>
    </div>
    </div>

  </div>
<!--  -->
<div class="footerbox">
  footer
</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      usertext: []
    }
  },
  methods: {

    async getusertext () {
      // 获取用户的发布的博客
      const { data: res } = await this.$http.get('/my/gettext')
      console.log(res.data)
      this.usertext = res.data
    },
    goback () {
      window.sessionStorage.clear('token')
      this.$router.push('/login')
    },
    async gotitlemessage (e, ind, id) {
      // 拿到文章的id去查询并且调到详情页
      // 并且跳到bokmessage
      this.$store.commit('getbokid', id)
      console.log(id)
    }
  },
  created () {
    this.getusertext()
  }
}
</script>

<style scoped>
a{
  display: inline-block;
}
.homebox{
 width: 1200px;
  margin:0 auto;
}
.topbox{
 height: 90px;
line-height: 90px;
position: relative;
 background-color: antiquewhite;
}

.topbox span{
  display: inline-block;
  width: 230px;
}
.topboxone{
 margin-left: 40px;
}
.useritembox{
  width: 100%;
  height: 200px;
  margin-top: 10px;
  display: flex;
}
.useritembox .useritem-img img{
  width: 270px;
  height: 200px;
}
.uesertext{
  display: flex;
}
.user-header{
  width: 230px;
  height: 200px;
  text-align: center;
  background-color: rgb(217, 217, 227);
}
.user-header h2,h5{
  margin-top: 40px;
}
.usercontent{
  width: 700px;
  height: 200px;
  line-height: 200px;
  background-color: rgb(217, 217, 227);
}
.footerbox{
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  background-color:  rgb(217, 217, 227);
}
.goback{
  position: absolute;
  top: 30px;
  right: 200px;
}
.goback:hover{
  cursor: pointer;
}
.userimg{
  position: absolute;
  top:5px ;
  right: 100px;
}
.userimg img{
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
</style>
