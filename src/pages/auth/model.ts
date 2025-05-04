import { createEffect, Effect, sample } from 'effector';
import { createGate } from 'effector-react';

export const PageGate = createGate<{ param: string | null }>();

const logParamFx: Effect<{ param: string | null }, void> = createEffect();

logParamFx.use((params) => {
  console.log(params);
});

sample({
  clock: PageGate.open,
  source: PageGate.state,
  target: logParamFx
});
