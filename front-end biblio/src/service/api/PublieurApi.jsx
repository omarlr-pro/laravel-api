import { axiosClient } from "../../api/axios";

const PublieurApi = {
  getCrsrfToken: async () => {
    return await axiosClient.get('/sanctum/csrf-cookie', {
      baseURL: import.meta.env.VITE_BACKEND_URL
    });
  },

  login: async (email , password ) => {

     return  await axiosClient.post('/api/login', {email ,password})
      
}

} 

export default PublieurApi;
