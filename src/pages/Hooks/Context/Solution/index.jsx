import { useState } from "react"

import { PlayerContext } from "./PlayerContext"
import First from "./First"

export default function Solution() {
  const playerState = useState({ name: "Pepito Perez", points: 1 })
  return (
    <PlayerContext.Provider value={playerState}>
      <First />
    </PlayerContext.Provider>
  )
}
