import axios from "axios";

const API_URL = "http://localhost:8000/api";

export const axiosInstance = axios.create({
  baseURL: API_URL,
});

axiosInstance.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.authorization = JSON.parse(token);
  }
  return req;
});
