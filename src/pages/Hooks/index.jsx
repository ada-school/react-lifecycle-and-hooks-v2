import { useState } from "react"

import State from "./State"
import Effect from "./Effect"
import EffectExample from "./EffectExample"
import Reducer from "./Reducer"
import Context from "./Context"
import Memo from "./Memo"
import Card from "../../components/Card"

const SECTIONS = [
  { section: State, title: "Hook: useState" },
  { section: Effect, title: "Hook: useEffect" },
  { section: EffectExample, title: "Hook: useEffect" },
  { section: Reducer, title: "Hook: useReducer" },
  { section: Context, title: "Hook: useContext" },
  { section: Memo, title: "Hook: useMemo" },
]

export default function Hooks() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const Section = SECTIONS[currentSectionIndex].section
  const sectionTitle = SECTIONS[currentSectionIndex].title

  const handleNextSection = () => {
    if (currentSectionIndex < SECTIONS.length - 1) {
      setCurrentSectionIndex((prevState) => prevState + 1)
    }
  }

  const handlePrevSection = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex((prevState) => prevState - 1)
    }
  }
  return (
    <Card
      title={sectionTitle}
      showButtons
      onPrev={handlePrevSection}
      onNext={handleNextSection}
    >
      <Section />
    </Card>
  )
}
