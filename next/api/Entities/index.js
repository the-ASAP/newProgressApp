import API from 'api/restApiService';

class EntitiesApi {
  getProjects = () => API.get('/users');
  addJobApplication = (payload) => API.post('/job-applications', { data: payload });
}

export default new EntitiesApi();
