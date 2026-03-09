import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import Router from './router/Router'
import WelcomeScreen from './components/WelcomeScreen'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WelcomeScreen>
      <RouterProvider router={Router} />
    </WelcomeScreen>
  </StrictMode>,
)
