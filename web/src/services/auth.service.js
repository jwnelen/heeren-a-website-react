import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL || "";
const API_URL = `${baseUrl}/api/auth`;

console.log("API url", API_URL)

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "/signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "/signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();