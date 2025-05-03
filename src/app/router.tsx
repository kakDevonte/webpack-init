import { MainPage } from '@/pages/main/page';
import { AuthPage } from '@/pages/auth/page';

export const router = [
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/auth',
    element: <AuthPage />
  }
];
