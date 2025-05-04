import { Button } from '@elephas/react-core';
import { useUnit } from 'effector-react';
import { navigateToAuth } from './model';

export const MainPage = () => {
  const navigate = useUnit(navigateToAuth);

  return (
    <div>
      <Button appearance='primary' onClick={() => navigate()}>
        Go to auth
      </Button>
    </div>
  );
};
