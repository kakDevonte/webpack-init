import { BrowserRouter, Route, Routes } from 'react-router';

import { NavigateRoot } from '@/shared/router/navigate-root';
import { MainPage } from '@/pages/main/page';
import { AuthPage } from '@/pages/auth/page';

export const App = () => {
  return (
    <BrowserRouter>
      <NavigateRoot />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/auth' element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
};
