import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App_28 from './App_28';
import { DemoProvider_28 } from './context/DemoContext_28';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DemoProvider_28>
    <App_28 />
    </DemoProvider_28>
  </React.StrictMode>
);


