<template>
  <div class="reg">
      <header>
        <h1>注册</h1>
      </header>
      <div class="selct">
        <el-input class="selct-input" v-model="name" placeholder="账号"></el-input>
        <el-input class="selct-pawd" placeholder="请输入密码" v-model="pwd" show-password></el-input>
         <el-button type="success" class="btnreg" @click="handlreg">注册</el-button>
      </div>
      <footer>
          <span>DANM_AMAZING</span>
      </footer>
  </div>
</template>

<script>
export default {
  data(){
    return{
      name:'',
      pwd:'',
    }
  },
  methods:{
    handlreg(){
      if(this.name === '' || this.pwd === ''){
        this.$message({message:'请填写账号或密码', center:true})
      }else{
        localStorage.setItem('account',this.name)
        localStorage.setItem('passwd',this.pwd)
        this.$router.push({name:'login'})
        this.$message({message:'注册成功', center:true})
      }
    }
  }
   
}
</script>

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
  .selct{
      margin-top: 60px;
    padding: 0 52px;
  }
  .selct-input{
    margin-bottom: 20px;
  }
  .selct-pawd{
      margin-bottom: 20px;
  }
  .btnreg{
    width: 100%;
    margin-top: 40px;
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