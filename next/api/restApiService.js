import axios from 'axios'

class API {
  constructor() {
    this.url = process.env.REACT_APP_API_URL || '';
  }

  handleSuccess = (response) => response

  handleError = (error) => Promise.reject(error)

  create = (headers) => {
    const service = axios.create({
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      }
    })
    service.interceptors.response.use(this.handleSuccess, this.handleError)
    return service
  }

  get = (path = '', params, headers) => {
    const service = this.create(headers);
    return service.request({
      method: 'GET',
      url: `${this.url}${path}`,
      params
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

export default new API()