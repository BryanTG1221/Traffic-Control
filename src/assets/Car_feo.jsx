
import React, { useContext, useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { LightsContext } from '../context/Context'

export function Car1 (props) {
  const { nodes, materials } = useGLTF('/src/assets/car_feo.gltf')
  const [Light1,setLight1] = useContext(LightsContext)
  const [position, setPosition] = useState(9)

  useEffect(() => {
    setLight1(true)
    if( Light1) {
      position === 9 ? setPosition(2) : setPosition(-9)
    } else if ( Light1 === false && position === 9) { 
      setPosition(2)
    }
  }, [Light1])


  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.car_body.geometry} material={materials.MAIN} scale={[0.35,0.35,0.35]} position={[0.8,0.635, position]} rotation={[0,9.4,0]}>
        <mesh geometry={nodes.door_l.geometry} material={materials.MAIN} position={[0.91, 0.68, 0.64]}>
          <mesh geometry={nodes.win_door_l001.geometry} material={materials.WINDOW} position={[-0.15, 0.7, -0.73]} />
        </mesh>
        <mesh geometry={nodes.door_r.geometry} material={materials.MAIN} position={[-0.91, 0.68, 0.64]}>
          <mesh geometry={nodes.win_door_r001.geometry} material={materials.WINDOW} position={[0.15, 0.7, -0.73]} />
        </mesh>
        <mesh geometry={nodes.free_number.geometry} material={materials.MAIN} position={[0, 0.79, -1.77]} />
        <mesh geometry={nodes.interior.geometry} material={materials.MAIN} position={[0.94, 0.6, -0.07]} rotation={[0, 0, -Math.PI / 2]} scale={[0.44, 0.4, 0.4]} />
        <mesh geometry={nodes.wheel_bl.geometry} material={materials.MAIN} position={[0.78, 0.33, -1.24]} rotation={[0, 1.57, 0]} scale={0.32} />
        <mesh geometry={nodes.wheel_br.geometry} material={materials.MAIN} position={[-0.78, 0.33, -1.24]} rotation={[0, 1.57, 0]} scale={0.32} />
        <mesh geometry={nodes.wheel_fl.geometry} material={materials.MAIN} position={[0.78, 0.33, 1.07]} rotation={[0, 1.57, 0]} scale={0.32} />
        <mesh geometry={nodes.wheel_fr.geometry} material={materials.MAIN} position={[-0.78, 0.33, 1.07]} rotation={[0, 1.57, 0]} scale={0.32} />
        <mesh geometry={nodes.windows.geometry} material={materials.WINDOW} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/car_feo.gltf')

export function Car2 (props) {
  const { nodes, materials } = useGLTF('/src/assets/car_feo.gltf')
  const [,, Light2] = useContext(LightsContext)
  const [position, setPosition] = useState(-9)

  useEffect(() => {
    if( Light2) {
      position === -9 ? setPosition(-2) : setPosition(9)
    } else if ( Light2 === false && position === -9) { setPosition(-2)}
  }, [Light2])


  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.car_body.geometry} material={materials.MAIN} scale={[0.35,0.35,0.35]} position={[-0.5,0.635, position]}>
        <mesh geometry={nodes.door_l.geometry} material={materials.MAIN} position={[0.91, 0.68, 0.64]}>
          <mesh geometry={nodes.win_door_l001.geometry} material={materials.WINDOW} position={[-0.15, 0.7, -0.73]} />
        </mesh>
        <mesh geometry={nodes.door_r.geometry} material={materials.MAIN} position={[-0.91, 0.68, 0.64]}>
          <mesh geometry={nodes.win_door_r001.geometry} material={materials.WINDOW} position={[0.15, 0.7, -0.73]} />
        </mesh>
        <mesh geometry={nodes.free_number.geometry} material={materials.MAIN} position={[0, 0.79, -1.77]} />
        <mesh geometry={nodes.interior.geometry} material={materials.MAIN} position={[0.94, 0.6, -0.07]} rotation={[0, 0, -Math.PI / 2]} scale={[0.44, 0.4, 0.4]} />
        <mesh geometry={nodes.wheel_bl.geometry} material={materials.MAIN} position={[0.78, 0.33, -1.24]} rotation={[0, 1.57, 0]} scale={0.32} />
        <mesh geometry={nodes.wheel_br.geometry} material={materials.MAIN} position={[-0.78, 0.33, -1.24]} rotation={[0, 1.57, 0]} scale={0.32} />
        <mesh geometry={nodes.wheel_fl.geometry} material={materials.MAIN} position={[0.78, 0.33, 1.07]} rotation={[0, 1.57, 0]} scale={0.32} />
        <mesh geometry={nodes.wheel_fr.geometry} material={materials.MAIN} position={[-0.78, 0.33, 1.07]} rotation={[0, 1.57, 0]} scale={0.32} />
        <mesh geometry={nodes.windows.geometry} material={materials.WINDOW} />
      </mesh>
    </group>
  )
}
export function Car3 (props) {
  const { nodes, materials } = useGLTF('/src/assets/car_feo.gltf')
  const [,, Light3] = useContext(LightsContext)
  const [position, setPosition] = useState(-9)

  useEffect(() => {
    if( Light3) {
      position === -9 ? setPosition(-2) : setPosition(9)
    } else if ( Light3 === false && position === -9) { setPosition(-2)}
  }, [Light3])


  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.car_body.geometry} material={materials.MAIN} scale={[0.35,0.35,0.35]} position={[position,0.635, 0.7]} rotation={[0,7.85,0]}>
        <mesh geometry={nodes.door_l.geometry} material={materials.MAIN} position={[0.91, 0.68, 0.64]}>
          <mesh geometry={nodes.win_door_l001.geometry} material={materials.WINDOW} position={[-0.15, 0.7, -0.73]} />
        </mesh>
        <mesh geometry={nodes.door_r.geometry} material={materials.MAIN} position={[-0.91, 0.68, 0.64]}>
          <mesh geometry={nodes.win_door_r001.geometry} material={materials.WINDOW} position={[0.15, 0.7, -0.73]} />
        </mesh>
        <mesh geometry={nodes.free_number.geometry} material={materials.MAIN} position={[0, 0.79, -1.77]} />
        <mesh geometry={nodes.interior.geometry} material={materials.MAIN} position={[0.94, 0.6, -0.07]} rotation={[0, 0, -Math.PI / 2]} scale={[0.44, 0.4, 0.4]} />
        <mesh geometry={nodes.wheel_bl.geometry} material={materials.MAIN} position={[0.78, 0.33, -1.24]} rotation={[0, 1.57, 0]} scale={0.32} />
        <mesh geometry={nodes.wheel_br.geometry} material={materials.MAIN} position={[-0.78, 0.33, -1.24]} rotation={[0, 1.57, 0]} scale={0.32} />
        <mesh geometry={nodes.wheel_fl.geometry} material={materials.MAIN} position={[0.78, 0.33, 1.07]} rotation={[0, 1.57, 0]} scale={0.32} />
        <mesh geometry={nodes.wheel_fr.geometry} material={materials.MAIN} position={[-0.78, 0.33, 1.07]} rotation={[0, 1.57, 0]} scale={0.32} />
        <mesh geometry={nodes.windows.geometry} material={materials.WINDOW} />
      </mesh>
    </group>
  )
}


