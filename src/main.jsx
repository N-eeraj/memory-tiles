// react imports
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// component imports
import ContextProvider from '@components/ContextProvider'

// style imports
import '@styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
)
