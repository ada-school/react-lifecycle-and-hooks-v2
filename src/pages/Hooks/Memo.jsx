import { useState, useEffect, useMemo } from "react"

import Button from "../../components/Button"

function fib(n) {
  if (n <= 1) {
    return 1
  } else {
    return fib(n - 1) + fib(n - 2)
  }
}

export default function Memo() {
  const [fibIndex, setFibIndex] = useState(0)
  const fibResult = useMemo(() => fib(fibIndex), [fibIndex])
  //const fibResult = fib(fibIndex)

  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [time])

  return (
    <div className="w-full h-full items-center justify-center flex flex-col gap-y-6">
      <h3 className="text-base">
        Current date and time: <b>{time.toLocaleTimeString()}</b>
      </h3>
      <p className="text-xl font-bold">
        {`Fibonacci of: ${fibIndex}. Is: ${fibResult}`}
      </p>
      <Button onClick={() => setFibIndex((prevState) => prevState + 1)}>
        +
      </Button>
    </div>
  )
}
