import React, { useState, useRef, useEffect } from "react";

export const TrafficLight = ( {activeLight} ) => {
  const [colorVerde, setColorVerde] = useState(false)
  const [colorAmarillo, setColorAmarillo] = useState(false)
  const [colorRojo, setColorRojo] = useState(false)

  useEffect(() => {
    if (activeLight === 'green') {
      setColorVerde(true)
      cambiarLuz()
    } else {
      setColorRojo(true)
    }
    //setInterval(cambiarLuz, 25000)
  }, [activeLight])

  const intervaloParpadeo = useRef(null)

  const cambiarLuz = () => {
    setTimeout(() => {
      setColorVerde(true)
      setColorRojo(false)
    }, 0)

    setTimeout(() => {
      intervaloParpadeo.current = setInterval(() => {
        setColorVerde(colorVerde => !colorVerde)
      }, 500)
    }, 17000)

    setTimeout(() => {
      clearInterval(intervaloParpadeo.current)
      setColorVerde(false)
      setColorAmarillo(true)
    }, 20000)

    setTimeout(() => {
      setColorVerde(false)
      setColorAmarillo(false)
      setColorRojo(true)
    }, 23000)
  }

  return (
    <>
      <mesh>
        <boxGeometry args={[0.2, 0.4, 0.2]} />
        <meshStandardMaterial color={"#000"} />
        <mesh position={[0,0.1,0.1]}>
          <sphereGeometry args={[0.05, 32, 32]} />
          <meshStandardMaterial color={ colorVerde ? '#47B241' : '#414141'} position={[0, 0.6, 0]} />
          {
            colorVerde ? <pointLight position={[0,0,0]} color={'#47B241'} intensity={0.3}/> : <pointLight position={[0,0,0]} color={'#47B241'} intensity={0}/>
          }
        </mesh>
        <mesh position={[0,-0.02,0.1]}>
          <sphereGeometry args={[0.05, 32, 32]} />
          <meshStandardMaterial color={ colorAmarillo ? "#ff0" : '#414141'} position={[0, 0, 0]} />
          {
            colorAmarillo ? <pointLight position={[0,0,0]} color={'#ff0'} intensity={0.3} /> : <pointLight position={[0,0,0]} color={'#47B241'} intensity={0}/>
          }
        </mesh>
        <mesh position={[0,-0.13,0.1]}>
          <sphereGeometry args={[0.05, 32, 32]} />
          <meshStandardMaterial color={ colorRojo ? "#DF1C44" : '#414141'} position={[0, -0.6, 0]} />
          {
            colorRojo ? <pointLight position={[0,0,0]} color={'#DF1C44'} intensity={0.3} /> : <pointLight position={[0,0,0]} color={'#47B241'} intensity={0}/>
          }
        </mesh>
      </mesh>
    </>
  );
};
