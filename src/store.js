import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    index: 0
  },
  mutations: {
    change(state,index){
      state.index = index;
    }
  },
  getters:{
    getIndex(state){
      return state.index;
    }
  },
  actions: {

  }
})
