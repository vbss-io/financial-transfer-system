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

export const verifyToken = async (token: string) => {
  const { data } = await connectApi.get('/token');
  return data;
}

export const postUser = async (endpoint: string, body: any) => {
  const { data } = await connectApi.post(`users/${endpoint}`, body);
  return data;
};

export const getBalance = async () => {
  const { data } = await connectApi.get(`accounts/balance`);
  return data;
}

export const newTransaction = async (body: any) => {
  const { data } = await connectApi.post(`transactions/cash-out`, body);
  return data;
}

export const getAllTransactions = async () => {
  const { data } = await connectApi.get(`transactions/list`);
  return data;
}

export const filterTransactions = async (op: string, date: string) => {
  const { data } = await connectApi.get(`transactions/list/search?${op}&${date}`);
  return data;
}