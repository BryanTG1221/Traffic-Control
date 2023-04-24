import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { TrafficLightsCTX } from './context/Context.jsx'
import './Styles/Styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TrafficLightsCTX>
      <App />
    </TrafficLightsCTX>
  </React.StrictMode>,
)
