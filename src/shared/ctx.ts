import { router } from '@/app/router';
import { createStore } from 'effector';
import { createBrowserRouter } from 'react-router';

export const $router = createStore(createBrowserRouter(router));
