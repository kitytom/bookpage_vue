<template>
  <div class="bokebox">
    <div class="tiopbox">
      <div class="hrtop"></div>
      <ul>
        <li>昵称:</li>
        <li>坚持一下，扛过今天。</li>
        <li>HANG THERE , GET THROUGH TODAY</li>
        <li>没有最晚的开始，就从今天开始吧！</li>
        <li>总有一天，那个一点一点可见的的未来，会在心里，也在你的脚下慢慢清透</li>
      </ul>
    </div>
    <!--  -->
    <div class="tiopbox">
      <div class="hrtop"></div>
      <ul>
        <li>昵称:</li>
        <li>坚持一下，扛过今天。</li>
        <li>HANG THERE , GET THROUGH TODAY</li>
        <li>没有最晚的开始，就从今天开始吧！</li>
        <li>总有一天，那个一点一点可见的的未来，会在心里，也在你的脚下慢慢清透</li>
        <div class="hrtop"></div>
      </ul>
    </div>
    <!--  -->
    <div class="userpoho">
      <img src="../assets/picture/1.jpg" alt="">
      <div>遇见未知的你</div>
      <img src="../assets/picture/2.jpg" alt="">
    </div>
    <div class="bottomimg">
     <img src="../assets/picture/3.jpg" alt="">
     <img src="../assets/picture/4.jpg" alt="">
     <img src="../assets/picture/5.jpg" alt="">
     <img src="../assets/picture/6.jpg" alt="">
    </div>
    <!--  -->
    <div class="adduserbok">
      <h4>发布个人博客</h4>
      <ul>
        <li>
          title:<input type="text">
        </li>
        <li>
          time:<input type="date">
        </li>
        <li>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bokebox{
  width: 1000px;
  height:1200px;
  margin: 0 auto;
  background-color: rgb(132, 134, 134);
}
.hrtop{
  width: 500px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 30px;
  border-top: 1px solid black;
}
.tiopbox{
  width: 100%;
  padding-top:100px ;
  text-align: center;
}
.userpoho{
  width: 100%;
  height: 300px;
  background-color: rgb(188, 173, 173);
  display: flex;
  justify-content: space-between;
}
.userpoho div{
  margin-top: 120px;
}
.bottomimg{
  margin-top:20px ;
}
.bottomimg img{
width: 240px;
height: 200px;
border: 5px solid beige;
}
.adduserbok{
  width: 100%;
  height: 300px;
  padding-top: 20px;
  background-color: bisque;
}
.adduserbok ul{
  margin-top: 20px;
}
.adduserbok ul li{
  height: 40px;
  margin-left: 30px
}
</style>
