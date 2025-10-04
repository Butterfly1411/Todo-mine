import api from "../api/axios";

const TodoService = {
  getAll: async () => {
    const res = await api.get("todo/todos");
    return res.data;
  },

  create: async (todo) => {
    const res = await api.post("todo/todos", todo);
    return res.data;
  },

  update: async (id, todo) => {
    const res = await api.put(`todo/todos/${id}`, todo);
    return res.data;
  },

  delete: async (id) => {
    const res = await api.delete(`todo/todos/${id}`);
    return res.data;
  },
};

export default TodoService;
