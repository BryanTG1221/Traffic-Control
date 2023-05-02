import { useState, useEffect } from "react";
import Styles from './Styles/Display.module.css'

export function Display({ activeDisplay, type }) {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [color, setColor] = useState(false)
  const [fase, setFase] = useState(1);
  let interval
  
  useEffect(() => {

    if (activeDisplay && type === 'normal') {
      interval = setInterval(() => {
        setCurrentNumber(currentNumber => currentNumber + 1)
      }, 1000)
      return () => clearInterval(interval)
    } else if ( type === 'normal') {
      clearInterval(interval)
      setCurrentNumber(0)
      setFase(1)
    } else if (activeDisplay && type === 'ambar') {
      interval = setInterval(() => {
        setColor(color => !color)
      }, 500)
      setColor(false)
      return () => clearInterval(interval)
    } else if (type === 'ambar') {
      clearInterval(interval)
      setColor(false)
    }
  }, [activeDisplay, type])

  useEffect(() => {
    if (currentNumber > 17 && fase === 1) {
      setCurrentNumber(1)
      setFase(2)
    } else if (currentNumber > 3 && fase === 2) {
      setCurrentNumber(1)
      setFase(3)
    } else if (currentNumber > 3 && fase === 3) {
      setCurrentNumber(1)
      setFase(4)
    } else if (currentNumber > 2 && fase === 4) {
      setCurrentNumber(1)
      setFase(1)
    }
  }, [currentNumber])


  return <div className={Styles.container} style={{color: color ? '#FFFF00' : '#FFFFFF'}}>{currentNumber}</div>
}
