// --- Polyfills for Firebase/SDK compatibility in Vite ---
if (typeof window !== 'undefined') {
  (window as any).global = window;
  if (typeof (window as any).process === 'undefined') {
    (window as any).process = { env: {} };
  }
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
