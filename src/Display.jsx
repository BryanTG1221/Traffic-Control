import { useState, useEffect } from 'react'
import Styles from './Styles/Display.module.css'

export function Display ({ activeDisplay, type }) {
  const [currentNumber, setCurrentNumber] = useState(1)
  const [colorDisplay, setColor] = useState('#DF1C44')
  const [fase, setFase] = useState(1)
  let interval

  useEffect(() => {
    if (activeDisplay && type === 'normal') {
      setColor('#0dff00')
      interval = setInterval(() => {
        setCurrentNumber(currentNumber => currentNumber + 1)
      }, 1000)
      return () => clearInterval(interval)
    } else if (type === 'normal') {
      clearInterval(interval)
      setCurrentNumber(1)
      setFase(1)
    } else if (activeDisplay && type === 'ambar') {
      interval = setInterval(() => {
        setTimeout(() => { setColor('#2e2e2e') }, 0)
        setTimeout(() => { setColor('#ff0') }, 500)
      }, 1000)
      setColor(false)
      return () => clearInterval(interval)
    } else if (type === 'ambar') {
      clearInterval(interval)
      setColor(false)
    }
  }, [activeDisplay, type])

  useEffect(() => {
    if (currentNumber === 17 && fase === 1) {
      setTimeout(() => { setColor('#2e2e2e') }, 500)
    } else if (currentNumber > 17 && fase === 1) {
      setCurrentNumber(1)
      setFase(2)
      setTimeout(() => { setColor('#0dff00') }, 0)
      setTimeout(() => { setColor('#2e2e2e') }, 500)
      setTimeout(() => { setColor('#0dff00') }, 1000)
      setTimeout(() => { setColor('#2e2e2e') }, 1500)
      setTimeout(() => { setColor('#0dff00') }, 2000)
      setTimeout(() => { setColor('#2e2e2e') }, 2500)
    } else if (currentNumber > 3 && fase === 2) {
      clearInterval(interval)
      setCurrentNumber(1)
      setFase(3)
      setTimeout(() => { setColor('#2e2e2e') }, 2500)
      setColor('#ff0')
    } else if (currentNumber > 3 && fase === 3) {
      setCurrentNumber(1)
      setFase(4)
      setColor('#DF1C44')
      setTimeout(() => { setColor('#2e2e2e') }, 1500)
    } else if (currentNumber > 2 && fase === 4) {
      setCurrentNumber(1)
      setFase(1)
      setColor('#0dff00')
    }
  }, [currentNumber])

  return <div className={Styles.container} style={{ color: colorDisplay }}>{currentNumber}</div>
}
