import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './presenter/App';
import reportWebVitals from './reportWebVitals';
import "./i18n/configs";
import { ProvideAuth } from './presenter/hooks/useAuth';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProvideAuth>
      <App />
    </ProvideAuth>
  </React.StrictMode>
);

reportWebVitals();
