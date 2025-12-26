import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { updateSEO } from './utils/seo'

// Setup initial SEO when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => updateSEO(window.location.pathname))
} else {
  updateSEO(window.location.pathname)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

