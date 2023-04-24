import { PerspectiveCamera, OrthographicCamera, CubeCamera } from "@react-three/drei";

export function Camara () {
  return (
    <>
      <PerspectiveCamera  position={[0,20,0]} makeDefault far={6000}/>
    </>
  )
}