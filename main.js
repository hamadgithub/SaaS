import './css/bootstrap.min.css'
import './css/app.min.css'
import './css/icons.min.css'
import './css/custom.min.css'

import 'bootstrap'
import '@popperjs/core'
import 'node-waves'

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Waves effect
  Waves.init()
  
  // Initialize Bootstrap components
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
})