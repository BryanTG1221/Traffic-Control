import { Canvas } from "@react-three/fiber"
import { OrbitControls } from '@react-three/drei'
import { Suspense, useContext, useEffect, useRef, useState } from "react"
import { Model } from '/src/assets/City'
import { NightLight, DayLights } from './Lights'
import { Camara } from './Camara'
import { TrafficLight } from './TrafficLight'
import { LightsContext } from './context/Context'
import { Car2, Car1, Car3, Car4,CarAmbar } from './assets/Car_feo'
import { AmbarContext } from './context/Ambar'

// C5E8FF DAY
// 04081C NIght 

function App () {

  const [Light1, setLight1, Light2, setLight2, Light3, setLight3, Light4, setLight4] = useContext(LightsContext)
  const [ambarLight, setAmbarLight] = useContext(AmbarContext)
  const [ambar, setAmbar] = useState(false)
  const [stopAmbar, setStop] = useState(false)
  const intervaloSemaforo1 = useRef(null)
  const intervaloSemaforo2 = useRef(null)
  const intervaloSemaforo3 = useRef(null)
  const intervaloSemaforo4 = useRef(null)

  console.log(Light1)
  console.log(Light2)
  console.log(Light3)
  console.log(Light4)
  console.log(ambar)
  console.log(stopAmbar)
  
  const activateSemaforos = () => {
    setTimeout(() => {
      setLight1(true)
    },200)
    intervaloSemaforo1.current = setInterval(() => {
      setLight1(false)
      setLight2(true)
      setLight3(false)
      setLight4(false)
    }, 25000);
    intervaloSemaforo2.current = setInterval(() => {
      setLight1(false)
      setLight2(false)
      setLight3(true)
      setLight4(false)
    },50000)
    intervaloSemaforo3.current = setInterval(() => {
      setLight1(false)
      setLight2(false)
      setLight3(false)
      setLight4(true)
    },75000)
    intervaloSemaforo4.current = setInterval(() => {
      setLight1(true)
      setLight2(false)
      setLight3(false)
      setLight4(false)
    },100000)
  }

  const stopSemaforos = () => {
    clearInterval(intervaloSemaforo1.current)
    clearInterval(intervaloSemaforo2.current)
    clearInterval(intervaloSemaforo3.current)
    clearInterval(intervaloSemaforo4.current)
    setLight1(false)
    setLight2(false)
    setLight3(false)
    setLight4(false)
  }

  const handleClickStop = () => {
    stopSemaforos()
  }

  const handleClickAmbar = () => {
    setAmbarLight(true)
    setAmbar(true)
  }

  const handleClickStopAmbar = () => {
    setAmbar(false)
    setStop(true)
    setAmbarLight(false)
  }

  console.log(ambarLight)

  if (!ambarLight) {
    return (
      <div id="canvas-container" style={{width: '100%', height: '100vh'}}>
        <button onClick={activateSemaforos}>Iniciar</button>
        <button onClick={handleClickStop}>Detener</button>
        <button onClick={handleClickAmbar}>Ambar</button>
        <button onClick={handleClickStopAmbar}>Stop Ambar</button>
        <Canvas style={{background: '#04081C'}}>
          <Camara />
          <NightLight />
          <Suspense fallback={null}>
            <Model />
            <mesh position={[1.75, 1.9,-1.6]}>
              <TrafficLight activeLight={Light1 ? 'green' : ambar ? 'ambar' : 'red'}/>
            </mesh>
            <mesh position={[-1.4, 1.9,1.55]} rotation={[0,Math.PI,0]}>
              <TrafficLight activeLight={Light2 ? 'green' : ambar ? 'ambar' : 'red'}/>
            </mesh>
            <mesh position={[1.72, 1.9,1.39]} rotation={[0,80.1,0]}>
              <TrafficLight activeLight={Light3 ? 'green' : ambar ? 'ambar' : 'red'}/>
            </mesh>
            <mesh position={[-1.4, 1.9,-1.46]} rotation={[0,1.52,0]}>
              <TrafficLight activeLight={Light4 ? 'green' : ambar ? 'ambar' : 'red'}/>
            </mesh>
            <Car1 />
            <Car2 />
            <Car3 />
            <Car4 />
          </Suspense>
  
          <OrbitControls target={[0,0,0]} />
        </Canvas>
      </div>
    )
  } else {
    return (
      <div id="canvas-container" style={{width: '100%', height: '100vh'}}>
        <button onClick={activateSemaforos}>Iniciar</button>
        <button onClick={handleClickStop}>Detener</button>
        <button onClick={handleClickAmbar}>Ambar</button>
        <button onClick={handleClickStopAmbar}>Stop Ambar</button>
        <Canvas style={{background: '#04081C'}}>
          <Camara />
          <NightLight />
          <Suspense fallback={null}>
            <Model />
            <mesh position={[1.75, 1.9,-1.6]}>
              <TrafficLight activeLight={Light1 ? 'green' : ambar ? 'ambar' : stopAmbar ? 'stopAmbar' : 'red'}/>
            </mesh>
            <mesh position={[-1.4, 1.9,1.55]} rotation={[0,Math.PI,0]}>
              <TrafficLight activeLight={Light2 ? 'green' : ambar ? 'ambar' : stopAmbar ? 'stopAmbar' : 'red'}/>
            </mesh>
            <mesh position={[1.72, 1.9,1.39]} rotation={[0,80.1,0]}>
              <TrafficLight activeLight={Light3 ? 'green' : ambar ? 'ambar' : stopAmbar ? 'stopAmbar' : 'red'}/>
            </mesh>
            <mesh position={[-1.4, 1.9,-1.46]} rotation={[0,1.52,0]}>
              <TrafficLight activeLight={Light4 ? 'green' : ambar ? 'ambar' : stopAmbar ? 'stopAmbar' : 'red'}/>
            </mesh>
            <CarAmbar />
          </Suspense>
  
          <OrbitControls target={[0,0,0]} />
        </Canvas>
      </div>
    )
  }
}

export default App