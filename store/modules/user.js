"use strict";

import {
  USER_REQUEST_V1,
  USER_SUCCESS_V1,
  USER_ERROR_V1,
  USER_INFO_V1
} from "../actions/user";

import config from "../../config/config";
import API from "../../utils/api";

const api = new API({
  configuration: config
});

const state = {
  status: "",
  hasLoadOnce: false,
  access_token: "",
  userInfo: {}
};

const getters = {
  accessToken: state => state.access_token,
  userInfos: state => state.userInfo
};

const actions = {
  [USER_REQUEST_V1]: ({ commit }, code) => {
    return new Promise((resolve, reject) => {
      commit(USER_REQUEST_V1);
      api
        .createCallTokenEndpoint_V1(code)
        .then(response => {
          commit(USER_SUCCESS_V1, response.data.access_token);
          resolve(response);
        })
        .catch(error => {
          commit(USER_ERROR_V1, error);
          reject(error);
        });
    });
  },
  [USER_INFO_V1]: ({ commit }, token) => {
    return new Promise((resolve, reject) => {
      commit(USER_INFO_V1);
      api
        .getUserInfo_V1(token)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          commit(USER_ERROR_V1, error);
          reject(error);
        });
    });
  }
};

const mutations = {
  [USER_REQUEST_V1]: state => {
    state.status = "done";
  },
  [USER_INFO_V1]: state => {
    state.status = "loading";
  },
  [USER_ERROR_V1]: state => {
    state.status = "failed";
  },
  [USER_SUCCESS_V1]: (state, response) => {
    state.access_token = response;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
