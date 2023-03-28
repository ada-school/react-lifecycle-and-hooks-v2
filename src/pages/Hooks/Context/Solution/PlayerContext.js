import { createContext } from "react"

export const PlayerContext = createContext([
  {
    name: "",
    points: 0,
  },
  (player) => player,
])
