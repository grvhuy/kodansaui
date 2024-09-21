import { useAuth } from '@/context/AuthContext';
import axios from 'axios';

export const useSignIn = () => {
  const { login } = useAuth(); 

  const signIn = async (email: string, password: string) => {
    try {
      const response = await axios.post("/api/Auth/sign-in", { email, password });

      if (response.data.accessToken) {
        document.cookie = `accessToken=${response.data.accessToken}; path=/`;
        // Luu user vao cookie lun 
        document.cookie = `user=${JSON.stringify(response.data.user)}; path=/`;
          
        const userData = {
          id: response.data.user.id,
          email: response.data.user.email,
        };

        login(userData);
      }

      return response.data;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  return { signIn };
};
