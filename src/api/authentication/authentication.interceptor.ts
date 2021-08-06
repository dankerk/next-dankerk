import { AxiosRequestConfig, AxiosResponse, AxiosStatic } from 'axios';

export function addAuthenticationInterceptor(axios: AxiosStatic, { uid }: { uid: string }) {
  axios.interceptors.request.use(function (config: AxiosRequestConfig) {
    config.headers['Authorization'] = `Bearer ${uid}`;
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
}
