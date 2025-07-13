import { use, useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import { InputBox } from "./components/index.js"
import useCurrencyInfo from "./hooks/userCurrencyInfo"

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  //custom hook
  //gets the currency info as an object
  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600')",
        backgroundSize: "conatin",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-md mx-auto">
        {/* Glass morphism container */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 relative overflow-hidden">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              Currency Converter
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                convert()
              }}
              className="space-y-6"
            >
              <div className="w-full">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  selectedCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                  onCurrencyChange={(currency) => setFrom(currency)}
                />
              </div>

              {/* Swap button */}
              <div className="flex justify-center">
                <button
                  type="button"
                  className="p-3 rounded-full bg-gray-800/50 border border-gray-500/30 hover:bg-gray-700/50 transition-all duration-300 backdrop-blur-sm"
                  onClick={() => {
                    // Add your swap logic here
                    const temp = from
                    setFrom(to)
                    setTo(temp)
                  }}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                    />
                  </svg>
                </button>
              </div>

              <div className="w-full">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  selectedCurrency={to}
                  onAmountChange={(amount) => setConvertedAmount(amount)}
                  onCurrencyChange={(currency) => setTo(currency)}
                  amountDisabled={true}
                />
              </div>

              {/* Convert button */}
              <button
                type="submit"
                className="w-full py-4 px-6 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-gray-500/30"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-600/10 to-gray-700/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gray-700/10 to-gray-600/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </div>
  )
}

export default App
