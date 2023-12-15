// src/middleware/authMiddleware.ts
import { useAuthStore } from '../store/auth';

const authMiddleware = (next: any) => {
  const authStore = useAuthStore();
  if (!authStore.isAuthenticated) {
    // Redirect or handle unauthenticated access
    return '/signin';
  }
  return next();
};

export default authMiddleware;
