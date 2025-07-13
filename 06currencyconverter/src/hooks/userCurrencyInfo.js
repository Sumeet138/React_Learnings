import { useEffect, useState } from "react"

function useCurrencyInfo(currency) {
  //First Step
  //Whatever data i am retreiving from the API, I am going to store it in the state
  const [data, setData] = useState({})
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
  }, [currency])

  console.log(data)
  return data
}

export default useCurrencyInfo
