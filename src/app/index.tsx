import { createRoot } from 'react-dom/client';

import '@elephas/layout/styles.min.css';
import '@elephas/core/styles.min.css';
import { App } from './app';
import './root.css';

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
