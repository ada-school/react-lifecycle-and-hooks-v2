import React from "react"

import Second from "./Second"

export default function First({ playerState }) {
  return (
    <>
      <h3>First Component</h3>
      <Second playerState={playerState} />
    </>
  )
}
