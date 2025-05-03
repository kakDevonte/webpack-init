import { attach, Effect } from 'effector';
import { createGate } from 'effector-react';

const NavigateGate = createGate<(url: string) => void>({ defaultState: () => {} });

const $navigate = NavigateGate.state;

const navigateFx: Effect<string, void> = attach({
  source: $navigate,
  effect: (navigate, url) => navigate(url)
});

export { NavigateGate, navigateFx };
