import { useEffect, useState } from "react"

import "./App.css"
import ThemeBtn from "./components/Themebtn"
import Card from "./components/Card"
import { ThemeProvider } from "./contexts/theme"

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const darkMode = () => {
    setThemeMode("dark")
  }

  const lightMode = () => {
    setThemeMode("light")
  }

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light")
    document.documentElement.classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, darkMode, lightMode }}>
      <div className="flex flex-col justify-center items-center w-full min-h-screen ">
        <div className="w-full max-w-sm ">
          <div className="flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
