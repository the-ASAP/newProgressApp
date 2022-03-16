import API from "api/restApiService"

class EntitiesApi {
  getProjects = () => API.get('/users')
}

export default new EntitiesApi()