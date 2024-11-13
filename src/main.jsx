import React from 'react';
import { StrictMode } from 'react'
import { HelmetProvider } from 'react-helmet-async';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux'
import {  store, persistor } from './redux/store';
import './index.css'
import App from './components/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
         <HelmetProvider>
            <App />
          </HelmetProvider>
         
        </BrowserRouter>
      </PersistGate>
    </Provider>
   
  </StrictMode>
);
