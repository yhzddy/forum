import axios from "axios";
import store from "../store";
import router from "../router";
import { Message } from "element-ui";

const service = axios.create({
  "Content-Type": "application/json;charest=UTF-8",
  timeout: 2000
});

service.interceptors.request.use(
  config => {
    if (store.state.token) {
      //判断是否存在token，如果存在，则每个http header都加上token
      config.headers.Authorization = `token${store.state.token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

service.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          //返回401清除token信息并跳转到登录页面
          //   store.commit(types.LOGOUT);
          router.replace({
            path: "/",
            query: { redirect: router.currentRoute.fullPath }
          });
      }
    }
    return Promise.reject(error.response.data); //返回接口返回的信息
  }
);

export default axios;
