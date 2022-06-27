import API from 'api/restApiService';

class EntitiesApi {
  getProjects = () => API.get('/users');
  addJobApplication = (payload) => API.post('/job-applications', { data: payload });
  addSmallChatApplication = (payload) => API.post('/small-chats', { data: payload });
  addLargeChatApplication = (payload) => API.post('/large-chats', { data: payload });
}

export default new EntitiesApi();
