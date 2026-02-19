import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppReact18 from './AppReact18.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppReact18 />
  </StrictMode>,
)
