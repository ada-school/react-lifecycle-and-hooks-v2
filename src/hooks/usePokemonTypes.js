import { useState, useEffect } from "react"

const URL = "https://pokeapi.co/api/v2/type"

export function usePokemonTypes() {
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
  return [typeList, isRequestInProgress, error]
}
