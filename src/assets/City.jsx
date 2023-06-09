/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 City.gltf
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model (props) {
  const { nodes, materials } = useGLTF('/Traffic-Control/models/City.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0.53, 0.72, -0.83]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <group position={[504.13, -408.51, -22.15]}>
          <group position={[-66.16, 7.3, -12.5]}>
            <mesh geometry={nodes.Floor_3.geometry} material={materials['World ap']} position={[0, 0, -4.83]} />
            <mesh geometry={nodes.Floor_4_3.geometry} material={materials['World ap']} position={[0, 0, 0.86]} />
          </group>
          <group position={[-201.53, -54.04, 9.82]}>
            <mesh geometry={nodes.Light_1_3.geometry} material={materials['World ap']} position={[342.31, -262.33, 14.34]} rotation={[0, 0, Math.PI / 2]} />
            <mesh geometry={nodes.Light_2_4.geometry} material={materials['World ap']} position={[-82.28, 382.06, 14.34]} rotation={[0, 0, -Math.PI / 2]} />
            <mesh geometry={nodes.Light_3_3.geometry} material={materials['World ap']} position={[342.31, 382.06, 14.34]} rotation={[0, 0, -Math.PI / 2]} />
            <mesh geometry={nodes.Light_3_4.geometry} material={materials['World ap']} position={[-82.28, -262.33, 14.34]} rotation={[0, 0, Math.PI / 2]} />
            <mesh geometry={nodes.Light_4.geometry} material={materials['World ap']} position={[456.33, 37.56, 14.34]} rotation={[0, 0, Math.PI]} />
            <mesh geometry={nodes.Light_5.geometry} material={materials['World ap']} position={[456.33, 1034.84, 14.34]} rotation={[0, 0, Math.PI]} />
          </group>
          <group position={[-305.47, 2.87, 36.01]}>
            <mesh geometry={nodes.Cube_7_2.geometry} material={materials['World ap']} position={[-18.9, -1.58, -14]} />
            <mesh geometry={nodes.Firtree_1_2.geometry} material={materials['World ap']} position={[-9.61, -45.05, 11.25]} />
            <mesh geometry={nodes.Firtree_2_2.geometry} material={materials['World ap']} position={[4.3, 31.6, -1.08]} />
            <mesh geometry={nodes.Firtree_2_3.geometry} material={materials['World ap']} position={[-3.05, -133.06, 11.96]} />
            <mesh geometry={nodes.Firtree_3_2.geometry} material={materials['World ap']} position={[8.99, 112.14, -9.33]} />
            <mesh geometry={nodes.Firtree_47_2.geometry} material={materials['World ap']} position={[-9.32, 195.55, 17.96]} />
            <mesh geometry={nodes.Firtree_4_2.geometry} material={materials['World ap']} position={[8.21, -227.08, 0.78]} rotation={[0, 0, -0.82]} />
          </group>
          <mesh geometry={nodes.Behch.geometry} material={materials['World ap']} position={[-186.92, -152.01, 19.65]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Bench_2.geometry} material={materials['World ap']} position={[-186.92, -230.34, 19.65]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.House_3.geometry} material={materials['World ap']} position={[-82.28, -23.08, -5.96]} />
          <mesh geometry={nodes.Muff.geometry} material={materials['World ap']} position={[111.52, 188.91, -20.05]} />
          <mesh geometry={nodes.Muff_1.geometry} material={materials['World ap']} position={[111.52, 89.05, -20.05]} />
        </group>
        <group position={[-431.43, 557.29, -57.01]} rotation={[0, 0, -Math.PI / 2]}>
          <group position={[1.9, -74.24, 22.36]}>
            <mesh geometry={nodes.Floor.geometry} material={materials['World ap']} position={[0, 0, -2.84]} />
            <mesh geometry={nodes.Floor_4.geometry} material={materials['World ap']} position={[0, 0, 2.84]} />
          </group>
          <group position={[-194.2, -31.51, 41.07]}>
            <mesh geometry={nodes.Bed.geometry} material={materials['World ap']} position={[3.14, -42.03, 17.39]} rotation={[0, 0, Math.PI]} />
            <mesh geometry={nodes.Bushes_3.geometry} material={materials['World ap']} position={[-1.05, -183.5, -5.8]} rotation={[-1.34, -0.01, 1.4]} />
          </group>
          <group position={[263.14, -31.51, 41.07]}>
            <mesh geometry={nodes.Bed_2.geometry} material={materials['World ap']} position={[3.14, -42.03, 17.39]} rotation={[0, 0, Math.PI]} />
            <mesh geometry={nodes.Bushes_3_2.geometry} material={materials['World ap']} position={[-1.05, -183.5, -5.8]} rotation={[-1.34, -0.01, 1.4]} />
          </group>
          <group position={[-152.77, -137.84, 44.68]}>
            <mesh geometry={nodes.Light.geometry} material={materials['World ap']} position={[-82.28, -257.04, 14.34]} rotation={[0, 0, Math.PI / 2]} />
            <mesh geometry={nodes.Light_1.geometry} material={materials['World ap']} position={[403.84, -257.04, 14.34]} rotation={[0, 0, Math.PI / 2]} />
            <mesh geometry={nodes.Light_2.geometry} material={materials['World ap']} position={[-82.28, 382.06, 14.34]} rotation={[0, 0, -Math.PI / 2]} />
            <mesh geometry={nodes.Light_3.geometry} material={materials['World ap']} position={[403.84, 382.06, 14.34]} rotation={[0, 0, -Math.PI / 2]} />
            <mesh geometry={nodes.traffic_light.geometry} material={materials['World ap']} position={[774.73, 374.29, -66.93]} rotation={[0, 0, Math.PI / 2]} />
            <mesh geometry={nodes.traffic_light_1.geometry} material={materials['World ap']} position={[-160.49, -256.18, -66.93]} rotation={[0, 0, Math.PI / 2]} />
            <mesh geometry={nodes.traffic_light_2.geometry} material={materials['World ap']} position={[474.6, 379.61, -66.93]} rotation={[0, 0, Math.PI / 2]} />
          </group>
          <mesh geometry={nodes.House.geometry} material={materials['World ap']} position={[0, 143.58, -104.5]} rotation={[Math.PI / 2, 0, 0]} />
        </group>
        <group position={[-511.82, -317.4, -22.15]} rotation={[0, 0, 1.56]}>
          <group position={[-66.16, 7.3, -12.5]}>
            <mesh geometry={nodes.Floor_4_4.geometry} material={materials['World ap']} position={[0, 0, -5.03]} />
            <mesh geometry={nodes.Floor_4_5.geometry} material={materials['World ap']} position={[70.76, 277.5, -3.39]} />
          </group>
          <group position={[-356.01, -70.98, 14.55]} rotation={[0, 0, Math.PI]}>
            <mesh geometry={nodes.Bed_3.geometry} material={materials['World ap']} position={[2.86, -38.21, 15.81]} rotation={[0, 0, -Math.PI]} />
            <mesh geometry={nodes.Bushes_15.geometry} material={materials['World ap']} position={[-0.95, 177.88, -5.27]} rotation={[-1.34, -0.01, 1.4]} />
            <mesh geometry={nodes.Bushes_2.geometry} material={materials['World ap']} position={[-0.95, -52.62, -5.27]} rotation={[-1.34, -0.01, 1.4]} />
            <mesh geometry={nodes.Bushes_2_2.geometry} material={materials['World ap']} position={[-0.95, 49.3, -5.27]} rotation={[-1.34, -0.01, 1.4]} />
            <mesh geometry={nodes.Tree_1.geometry} material={materials['World ap']} position={[-20.42, -82.21, 28.78]} rotation={[-0.35, -1.33, 2.61]} />
            <mesh geometry={nodes.Tree_2.geometry} material={materials['World ap']} position={[-26.52, 12.04, 46.04]} rotation={[-1.34, -0.01, 1.4]} />
            <mesh geometry={nodes.Tree_3.geometry} material={materials['World ap']} position={[-39.24, 158.02, 27.91]} rotation={[-0.72, 1.26, 0.57]} />
          </group>
          <group position={[180.93, -70.98, 14.55]} rotation={[0, 0, Math.PI]}>
            <mesh geometry={nodes.Bed_4.geometry} material={materials['World ap']} position={[2.86, -38.21, 15.81]} rotation={[0, 0, -Math.PI]} />
            <mesh geometry={nodes.Bushes_15_2.geometry} material={materials['World ap']} position={[-0.95, 177.88, -5.27]} rotation={[-1.34, -0.01, 1.4]} />
            <mesh geometry={nodes.Bushes_2_3.geometry} material={materials['World ap']} position={[-0.95, -52.62, -5.27]} rotation={[-1.34, -0.01, 1.4]} />
            <mesh geometry={nodes.Bushes_4.geometry} material={materials['World ap']} position={[-0.95, 49.3, -5.27]} rotation={[-1.34, -0.01, 1.4]} />
            <mesh geometry={nodes.Tree_1_2.geometry} material={materials['World ap']} position={[-20.42, -82.21, 28.78]} rotation={[-1.34, -0.01, 1.4]} />
            <mesh geometry={nodes.Tree_2_2.geometry} material={materials['World ap']} position={[-34.95, 12.04, 27.91]} rotation={[-1.34, -0.01, 1.4]} />
            <mesh geometry={nodes.Tree_3_2.geometry} material={materials['World ap']} position={[-29.61, 158.02, 27.91]} rotation={[-0.72, 1.26, 0.57]} />
          </group>
          <group position={[-201.53, -54.04, 9.82]}>
            <mesh geometry={nodes.Light_2_5.geometry} material={materials['World ap']} position={[-134.68, 145.28, 15.93]} rotation={[0, 0, -Math.PI / 2]} />
            <mesh geometry={nodes.Light_3_5.geometry} material={materials['World ap']} position={[413.75, 144.87, 15.93]} rotation={[0, 0, -Math.PI / 2]} />
            <mesh geometry={nodes.Light_4_2.geometry} material={materials['World ap']} position={[154.51, -264.63, 15.93]} rotation={[0, 0, Math.PI / 2]} />
          </group>
          <mesh geometry={nodes.Shop.geometry} material={materials['World ap']} position={[-65.34, -123.33, 36.63]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Trash.geometry} material={materials['World ap']} position={[46.26, 47.98, 28.07]} rotation={[-Math.PI, 0, 0]} />
          <mesh geometry={nodes.Trash_2.geometry} material={materials['World ap']} position={[-82.16, 47.98, 28.07]} rotation={[-Math.PI, 0, 0]} />
        </group>
        <group position={[511.36, 541.23, -22.15]}>
          <group position={[-66.16, 7.3, -12.5]}>
            <mesh geometry={nodes.Floor_2.geometry} material={materials['World ap']} position={[0, 0, -4.83]} />
            <mesh geometry={nodes.Floor_4_2.geometry} material={materials['World ap']} position={[0, 0, 0.86]} />
          </group>
          <group position={[-201.53, -54.04, 9.82]}>
            <mesh geometry={nodes.Light_1_2.geometry} material={materials['World ap']} position={[342.31, -262.33, 14.34]} rotation={[0, 0, Math.PI / 2]} />
            <mesh geometry={nodes.Light_2_2.geometry} material={materials['World ap']} position={[-82.28, 382.06, 14.34]} rotation={[0, 0, -Math.PI / 2]} />
            <mesh geometry={nodes.Light_2_3.geometry} material={materials['World ap']} position={[-82.28, -262.33, 14.34]} rotation={[0, 0, Math.PI / 2]} />
            <mesh geometry={nodes.Light_3_2.geometry} material={materials['World ap']} position={[342.31, 382.06, 14.34]} rotation={[0, 0, -Math.PI / 2]} />
          </group>
          <group position={[-73.05, -229.55, 36.01]} rotation={[0, 0, Math.PI / 2]}>
            <mesh geometry={nodes.Cube_7.geometry} material={materials['World ap']} position={[-19.84, -8.48, -14]} />
            <mesh geometry={nodes.Firtree.geometry} material={materials['World ap']} position={[-3.05, -133.06, 11.96]} />
            <mesh geometry={nodes.Firtree_1.geometry} material={materials['World ap']} position={[-9.61, -45.05, 11.25]} />
            <mesh geometry={nodes.Firtree_2.geometry} material={materials['World ap']} position={[4.3, 31.6, -1.08]} />
            <mesh geometry={nodes.Firtree_3.geometry} material={materials['World ap']} position={[8.99, 112.14, -9.33]} />
            <mesh geometry={nodes.Firtree_4.geometry} material={materials['World ap']} position={[8.21, -227.08, 0.78]} rotation={[0, 0, -0.82]} />
            <mesh geometry={nodes.Firtree_47.geometry} material={materials['World ap']} position={[-9.32, 195.55, 17.96]} />
          </group>
          <mesh geometry={nodes.Bench.geometry} material={materials['World ap']} position={[138.13, -109.7, 19.65]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
          <mesh geometry={nodes.Bench_1.geometry} material={materials['World ap']} position={[138.13, 19.72, 19.65]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
          <mesh geometry={nodes.House_2.geometry} material={materials['World ap']} position={[131.58, 121.88, 47.96]} rotation={[0, 0, Math.PI / 2]} />
        </group>
        <mesh geometry={nodes.ROAD.geometry} material={materials['World ap']} position={[-122.4, 79, 16.87]} rotation={[-Math.PI / 2, 0, Math.PI]}>
          <mesh geometry={nodes.ROAD_Lines_12.geometry} material={materials['World ap']} position={[-106.28, -0.4, 127.72]} />
          <mesh geometry={nodes.traffic_light_1_2.geometry} material={materials['World ap']} position={[-241.85, -92.94, 144.63]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
          <mesh geometry={nodes.traffic_light_2_2.geometry} material={materials['World ap']} position={[-878.59, -92.94, 144.63]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
          <mesh geometry={nodes.traffic_light_2_3.geometry} material={materials['World ap']} position={[-243.88, -92.94, -157.74]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
        </mesh>
        <mesh geometry={nodes.Floor_6.geometry} material={materials['World ap']} position={[-7.4, 80.86, 126.66]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/Traffic-Control/models/City.gltf')
