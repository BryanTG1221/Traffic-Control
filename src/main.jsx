import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { TrafficLightsCTX } from './context/Context.jsx'
import { AmbarCTX } from './context/Ambar.jsx'
import './Styles/Styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TrafficLightsCTX>
      <AmbarCTX>
        <App />
      </AmbarCTX>
    </TrafficLightsCTX>
  </React.StrictMode>,
)