export function Car4 (props) {
  const { nodes, materials } = useGLTF('/src/assets/car_feo.gltf')
  const [,,,,,,Light4] = useContext(LightsContext)
  const [position, setPosition] = useState(9)

  useEffect(() => {
    if( Light4) {
      position === 9 ? setPosition(2.5) : setPosition(-9)
    } else if ( position === 9) { setPosition(2.5)}
  }, [Light4])


  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.car_body.geometry} material={materials.MAIN} scale={[0.35,0.35,0.35]} position={[position,0.635, -0.8]} rotation={[0,4.7,0]}>
        <mesh geometry={nodes.door_l.geometry} material={materials.MAIN} position={[0.91, 0.68, 0.64]}>
          <mesh geometry={nodes.win_door_l001.geometry} material={materials.WINDOW} position={[-0.15, 0.7, -0.73]} />
        </mesh>
        <mesh geometry={nodes.door_r.geometry} material={materials.MAIN} position={[-0.91, 0.68, 0.64]}>
          <mesh geometry={nodes.win_door_r001.geometry} material={materials.WINDOW} position={[0.15, 0.7, -0.73]} />
        </mesh>
        <mesh geometry={nodes.free_number.geometry} material={materials.MAIN} position={[0, 0.79, -1.77]} />
        <mesh geometry={nodes.interior.geometry} material={materials.MAIN} position={[0.94, 0.6, -0.07]} rotation={[0, 0, -Math.PI / 2]} scale={[0.44, 0.4, 0.4]} />
        <mesh geometry={nodes.wheel_bl.geometry} material={materials.MAIN} position={[0.78, 0.33, -1.24]} rotation={[0, 1.57, 0]} scale={0.32} />
        <mesh geometry={nodes.wheel_br.geometry} material={materials.MAIN} position={[-0.78, 0.33, -1.24]} rotation={[0, 1.57, 0]} scale={0.32} />
        <mesh geometry={nodes.wheel_fl.geometry} material={materials.MAIN} position={[0.78, 0.33, 1.07]} rotation={[0, 1.57, 0]} scale={0.32} />
        <mesh geometry={nodes.wheel_fr.geometry} material={materials.MAIN} position={[-0.78, 0.33, 1.07]} rotation={[0, 1.57, 0]} scale={0.32} />
        <mesh geometry={nodes.windows.geometry} material={materials.WINDOW} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/car_feo.gltf')

