import axios from "axios";
import * as API from "../constants";

export interface ILogin {
  username: string;
  password: string;
}

export interface IRegister extends ILogin {
  email: string;
}

export async function login({ username, password }: ILogin) {
  const response = await axios.post(API.LOGIN_URL, { username, password });
  return response.data;
}

export async function register({ username, password, email }: IRegister) {
  const response = await axios.post(API.REGISTER_URL, {
    username,
    password,
    email,
  });
  return response.data;
}

export async function verifyToken() {
  const response = await axios.post(API.AUTH_URL);
  return response.data;
}