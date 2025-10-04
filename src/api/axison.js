import axios from "axios";

const api = axios.create({
  baseURL: "https://todo-production-35f6.up.railway.app/api/todo", // backend URL
});

// Auth interceptor qo‘shamiz
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
