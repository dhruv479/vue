import api from "./api.interface";
import URL from "./url";

export const loginUserService = ({ email, password }) =>
  api
    .post(URL.AUTH_LOGIN, { email, password })
    .then((response) => response.data)
    .catch((error) => error.response.data);

export const registerUserService = ({ name, email, password }) =>
  api
    .post(URL.AUTH_REGISTER, { email, name, password })
    .then((response) => response.data)
    .catch((error) => error.response.data);
