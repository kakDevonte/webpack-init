import { createStore, createEvent } from 'effector';

const $counter = createStore(0);

const incremented = createEvent();
const decremented = createEvent();

$counter.on(incremented, (counter) => counter + 1);
$counter.on(decremented, (counter) => counter - 1);

export { $counter, incremented, decremented };
