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
  getUser: async () => {
    return await axiosClient.get('/api/user');
  },
};

export default PublieurApi;
