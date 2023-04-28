import { useState, useEffect } from "react";
import Styles from './Styles/Display.module.css'

export function Display({ activeDisplay }) {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [fase, setFase] = useState(1);
  let interval
  
  useEffect(() => {

    if (activeDisplay) {
      interval = setInterval(() => {
        setCurrentNumber(currentNumber => currentNumber + 1)
      }, 1000)
      return () => clearInterval(interval)
    } else {
      clearInterval(interval)
      setCurrentNumber(0)
      setFase(1)
    }
  }, [activeDisplay])

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


  return <div className={Styles.container}>{currentNumber}</div>;
}
