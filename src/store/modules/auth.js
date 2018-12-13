import { AUTH_REQUEST_V1, AUTH_LOGOUT_V1 } from "@/store/actions/auth";

import config from "@/config/config";
import API from "@/utils/api";

const api = new API({
  configuration: config
});

const state = {
  status: "",
  hasLoadOnce: false
};

const getters = {
  authStatus: state => state.status
};

const actions = {
  [AUTH_REQUEST_V1]: ({ commit }) => {
    commit(AUTH_REQUEST_V1);
    window.location.href = api.createUrlAuthorize_V1();
  },
  [AUTH_LOGOUT_V1]: ({ commit }) => {
    localStorage.removeItem("userInfos");
    commit(AUTH_LOGOUT_V1);
    window.location = `${config.FC_URL}${config.LOGOUT_FC_PATH}?id_token_hint=${
      config.CLIENT_ID
    }${config.CLIENT_SECRET}`;
  }
};

const mutations = {
  [AUTH_REQUEST_V1]: state => {
    state.status = "loading";
  },
  [AUTH_LOGOUT_V1]: state => {
    state.status = "Not Connected";
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
