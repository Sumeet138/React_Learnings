import React, { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function Github() {
  const data = useLoaderData()

  //   const [data, setData] = useState([])
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Sumeet138")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data)
  //         setData(data)
  //       })
  //   }, [])

  return (
    <div className="text-3xl text-center m-4 bg-gray-600 p-4 text-white ">
      Github Followers: {data.followers}
      <img src={data.avatar_url} width={300} alt="" />
    </div>
  )
}

export default Github

//Alternative for fetching data, preload type
export const gitInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Sumeet138")
  return response.json()
}
