import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>React Life cycle and hooks</h1>
      <p>{`Count: ${count}.`}</p>
      <div>
        <button onClick={() => setCount((prevState) => prevState + 1)}>
          +
        </button>
      </div>
    </div>
  )
}

export default App
