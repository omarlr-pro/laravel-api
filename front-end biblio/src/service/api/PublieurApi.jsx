import { axiosClient } from "../../api/axios";

const PublieurApi = {
  getCrsrfToken: async () => {
    return await axiosClient.get('/sanctum/csrf-cookie', {
      baseURL: import.meta.env.VITE_BACKEND_URL
    });
  },

  login: async (email, password) => {
    return await axiosClient.post('/api/login', { email, password });
  },

  logout: async () => {
    return await axiosClient.post('/api/logout');
  },

  register: async (name, email, password) => {
    return await axiosClient.post('/api/register', { name, email, password });
  },

  getUser: async () => {
    return await axiosClient.get('/api/user');
  },

  getAllBooks: async () => {
    return await axiosClient.get('/api/books');
  },

  addBook: async ({ name, text, description }) => {
    return await axiosClient.post('/api/books', { name, text, description });
  },
};

export default PublieurApi;
