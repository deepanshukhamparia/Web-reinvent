// src/store/auth.ts
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    // Other authentication-related state
  }),

  actions: {
    login() {
      // Authentication logic
    },

    logout() {
      // Logout logic
    },
  },
});

// src/store/data.ts

export const useDataStore = defineStore('data', {
  state: () => ({
    // Your data-related state
  }),

  actions: {
    fetchData() {
      // Fetch data logic
    },
  },
});
