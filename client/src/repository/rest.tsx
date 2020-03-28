// eslint-disable-next-line no-unused-vars
import axios, { AxiosRequestConfig } from 'axios';

const apiRequest = (url: string, method: AxiosRequestConfig['method'], data = {}, headers = {}, params = {}): any => {
  const requestHeaders = {
    ...headers,
    'Content-Type': 'application/json',
  };
  return axios.request<any>({
    url,
    method,
    data,
    headers: requestHeaders,
    params,
  });
};


export const customRequest = apiRequest;
