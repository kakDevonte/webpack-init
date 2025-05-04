import { MainPage } from '@/pages/main/page';
import { AuthPage } from '@/pages/auth/page';
import { createBrowserRouter } from 'react-router';
import { RouterBridge } from '@/shared/routing/router-bridge';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RouterBridge />,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
      {
        path: '/auth',
        element: <AuthPage />
      }
    ]
  }
]);
