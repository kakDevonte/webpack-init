import { navigateFx } from '@/shared/routing/model';
import { createEvent, sample } from 'effector';

export const navigateToAuth = createEvent();

sample({
  clock: navigateToAuth,
  target: navigateFx.prepend(() => '/auth')
});
