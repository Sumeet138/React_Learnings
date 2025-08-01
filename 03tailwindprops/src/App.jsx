import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [color, setColor] = useState("olive");

  return (
    /*<>
      <h1 className="text-3xl bg-green-500 rounded-md p-3">
        React Using tailwind
      </h1>
      <div className="flex flex-col gap-6 item-center">
        <Card username="Sumeet" post="Software Engg." />
        <Card username="Harry" post="Software Engg." />
        <Card username="Zyan" post="Software Engg." />
        <Card username="Liam" post="Software Engg." />
      </div>
    </>*/
    <div
      style={{ backgroundColor: color }}
      className="w-full h-screen duration-200"
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
          >
            Red
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
          >
            Green
          </button>
          <button
            onClick={() => setColor("olive")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
