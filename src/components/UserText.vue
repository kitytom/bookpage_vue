<template>
  <div class="zixubox">
  <div class="userimgbox">
    <div class="userimgbox">
      <img :src="this.$store.state.userdata[0].user_pic" alt="">
    </div>
  </div>
  <div class="contentbox">
   <div class="user-content">
     <div class="contentleft">
      <ul>
        <li>姓名:{{this.$store.state.userdata[0].username}}</li>
        <li>昵称：{{this.$store.state.userdata[0].nickname}}</li>
        <li>学历：本科</li>
      </ul>
     </div>
     <div class="centerbonx">
      <ul>
        <li>QQ:{{this.$store.state.userdata[0].email}}</li>
        <li>GetHub:</li>
        <li>博客：</li>
      </ul>
     </div>
     <div class="rightbox">
      <ul>
      <li>我是一个热爱钻研计算机技术的少年，从小</li>
      <li>开始对计算机有极大的兴趣。作为计算机专：</li>
      <li>业的学生，我热爱我的专业并为其投入巨大</li>
    </ul>
  </div>
   </div>

   <div class="jinengbox">
    <div>html+css</div>
    <div>javascropt</div>
    <div>vue</div>
    <div>微信小程序</div>
   </div>
   <!--  -->
   <div class="userwork">
    <div>购物app</div>
    <div>个人博客</div>
    <div>微信小程序</div>
   </div>
   <!--  -->
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userimg: ''
    }
  },
  created () {
    this.userimg = this.$store.state.userdata.user_pic
  }
}
</script>

<style scoped>
.zixubox{
  width: 1400px;
  height: 100%;
  margin: 0 auto;
}
.userimgbox{
 width: 200px;
 height: 713px;
 text-align: center;
 padding-top: 100px;
 background-color: rgb(189, 209, 209);
 position: fixed;
 top: 1px;
}
.contentbox{
  margin-top: 20px;
height: 750px;
margin-left: 200px;
}
.userimgbox img{
  width: 100px;
  height: 100px;
  border-radius:50% ;
}
.userimgbox img:hover{
  width: 120px;
  height: 120px;
  border-radius:50% ;
}
.user-content{
  height: 300px;
 position: relative;
  background-color: rgb(199, 196, 193);
}
.user-content{
  display: flex;
  justify-content: space-between;
}
.contentleft ,.centerbonx,.rightbox{
  width: 350px;
  height: 300px;

}
.contentleft ul li,.centerbonx ul li ,.rightbox ul li{
width: 300px;
height: 50px;
margin:20px 0px 0px 50px;

}
.contentleft ul ,.centerbonx ul  ,.rightbox ul {
  margin-top: 80px;
}
.jinengbox{
  width: 100%;
  text-align: center;
  background-color: rgb(237, 159, 64);
 display: flex;
}
.jinengbox div{
  width: 300px;
  height: 200px;
  line-height: 200px;
  font-size: 20px;
  text-align: center;
}
.userwork{
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-around;
  background-color: azure;
}
.userwork div{
  width: 300px;
  height:300px ;
  padding-top: 20px;
}
</style>
