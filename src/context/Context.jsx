import { createContext, useState } from 'react'

export const LightsContext = createContext()

export function TrafficLightsCTX ({ children }) {
  const [Light1, setLight1] = useState(true)
  const [Light2, setLight2] = useState(false)
  const [Light3, setLight3] = useState(false)
  const [Light4, setLight4] = useState(false)

  return (
    <LightsContext.Provider value={[Light1, setLight1, Light2, setLight2, Light3, setLight3, Light4, setLight4]}>
      {children}
    </LightsContext.Provider>
  )
}