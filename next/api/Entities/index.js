import API from "api/restApiService"

class EntitiesApi {
  getProjects = () => API.get('/projects')
}

export default new EntitiesApi()