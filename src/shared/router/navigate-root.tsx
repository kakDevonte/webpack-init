import { useGate } from 'effector-react';
import { useNavigate } from 'react-router';
import { NavigateGate } from './model';

export const NavigateRoot = () => {
  const navigate = useNavigate();
  useGate(NavigateGate, navigate);

  return null;
};
