import axios from 'axios';
// const apiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
const apiUrl = 'https://strapi.progressapp.ru';

class API {
  constructor() {
    this.url = apiUrl || '';
  }

  handleSuccess = (response) => response;

  handleError = (error) => Promise.reject(error);

  create = (headers) => {
    // const token = apiToken || '';
    const token = '';
    const headerAuth = token && { Authorization: `Bearer ${token}` };
    const service = axios.create({
      headers: {
        ...headers,
        ...headerAuth,
        'Content-Type': 'application/json'
      }
    });
    service.interceptors.response.use(this.handleSuccess, this.handleError);
    return service;
  };

  get = (path = '', data = {}, headers) => {
    const service = this.create(headers);
    return service.request({
      method: 'GET',
      url: `${this.url}${path}`,
      data
    });
  };

  post = (path = '', data = {}, headers) => {
    const service = this.create(headers);
    return service.request({
      method: 'POST',
      url: `${this.url}${path}`,
      data
    });
  };

  put = (path = '', data = {}, headers) => {
    const service = this.create(headers);
    return service.request({
      method: 'PUT',
      url: `${this.url}${path}`,
      data
    });
  };

  delete = (path = '', params, headers) => {
    const service = this.create(headers);
    return service.request({
      method: 'DELETE',
      url: `${this.url}${path}`,
      params
    });
  };
}

export default new API();
