import Card from "../../components/Card"

import { usePokemonTypes } from "../../hooks/usePokemonTypes"
import { TYPE_ICONS } from "./fixtures"

export default function TypeList() {
  const [typeList, isRequestInProgress, error] = usePokemonTypes()

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
