import axios from 'axios';

export const request = (url, method = 'GET', data = {}, headers = {}, parms = {}) => {
  const requestHeaders = {
    ...headers,
    'Content-Type': 'application/json',
  };
  return axios({
    url,
    method,
    data,
    headers: requestHeaders,
    parms,
  });
};
