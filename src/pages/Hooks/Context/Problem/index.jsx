import { useState } from "react"

import First from "./First"

export default function Problem() {
  const playerState = useState({ name: "Pepito Perez", points: 1 })
  return <First playerState={playerState} />
}
