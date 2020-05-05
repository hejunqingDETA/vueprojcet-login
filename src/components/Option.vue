<template>
  <div class="option">
    <header>
    <h1>{{title}}</h1>
    <el-button class="signout" size="small" @click="retreat">退出</el-button>
    </header>
    <div class="content">
      <ul>
        <li v-for="(item,index) in data[path]" :key="index">
          <el-radio class="option-radio" v-model='option[path]' :label="item" border>
            <span v-if="flag">{{item}}</span>
            <img class="imgurl" :src="item" alt="">
          </el-radio>
        </li>
      </ul>
    </div>
    <div class="selct-btn">
    <el-button type="success" @click="prev">上一步</el-button>
    <el-button type="success" @click="next">下一步</el-button>
    </div>
  </div>
</template>

<script>
export default {
 data () {
    return {
      arr:['选择项目名','选择项目描述','选择项目时间','选择项目备注','选择项目头像'],
      option:{},
      title: '',
      name: '',
      index: 0,
      data:'',
      flag:true
    }
  },
  props:['path'],
  created(){
    this.title = this.arr[this.index]
    let obj = sessionStorage.getItem('data')
    this.data = JSON.parse(obj)
  },
  watch:{
    $route () {
     this.title = this.arr[this.index]
     if(this.index === 4){
       this.flag = false
     }
      // console.log(this.index)
    }
  },
  methods:{
     retreat(){
      this.$router.push({name:'login'})
      sessionStorage.removeItem("data");
    },
    prev(){
    this.index--
    this.$router.back();
    //  console.log(this.data)
    },
    next(){
      this.index++
      let i = this.path.slice(-1)*1+1;	
      if(this.option[this.path]){
          if(i<6){
          this.$router.push({
            name:'option',
            params:{path:'option'+i}
          })
        }else{
          this.$router.push({
            name:'home',
            params:{option:this.option}
          })
          localStorage.setItem('arr',JSON.stringify(this.option))
        }	
      }else{
          this.$message({message:'请选择', center:true})
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
  .content{
    margin-top: 40px;
    width: 100%;
  }
  .content>ul>li{
    list-style: none;
    margin: 0 55px;
  }
  .option-radio{
    width: 100%;
    margin-bottom: 20px;
    padding: 12px 0 0 10px;
    text-align: left;
  }
  .imgurl{
    width:25px;
    height: 25px;
    position: absolute;
    right: 10px;
    top: 5px;
  }
</style>