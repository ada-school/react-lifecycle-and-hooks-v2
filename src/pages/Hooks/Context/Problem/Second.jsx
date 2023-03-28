import Third from "./Third"

export default function Second({ playerState }) {
  return (
    <>
      <h3>Second Component</h3>
      <Third playerState={playerState} />
    </>
  )
}
