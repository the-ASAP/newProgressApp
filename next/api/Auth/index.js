import API from 'api/restApiService';
import { apiEmail, apiPassword } from 'constants/data';

class AuthApi {
  getJwtToken = (apiEmail, apiPassword) =>
    API.post('/projects', {
      identifier: apiEmail,
      password: apiPassword
    });
}

export default new AuthApi();
