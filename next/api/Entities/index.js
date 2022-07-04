import API from 'api/restApiService';

class EntitiesApi {
  getProjects = () => API.get('/api/users');
  addJobApplication = (payload) => API.post('/api/job-applications', { data: payload });
  addSmallChatApplication = (payload) => API.post('/api/small-chats', { data: payload });
  addLargeChatApplication = (payload) => API.post('/api/large-chats', { data: payload });
  addBrief = (payload) => API.post('/api/briefs', { data: payload });
  uploadFile = (formData) => API.post('/api/upload', formData);
}

export default new EntitiesApi();
