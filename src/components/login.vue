<template>
  <div class="login">
      <header>
        <h1>登录</h1>
      </header>
      <div class="portrait">
        <img :src="imgUrl" alt="">
      </div>
      <div class="selct-text">
        <el-input class="selct-input" v-model="input" placeholder="账号"></el-input>
        <el-input class="selct-pawd" placeholder="请输入密码" v-model="pawd" show-password></el-input>
        <el-button type="success" class="btnlogin" @click="handleClick">登录</el-button>
        <el-button type="success" class="btnlogin" @click="handlereg">注册</el-button>
      </div>
      <footer>
          <span>DANM_AMAZING</span>
      </footer>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  data(){
    return {
      imgUrl:require("../assets/tx.png"),
      input: '',
      pawd:'',
      flag: false,
      data:''
  //  token: '',
    }
  },
  methods:{
    handlereg(){
      this.$router.push({name:'account'})
    },
    handleClick(){
      if(this.input === '' ||  this.pawd === ''){
        this.$message({message:'请填写账号或密码,未注册账号请先注册', center:true})
      }else if(this.input === localStorage.getItem('account') && this.pawd === localStorage.getItem('passwd')){
        axios.get('static/data.json').then((res)=>{
          // console.log(res.data)
          this.data = res.data
          this.$store.commit('setData', this.data) 
          sessionStorage.setItem('data',JSON.stringify(this.data))
        })
        //路由跳转
        if(localStorage.getItem('arr')){   
           this.$router.push({name:'home'})
        }else{
          this.$router.push({name:'cover'}) 
        }

      }else{
        this.$message({message:'账号或密码输入错误，未注册账号请先注册', center:true})
      }
      // axios({
      //   url:'https://api.github.com/user/repos',
      //   method:'GET',
      //   headers:{'Authorization':'token '+this.token}
      // }).then((res)=>{
      //   localStorage.setItem('token',this.token)
      //   console.log(res.data)
      // })
    }
  },
  watch:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header{
    width: 100%;
    height: 60px;
    background: #8ccf5e;
    line-height: 60px;
  }
  header>h1{
    text-align: center;
    color: white;
    font-size: 24px;
    font-weight: 500;
  }
  .portrait{
    margin: 40px 0;
  }
  .selct-text{
    padding: 0 52px;
  }
  .selct-input{
    margin-bottom: 10px;
  }
  .btnlogin{
    margin-top: 20px;
  }
  footer{
    width: 100%;
    position: absolute;
    bottom: 30px;
    left: 0;
    text-align: center;
  }
  footer>span{
    color: #72da2d;
  }
</style>
