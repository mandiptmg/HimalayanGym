import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './context/context.jsx'
import { StyledEngineProvider } from '@mui/material/styles'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <AppProvider>
        <App />
      </AppProvider>
    </StyledEngineProvider>
  </React.StrictMode>
)
