<template>
  <div class="container">
    <div class="login-wrapper">
        <div class="header">Login</div>
        <div class="form-wrapper">
            <input type="text" name="username" placeholder="username" class="input-item" v-model="userdata.username">
            <input type="password" name="password" placeholder="password" class="input-item" v-model="userdata.password">
            <div class="btn" @click="gohome">Login</div>
        </div>
        <div class="msg">
            Don't have account?
            <router-link to="/reguser">Sign up</router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      userdata: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async gohome () {
      // this.$router.push('/home')
      // console.log(this.userdata)
      const { data: res } = await this.$http.post('/api/login', this.userdata)
      console.log(res)
      if (!res.token) {
        return console.log('登录失败')
      } else {
        window.sessionStorage.setItem('token', res.token)
        this.getuser()
        this.$router.push('/home')
      }
    },
    async getuser () {
      const { data: res } = await this.$http.get('/my/getuser')
      // console.log(res)
      this.$store.commit('getudata', res.data)
      console.log(this.$store.state.userdata)
    }
  }
}
</script>

<style>
.container {
  height: 710px;
  background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
}
.login-wrapper {
  background-color: #fff;
  width: 358px;
  height: 588px;
  border-radius: 15px;
  padding: 0 50px;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.header {
  font-size: 38px;
  font-weight: bold;
  text-align: center;
  line-height: 200px;
}
.input-item {
  display: block;
  width: 100%;
  margin-bottom: 20px;
  border: 0;
  padding: 10px;
  border-bottom: 1px solid rgb(128, 125, 125);
  font-size: 15px;
  outline: none;
}
.input-item:placeholder {
  text-transform: uppercase;
}
.btn {
  text-align: center;
  padding: 10px;
  width: 100%;
  margin-top: 40px;
  background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);
  color: #fff;
}
.btn:hover{
cursor: pointer;
}
.msg {
  text-align: center;
  line-height: 88px;
}
a {
  text-decoration-line: none;
  color: #abc1ee;
}
</style>
