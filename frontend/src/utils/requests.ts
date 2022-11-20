import axios from "axios";

export interface users {
  username: string;
  password: string;
}

const connectApi = axios.create({
  baseURL: 'http://localhost:3001',
});

export const setToken = (token: string) => {
  connectApi.defaults.headers.common.Authorization = token;
};

export const postUser = async (endpoint: string, body: any) => {
  const { data } = await connectApi.post(`users/${endpoint}`, body);
  return data;
};

export const getBalance = async () => {
  const { data } = await connectApi.get(`accounts/balance`);
  return data;
}