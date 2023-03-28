import { useState } from "react"

import Button from "../../components/Button"

export default function State() {
  const [counter, setCounter] = useState(0)

  return (
    <div className="w-full h-full items-center justify-center flex flex-col gap-y-6">
      <p>{`Current count: ${counter}`}</p>
      <div className="flex gap-x-6">
        <Button onClick={() => setCounter((prevState) => prevState - 1)}>
          -
        </Button>
        <Button onClick={() => setCounter((prevState) => prevState + 1)}>
          +
        </Button>
      </div>
    </div>
  )
}
