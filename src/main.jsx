import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Mocktail from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Mocktail  />
  </StrictMode>,
)
