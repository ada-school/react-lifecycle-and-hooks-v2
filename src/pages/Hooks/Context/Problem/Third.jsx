import Button from "../../../../components/Button"

export default function Third({ playerState }) {
  const [player, setPlayer] = playerState
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
