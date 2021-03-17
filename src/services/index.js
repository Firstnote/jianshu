import axios from "axios";

export const signUp = (params) => {
  console.log(params);
  return axios.post("https://conduit.productionready.io/api/users", {
    user: params,
  });
};

export const signIn = (params) => {
  console.log(params);
  return axios.post("https://conduit.productionready.io/api/users/login", {
    user: params,
  });
};
