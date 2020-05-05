<template>
  <div class="cover">
    <header>
    <h1>设置封面</h1>
    <el-button class="signout" size="small" @click="retreat">退出</el-button>
    </header>
    <div class="portrait">
    <img :src="imgUrl" alt="">
    </div>
    <div class="selct-text">
    <el-button type="success" class="btncover" @click="handleClick">设置封面</el-button>
    </div>
    <footer>
        <span>DANM_AMAZING</span>
    </footer>
  </div>
</template>

<script>

export default {
data(){
  return {
    imgUrl:require("../assets/tx.png"),
      input: ''
  }
},
methods:{
  handleClick(){
    this.$router.push({
    name:'option',
    params:{path:'option1'}
    })
  },
  retreat(){
    this.$router.push({name:'login'})
    sessionStorage.removeItem("data");
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
    margin-left: 20px;
    text-align: left;
    color: white;
    font-size: 20px;
    font-weight: 400;
  }
  .signout{
      position: absolute;
      right: 10px;
      top: 15px;
  }
  .portrait{
    margin: 40px 0;
  }
  .selct-text{
    padding: 0 52px;
  }
  .btncover{
    width: 100%;
    margin-top: 20px;
    font-size: 20px;
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