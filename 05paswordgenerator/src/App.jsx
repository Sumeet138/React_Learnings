import { useEffect, useRef } from "react";
import { useCallback, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%&*";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);
  const copyPasswordToCLip = () => {
    window.navigator.clipboard.writeText(password);

    passwordRef.current?.select();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#45474b] via-[#379777] to-[#c7a711]">
      <div className="  w-full max-w-md mx-auto rounded-3 px-6 py-6 my-8  text-gray-800 hover:shadow-3xl transition-all duration-300 bg-white/30 backdrop-blur-md shadow-xl border border-white/20 rounded-3xl">
        <h1 className="text-gray-900 text-center my-4 text-2xl font-bold tracking-tight">
          Password Generator
        </h1>
        <div className="flex shadow-lg rounded-2xl overflow-hidden mb-4 border border-gray-200">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-4 px-4 bg-gray-50 text-gray-800 font-mono placeholder-gray-400 focus:bg-white transition-colors duration-200"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToCLip()}
            className="outline-none bg-blue-500 text-white py-4 px-4 hover:bg-blue-600 transition-colors duration-200"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-4">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              name=""
              id=""
              min={8}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="length">length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
              type="checkbox"
              name=""
              id=""
            />
            <label htmlFor="number">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
              type="checkbox"
              name=""
              id=""
            />
            <label htmlFor="character">Charaters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
