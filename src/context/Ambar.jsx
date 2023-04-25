import { createContext, useState } from 'react'

export const AmbarContext = createContext()

export function AmbarCTX ({ children }) {
  const [ambarLight, setAmbarLight] = useState(false)

  return (
    <AmbarContext.Provider value={[ambarLight, setAmbarLight]}>
      {children}
    </AmbarContext.Provider>
  )
}