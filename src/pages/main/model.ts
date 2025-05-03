import { navigateFx } from '@/shared/router/model';
import { createEffect, createEvent, createStore, sample } from 'effector';

export const click = createEvent<string>();

const $counter = createStore(0);

const successFx = createEffect();

successFx.use(() => {
  setTimeout(() => {
    navigateFx('/auth');
  }, 1500);
});

const incremented = createEvent();
const decremented = createEvent();

$counter.on(incremented, (counter) => counter + 1);
$counter.on(decremented, (counter) => counter - 1);

sample({
  clock: click,
  target: successFx
});

export { $counter, incremented, decremented };
