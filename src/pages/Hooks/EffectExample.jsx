import { useState, useEffect } from "react"

export default function EffectExample() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [time])

  return (
    <div className="w-full h-full items-center justify-center flex flex-col gap-y-6">
      <h3 className="text-xl">
        Current date and time: <b>{time.toLocaleTimeString()}</b>
      </h3>
    </div>
  )
}
