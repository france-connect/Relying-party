import Vue from 'vue'
import Vuex from 'vuex'
import user from "./modules/user"
import auth from "./modules/auth"

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    modules: {
      user,
      auth
    }
  })
}