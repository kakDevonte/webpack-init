import { Button } from '@elephas/react-core';
import { useUnit } from 'effector-react';
import { click } from './model';

export const MainPage = () => {
  const [navigate] = useUnit([click]);

  return (
    <div>
      <Button appearance='danger' onClick={() => navigate('/auth')}>
        Critical error happened
      </Button>
      <h1>Hello!</h1>
    </div>
  );
};
