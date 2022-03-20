import axios from "axios";
import { LS_AUTH_TOKEN } from "./base";
import { User } from "../modals/User";
import { BASE_URL } from "./base";

interface LoginRequest {
  email: string;
  password: string;
}
interface LoginResponse {
  data: { is_2fa_enabled: boolean };
  token: string;
  user: User;
}

export const logout = () => {
  localStorage.removeItem(LS_AUTH_TOKEN);
};

export const login = (data: LoginRequest) => {
  const url = BASE_URL + "/login";
  console.log(data);

  // return fetch(url, { method: "POST", body: JSON.stringify(data), headers: { "Content-Type": "application/json" } }).then((response) => {
  //   response.json().then((data) => {
  //     console.log(data);
  //     return response;
  //   });
  // });
  return axios.post<LoginResponse>(url, data).then((response) => {
    console.log(response.data);
    localStorage.setItem(LS_AUTH_TOKEN, response.data.token);
    return response.data.user;
  });
};

interface MeResponse {
  data: User;
}
export const me = () => {
  const url = BASE_URL + "/me";
  return axios.get<MeResponse>(url).then((response) => response.data.data);
};
