<template>
  <div class="unbox">
    <div class="topbox">网站便捷导航
      <span @click="addurl">+</span>
      <span><router-link to="/home">首页</router-link> </span>
    </div>
    <!--  -->
    <div class="addurl" v-if="sho" >
      <div @click="quxiao" class="quxiao">X</div>
      <ul>
        <li>地址</li>
        <li><input type="text" v-model="urlmes.urladres"></li>
        <li>名称</li>
        <li><input type="text" v-model="urlmes.urlname"></li>
        <li><button @click="addsql">添加</button> <button @click="quxiao">取消</button></li>
      </ul>
    </div>
    <div class="urlnav" >
      <div class="urlbox" v-for="item in urlList " :key="item.id">
      <div class="urltitle">url</div>
      <div class="bottonbox"><a :href="item.urladres">{{item.urlname}}</a></div>
    </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      urlList: [],
      urlmes: {
        urladres: '',
        urlname: ''
      },
      sho: false
    }
  },
  methods: {
    addurl () {
      this.sho = true
    },
    quxiao () {
      this.sho = false
    },
    // 添加到网站
    async addsql () {
      this.sho = false
      console.log(this.urlmes)
      const { data: res } = await this.$http.post('/url/urladres', this.urlmes)
      console.log(res)
      this.geturl()
      this.urlmes = ''
    },
    async geturl () {
      const { data: res } = await this.$http.get('/url/geturl')
      console.log(res.data)
      this.urlList = res.data
    }

  },
  created () {
    this.geturl()
  }
}
</script>

<style scoped>
.unbox{
 width: 1200px;
 margin: 0 auto;
 height: 600px;
 margin-top: 50px;
 background-color: antiquewhite;
}
.topbox{
height: 60px;
line-height: 60px;
margin-left: 60px;
color: chocolate;
font-size: 20px;
}
.topbox span {
  display: inline-block;
  margin-left: 20px;
}
.topbox span:hover{
  cursor: pointer;
}
.quxiao:hover{
  cursor: pointer;
}
.urlbox{
  margin: 50px;
}
.urltitle{
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  border-radius:50% ;
  background-color: burlywood;
}
.bottonbox{
  margin:10px 0px 10px 20px ;
}
.addurl{
 width: 300px;
 height: 200px;
 background-color: aliceblue;
}
.addurl ul{
  padding: 20px;
}
.addurl ul li button{
  margin:20px ;
}
.urlnav{
  display: flex;
  flex-wrap: wrap;
}
</style>
