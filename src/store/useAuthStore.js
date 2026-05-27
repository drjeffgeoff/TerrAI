import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { generateToken, logout } from '../utils/auth';

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      isLoading: false,
      error: null,
      
      login: async (email, password) => {
        set({ isLoading: true, error: null });
        try {
          // Simulate API call - In production, connect to your backend
          const users = JSON.parse(localStorage.getItem('terramoist_users') || '[]');
          const user = users.find(u => u.email === email);
          
          if (!user) {
            throw new Error('User not found');
          }
          
          // Verify password (in production, this should be done on backend)
          if (user.password !== password) {
            throw new Error('Invalid credentials');
          }
          
          const { password: userPassword, ...userWithoutPassword } = user;
          void userPassword;
          const token = generateToken(userWithoutPassword);
          
          set({ 
            user: userWithoutPassword, 
            token, 
            isLoading: false,
            error: null
          });
          
          return true;
        } catch (error) {
          set({ error: error.message, isLoading: false });
          return false;
        }
      },
      
      logout: () => {
        logout();
        set({ user: null, token: null, error: null });
      },
      
      register: async (userData) => {
        set({ isLoading: true, error: null });
        try {
          const users = JSON.parse(localStorage.getItem('terramoist_users') || '[]');
          
          if (users.find(u => u.email === userData.email)) {
            throw new Error('User already exists');
          }
          
          const newUser = {
            id: Date.now().toString(),
            ...userData,
            createdAt: new Date().toISOString()
          };
          
          users.push(newUser);
          localStorage.setItem('terramoist_users', JSON.stringify(users));
          
          set({ isLoading: false });
          return true;
        } catch (error) {
          set({ error: error.message, isLoading: false });
          return false;
        }
      },
      
      clearError: () => set({ error: null })
    }),
    {
      name: 'auth-storage',
      getStorage: () => localStorage
    }
  )
);

export default useAuthStore;