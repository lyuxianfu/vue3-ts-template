import axios from 'axios';

const fetch = axios.create({
  baseURL: '',
  timeout: 5000,
});

fetch.interceptors.request.use((config) => {
  return config;
});

fetch.interceptors.response.use((data) => {
  return data;
});

interface FetchConfig {
  url: string;
  data?: unknown;
}

export default {
  get: ({ url, data }: FetchConfig) => {
    return fetch(url, { data, method: 'get' }).then((res) => {
      return res;
    });
  },
  post: ({ url, data }: FetchConfig) => {
    return fetch(url, { params: data, method: 'post' }).then((res) => {
      return res;
    });
  },
};
