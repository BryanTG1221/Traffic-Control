
export function DayLights () {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight color='0xfffffff' intensity={1} position={[0, 1, 0]} />
    </>
  )
}

export function NightLight () {
  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight color='#325EAD' intensity={0.5} position={[0, 20, 0]} />
    </>
  )
}
