import Vue from 'vue';
import Vuex from 'vuex';

import Tasks from'./modules/tasks/index';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules:{
    Tasks,
  }
});
