<template>
  <div class="home">
    <header>
    <h1>首页</h1>
    <el-button class="signout" size="small" @click="retreat">退出</el-button>
    </header>
    <div class="portrait">
    <img :src="imgUrl" alt="" class="imgbor">
    </div>
    <div class="content">
      <p v-for="(name,index) in arr" :key="index">
        <span>{{name}}:</span><span>{{content[index]}}</span>
      </p>
       
    </div>
    <div class="selct-text">
    <el-button type="success" class="btnhome" @click="rebuild">重设封面</el-button>
    </div>
  </div>
</template>

<script>
export default {
data(){
    return {
      imgUrl:'',
      input: '',
      option:{},
      arr:['项目名','项目描述','项目时间','项目备注'],
      i:''
    }
  },
  computed:{
    content(){
      let msg = Object.values(this.option)
      return msg
    }
  },
  created(){
    let obj = localStorage.getItem('arr')
    this.option = JSON.parse(obj)

    let end = this.content[this.content.length-1]
    // console.log(end)   
    this.imgUrl = end
  },
  methods:{
    rebuild(){
      this.$router.push({name:'option',params:{path:'option1'}})
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
   .content{
     width: 100%;
   }
  .content>p{
    display: block;
    margin: 10px auto;
    width: 250px;
    font-size: 16px;
  }
  .content>p>span:nth-child(1){
    color: teal;
    margin-right: 10px;
    width: 70px;
    text-align: right;
    float: left;
  }
  .content>p>span:nth-child(2){
    width: 180px;
     text-align: left;
  }
  .signout{
      position: absolute;
      right: 10px;
      top: 15px;
  }
  .portrait{
    margin: 40px 0;
  }
  .portrait>img{
    width:120px;
    height: 120px;
  }
  .selct-text{
    padding: 0 52px;
  }
  .btnhome{
    width: 100%;
    margin-top: 20px;
    font-size: 20px;
  }
  .imgbor{
  border: 2px solid #8ccf5e;
  }
</style>