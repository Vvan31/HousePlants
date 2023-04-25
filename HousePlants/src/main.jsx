import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
//Pages
import App from './App'
import { ReduxProvider } from '@/data/redux/store';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReduxProvider>
      <BrowserRouter>
	      <App />  
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>
)
