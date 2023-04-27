import { useState, useEffect } from "react";

export function Display({ activeDisplay }) {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [fase, setFase] = useState(1);
  
  useEffect(() => {
    if (activeDisplay) {
      const interval = setInterval(() => {
        setCurrentNumber(currentNumber => currentNumber + 1)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [activeDisplay])

  useEffect(() => {
    console.log('currentNumber', currentNumber)
    if (currentNumber === 17 && fase === 1) {
      console.log('fase 1')
      setCurrentNumber(0)
      setFase(2)
    } else if (currentNumber === 3 && fase === 2) {
      setCurrentNumber(0)
      setFase(3)
    } else if (currentNumber === 3 && fase === 3) {
      setCurrentNumber(0)
      setFase(4)
    } else if (currentNumber === 2 && fase === 4) {
      setCurrentNumber(0)
      setFase(1)
    }
  }, [currentNumber])


  return <div>{currentNumber}</div>;
}
