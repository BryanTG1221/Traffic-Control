import { Canvas } from "@react-three/fiber"
import { OrbitControls } from '@react-three/drei'
import { Suspense, useContext, useEffect } from "react"
import { Model } from '/src/assets/City'
import { NightLight, DayLights } from './Lights'
import { Camara } from './Camara'
import { TrafficLight } from './TrafficLight'
import { LightsContext } from './context/Context'
import { Car2, Car1, Car3, Car4 } from './assets/Car_feo'

// C5E8FF DAY
// 04081C NIght 

function App () {

  const [Light1, setLight1, Light2, setLight2, Light3, setLight3, Light4, setLight4] = useContext(LightsContext)

  console.log(Light1)
  console.log(Light2)
  console.log(Light3)
  console.log(Light4)

  useEffect(() => {
    setInterval(() => {
      setLight1(false)
      setLight2(true)
      setLight3(false)
      setLight4(false)
    }, 25000);
    setInterval(() => {
      setLight1(false)
      setLight2(false)
      setLight3(true)
      setLight4(false)
    },50000)
    setInterval(() => {
      setLight1(false)
      setLight2(false)
      setLight3(false)
      setLight4(true)
    },75000)
    setInterval(() => {
      setLight1(true)
      setLight2(false)
      setLight3(false)
      setLight4(false)
    },100000)
  }, [])

  return (
    <div id="canvas-container" style={{width: '100%', height: '100vh'}}>
      <Canvas style={{background: '#04081C'}}>
        <Camara />
        <NightLight />
        <Suspense fallback={null}>
          <Model />
          <mesh position={[1.75, 1.9,-1.6]}>
            <TrafficLight activeLight={Light1 ? 'green' : 'red'}/>
          </mesh>
          <mesh position={[-1.4, 1.9,1.55]} rotation={[0,Math.PI,0]}>
            <TrafficLight activeLight={Light2 ? 'green' : 'red'}/>
          </mesh>
          <mesh position={[1.72, 1.9,1.39]} rotation={[0,80.1,0]}>
            <TrafficLight activeLight={Light3 ? 'green' : 'red'}/>
          </mesh>
          <mesh position={[-1.4, 1.9,-1.46]} rotation={[0,1.52,0]}>
            <TrafficLight activeLight={Light4 ? 'green' : 'red'}/>
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
}

export default App