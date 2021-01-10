// REGISTER
var axios = require("axios");
var qs = require("qs");
var data = qs.stringify({
  client_id: "rRh4hdm6xqVhbI8iTjUb459cwMK6oBD5",
  email: "sample@email.com",
  password: "Pass@1234",
  connection: "Username-Password-Authentication",
});
var config = {
  method: "post",
  url: "https://tarunsingh.us.auth0.com/dbconnections/signup",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Cookie:
      "__cfduid=d17fdf56b9d0fee495b0c4d17eb23eab81610110993; did=s%3Av0%3Addf45290-51b1-11eb-8964-558ccb108c60.az4RB4USX7nCrl12MK5XiHLuUQhRZiRo%2BJrx5qLTSH0; did_compat=s%3Av0%3Addf45290-51b1-11eb-8964-558ccb108c60.az4RB4USX7nCrl12MK5XiHLuUQhRZiRo%2BJrx5qLTSH0",
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });

// LOGIN or GET ACCESS TOKEN
var axios = require("axios");
var qs = require("qs");
var data = qs.stringify({
  grant_type: "password",
  client_id: "rRh4hdm6xqVhbI8iTjUb459cwMK6oBD5",
  audience: "https://tarunsingh.us.auth0.com/api/v2/",
  username: "sample@email.com",
  password: "Pass@1234",
  scope: "openid",
});
var config = {
  method: "post",
  url: "https://tarunsingh.us.auth0.com/oauth/token",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Cookie:
      "__cfduid=d17fdf56b9d0fee495b0c4d17eb23eab81610110993; did=s%3Av0%3Addf45290-51b1-11eb-8964-558ccb108c60.az4RB4USX7nCrl12MK5XiHLuUQhRZiRo%2BJrx5qLTSH0; did_compat=s%3Av0%3Addf45290-51b1-11eb-8964-558ccb108c60.az4RB4USX7nCrl12MK5XiHLuUQhRZiRo%2BJrx5qLTSH0",
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });

//GET USER INFO
var axios = require("axios");

var config = {
  method: "get",
  url: "https://tarunsingh.us.auth0.com/userinfo",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik85dV8weUt5dEljU09vM25KT04ydSJ9.eyJpc3MiOiJodHRwczovL3RhcnVuc2luZ2gudXMuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDVmZjg1ODMzNzgyMzhiMDA3MTk3OGY3OCIsImF1ZCI6WyJodHRwczovL3RhcnVuc2luZ2gudXMuYXV0aDAuY29tL2FwaS92Mi8iLCJodHRwczovL3RhcnVuc2luZ2gudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTYxMDExNDEwNCwiZXhwIjoxNjEwMjAwNTA0LCJhenAiOiJyUmg0aGRtNnhxVmhiSThpVGpVYjQ1OWN3TUs2b0JENSIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwgYWRkcmVzcyBwaG9uZSByZWFkOmN1cnJlbnRfdXNlciB1cGRhdGU6Y3VycmVudF91c2VyX21ldGFkYXRhIGRlbGV0ZTpjdXJyZW50X3VzZXJfbWV0YWRhdGEgY3JlYXRlOmN1cnJlbnRfdXNlcl9tZXRhZGF0YSBjcmVhdGU6Y3VycmVudF91c2VyX2RldmljZV9jcmVkZW50aWFscyBkZWxldGU6Y3VycmVudF91c2VyX2RldmljZV9jcmVkZW50aWFscyB1cGRhdGU6Y3VycmVudF91c2VyX2lkZW50aXRpZXMiLCJndHkiOiJwYXNzd29yZCJ9.SQ7NvwowGiAc-UjJJaYjrPHD5qlGjGe4jn3YD4JssRHcI6oioknKkGNSABZhDoWB26_QG_94K8qbN9ZaKHewYXUDjr8l4XXpJihlyjGK6u_VvB90jwJA9VrWHttirmKPZvqYHMFXKhXlwgqkVw5VHrgKhKe_m5XrbXeci23QbznIbUn0pbeRIN_FX2RpVCsOs51ge9VShzwwrW5IYWc_s7pWUkeC_sG-pC_7f69-Wq8PsX9beiFRWGRgfFxO1hfw2ebfacnmILOYF3hhE9SlwYbIsn1P2tnEWURUazL_inXpTCrVde8mXtfW1nmq0MckZNwTY7eiqLYXn5v9ofYNLA",
    Cookie:
      "__cfduid=d17fdf56b9d0fee495b0c4d17eb23eab81610110993; did=s%3Av0%3Addf45290-51b1-11eb-8964-558ccb108c60.az4RB4USX7nCrl12MK5XiHLuUQhRZiRo%2BJrx5qLTSH0; did_compat=s%3Av0%3Addf45290-51b1-11eb-8964-558ccb108c60.az4RB4USX7nCrl12MK5XiHLuUQhRZiRo%2BJrx5qLTSH0",
  },
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
