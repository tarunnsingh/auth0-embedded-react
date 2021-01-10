import jwt_decode from "jwt-decode";
import axios from "axios";
import qs from "querystring";

export default {
  register: async (email, password) => {
    const data = qs.stringify({
      client_id: "rRh4hdm6xqVhbI8iTjUb459cwMK6oBD5",
      email: email,
      password: password,
      connection: "Username-Password-Authentication",
    });

    const config = {
      method: "post",
      url: "https://tarunsingh.us.auth0.com/dbconnections/signup",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    return await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        if (response.status === 200) {
          return {
            message: {
              message: "Successfully Registered. Redirecting to Login Page...",
              msgError: false,
              userEmail: response.data.email,
            },
          };
        }
      })
      .catch(function ({ response }) {
        console.log(response);
        if (response.status === 400) {
          return {
            message: {
              message: "Error with Credentials.",
              msgError: true,
              userEmail: "",
            },
          };
        } else {
          return {
            message: {
              message: "Something went Wrong...",
              msgError: true,
              userEmail: "",
            },
          };
        }
      });
  },
  login: (username, password) => {
    const data = qs.stringify({
      grant_type: "password",
      client_id: "rRh4hdm6xqVhbI8iTjUb459cwMK6oBD5",
      audience: "https://tarunsingh.us.auth0.com/api/v2/",
      username: username,
      password: password,
      scope: "openid",
    });

    const config = {
      method: "post",
      url: "https://tarunsingh.us.auth0.com/oauth/token",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    return axios(config)
      .then(function (response) {
        const token = JSON.stringify(response.data.access_token);
        localStorage.setItem("access_token", token);
        if (response.status === 200) {
          return {
            message: {
              message: "Successfully Logged In. Redirecting...",
              msgError: false,
            },
          };
        }
      })
      .catch(function ({ response }) {
        if (response.status === 400) {
          return {
            message: {
              message: "Error with Credentials.",
              msgError: true,
              userEmail: "",
            },
          };
        } else {
          return {
            message: {
              message: "Something went Wrong...",
              msgError: true,
              userEmail: "",
            },
          };
        }
      });
  },
  getUserProfile: () => {
    const token = JSON.parse(localStorage.getItem("access_token"));
    if (token) {
      var config = {
        method: "get",
        url: "https://tarunsingh.us.auth0.com/userinfo",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      return axios(config)
        .then(function (response) {
          const {
            email,
            nickname,
            name,
            picture,
            updated_at,
            email_verified,
          } = response.data;
          return {
            email,
            nickname,
            name,
            picture,
            updated_at,
            email_verified,
          };
        })
        .catch(function (error) {
          console.log(error);
          return null;
        });
    }
  },
  isAuthenticated: () => {
    const token = JSON.parse(localStorage.getItem("access_token"));
    if (token) {
      const d_token = jwt_decode(token);
      const exp_date = d_token.exp;
      const now = new Date().getTime() / 1000;
      if (token && now < exp_date) {
        return true;
      } else {
        return false;
      }
    }
  },
};
