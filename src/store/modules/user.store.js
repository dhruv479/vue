import {
  loginUserService,
  registerUserService,
} from "../../services/user.services";

const state = {
  user: {},
};

// Getter functions
const getters = {};

// Actions
const actions = {
  async loginUserAction({ commit }, { email, password }) {
    try {
      const user = await loginUserService({ email, password });
      commit("setUserToken", user.data.token);
    } catch (err) {
      alert(err.message);
    }
  },
  async registerUserAction({ commit }, { email, name, password }) {
    try {
      console.log(email);
      await registerUserService({ email, name, password });
    } catch (err) {
      alert(err.message);
      commit();
    }
  },
};
// Mutations
const mutations = {
  setUserToken(state, token) {
    state.user = token;
  },
};

export const user = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
