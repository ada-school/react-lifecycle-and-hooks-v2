import { useReducer } from "react"

import Button from "../../components/Button"

const counterReducer = (state, event) => {
  switch (event) {
    case "subtract":
      return { ...state, count: state.count - 1 }
    case "sum":
      return { ...state, count: state.count + 1 }
    default:
      return state
  }
}

export default function Reducer() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 })

  return (
    <div className="w-full h-full items-center justify-center flex flex-col gap-y-6">
      <p>{`Current count: ${state.count}`}</p>
      <div className="flex gap-x-6">
        <Button onClick={() => dispatch("subtract")}>-</Button>
        <Button onClick={() => dispatch("sum")}>+</Button>
      </div>
    </div>
  )
}
