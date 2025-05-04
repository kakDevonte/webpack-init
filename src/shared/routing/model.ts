import { Effect, attach } from 'effector';
import { createGate } from 'effector-react';
import { NavigateFunction } from 'react-router';

export const NavigateGate = createGate<NavigateFunction>();

export const $navigate = NavigateGate.state;

export const navigateFx: Effect<string, void> = attach({
  source: $navigate,
  effect: (navigate, url) => navigate(url)
});
