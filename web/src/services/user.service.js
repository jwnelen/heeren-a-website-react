import axios from 'axios';
import authHeader from './auth-header';

const baseUrl = process.env.REACT_APP_API_URL || "";
const API_URL = `${baseUrl}/api/test`;

console.log("API url", API_URL)

class UserService {
  getPublicContent() {
    return axios.get(API_URL + '/all');
  }

  getUserBoard() {
    return axios.get(API_URL + '/user', { headers: authHeader() });
  }
}

export default new UserService();