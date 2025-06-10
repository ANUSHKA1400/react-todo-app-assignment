import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Your existing global CSS
import App from './App.jsx'

// Add this line to import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
