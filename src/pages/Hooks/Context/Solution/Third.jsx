import { useContext } from "react"

import { PlayerContext } from "./PlayerContext"
import Button from "../../../../components/Button"

export default function Third() {
  const [player, setPlayer] = useContext(PlayerContext)
  return (
    <>
      <h3>Third component:</h3>
      <p>{`${player.name} points: ${player.points}.`}</p>
      <Button
        onClick={() => setPlayer({ ...player, points: player.points + 1 })}
      >
        +
      </Button>
    </>
  )
}
