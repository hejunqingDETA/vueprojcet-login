
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  strict:true,
  state:{
    data:null,
    option:{}
  },
  mutations:{
    setData(state,val){
      state.data = val
      console.log(state.data)
    },
    setOption(state,val){
      state.option = val
      console.log(state.option)
    }
}
})