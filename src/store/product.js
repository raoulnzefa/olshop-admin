const state = {
  items: []
};

const getters = {
  ITEMS : state => {
      return state.items;
  }
};

const mutations = {
  STORE_ITEMS : (state, playload) => {
      state.items = playload;
  }
};

const actions = {
  STORE_ITEMS : (context, playload) => {
      context.commit('STORE_ITEMS', playload);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};