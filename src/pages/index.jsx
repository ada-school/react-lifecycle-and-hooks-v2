import { useState } from "react"

import LifeCycle from "./LifeCycle"

import OptionPicker from "../components/OptionPicker"
import Hooks from "./Hooks"

const OPTIONS = [
  { optionId: "function-hooks", label: "Hooks" },
  { optionId: "class-lifecycle", label: "Lifecycle" },
]

export default function Pages() {
  const [selectedOption, setSelectedOption] = useState("function-hooks")

  const renderContent = () => {
    switch (selectedOption) {
      case "function-hooks":
        return <Hooks />
      case "class-lifecycle":
        return <LifeCycle />
      default:
        return <h3>There was an error</h3>
    }
  }
  return (
    <>
      <OptionPicker
        options={OPTIONS}
        onClick={(newOption) => setSelectedOption(newOption)}
        activeOption={selectedOption}
      />
      {renderContent()}
    </>
  )
}
