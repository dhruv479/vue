import Axios from "axios";
// import Vue from 'vue';

const instance = Axios.create({
  baseURL: `http://localhost:5300/api`,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${localStorage.getItem("sid")}`,
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

instance.interceptors.request.use(
  (config) => {
    if (localStorage.getItem("sid")) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${localStorage.getItem("sid")}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    // if (response.config.method !== 'get' && response.data.message) {}
    return response;
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance;
