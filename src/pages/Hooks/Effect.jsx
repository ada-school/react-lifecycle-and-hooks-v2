import { useState, useEffect } from "react"

import Button from "../../components/Button"

export default function Effect() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log("Component mounted!")
    return () => {
      console.log("Component will unmount!")
    }
  }, [])

  useEffect(() => {
    console.log("Component updated!")
  })
  console.log("Componente rendered!")
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
