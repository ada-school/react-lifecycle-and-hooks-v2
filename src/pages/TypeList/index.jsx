import { useState, useEffect } from "react"

import Card from "../../components/Card"

const URL = "https://pokeapi.co/api/v2/type"

const TYPE_ICONS = {
  normal: "🔶",
  fighting: "💪",
  flying: "🪶",
  poison: "🍄",
  ground: "⛰️",
  rock: "🪨",
  bug: "🐛",
  ghost: "👻",
  steel: "⚙️",
  fire: "🔥",
  water: "💧",
  grass: "🍃",
  electric: "⚡️",
  psychic: "👁️",
  ice: "❄️",
  dragon: "🐲",
  dark: "🌙",
  fairy: "🌈",
}

export default function TypeList() {
  const [typeList, setTypeList] = useState([])
  const [isRequestInProgress, setIsRequestInProgress] = useState(false)
  const [error, setError] = useState(null)

  const fetchTypes = async (abortController) => {
    setIsRequestInProgress(true)
    try {
      const data = await (
        await fetch(URL, { signal: abortController.signal })
      ).json()
      setTypeList(data.results)
    } catch (error) {
      console.log(error)
      setError("Something unexpected happened, please try again later.")
    } finally {
      setIsRequestInProgress(false)
    }
  }

  useEffect(() => {
    const abortController = new AbortController()
    fetchTypes(abortController)
    return () => {
      abortController.abort()
    }
  }, [])
  if (error) {
    return (
      <Card title="Pokemon types list">
        <h3 className="text-xl font-bold text-red-700">{error}</h3>
      </Card>
    )
  }
  if (isRequestInProgress) {
    return (
      <Card title="Pokemon types list">
        <h3 className="text-xl font-bold">Loading...</h3>
      </Card>
    )
  }
  return (
    <Card title="Pokemon types list">
      <ul className="w-full flex flex-col gap-y-6 overflow-y-scroll">
        {typeList.map(({ name, url }) => (
          <li
            key={url}
            className="bg-mDark-100 border-2 border-mYellow-100 rounded-md cursor-pointer transition-opacity hover:bg-opacity-50"
          >
            <a
              href={`https://bulbapedia.bulbagarden.net/wiki/${name}_(type)`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-x-6 p-4"
            >
              <p>{TYPE_ICONS[name] ?? "🚫"}</p>
              <h3 className="capitalize text-lg">{name}</h3>
            </a>
          </li>
        ))}
      </ul>
    </Card>
  )
}
