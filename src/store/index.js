import 'es6-promise/auto' // required for vuex to build
import Vue from 'vue'
import Vuex from 'vuex'
import constants from '../constants/constants'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gameState: constants.gameStates.INACTIVE,
    gameScore: 0
  },
  mutations: {
    LOADGAME (state) {
      state.gameState = constants.gameStates.OPENING;
    },
    STARTGAME (state) {
      state.gameState = constants.gameStates.ACTIVE;
    },
    CLOSEGAME (state) {
      state.gameState = constants.gameStates.CLOSING;
    },
    REMOVEGAME (state) {
      state.gameState = constants.gameStates.INACTIVE;
    }
  }
});
