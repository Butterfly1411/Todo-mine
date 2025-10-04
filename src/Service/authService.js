import api from "../api/axison";

const AuthService = {
  login: async (username, password) => {
    const res = await api.post("/users/login", { username, password });
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
    }
    return res.data;
  },

  register: async (username, email, password) => {
    const res = await api.post("/users/register", { username, email, password });
    return res.data;
  },

  logout: () => {
    localStorage.removeItem("token");
  },
};

export default AuthService;
