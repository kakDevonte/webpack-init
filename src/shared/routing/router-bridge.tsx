import { useGate } from 'effector-react';
import { Outlet, useNavigate } from 'react-router';
import { NavigateGate } from './model';

export const RouterBridge = () => {
  const navigate = useNavigate();

  useGate(NavigateGate, navigate);

  return <Outlet />;
};
