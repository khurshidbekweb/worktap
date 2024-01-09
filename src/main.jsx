import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryCleint = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
    <QueryClientProvider client={queryCleint}>
      <React.StrictMode>
        <App />
        <ToastContainer position="top-right" autoClose={1500} />
      </React.StrictMode>
    </QueryClientProvider>
  </BrowserRouter>
)
