// Import React hooks for state, effect, memoization, and ref
import { useState, useCallback, useEffect, useRef } from "react";

// Main component for password generator
function App() {
  // State for password length
  const [length, setLength] = useState(8);
  // State to allow numbers in password
  const [numberAllowed, setNumberAllowed] = useState(false);
  // State to allow special characters in password
  const [charAllowed, setCharAllowed] = useState(false);
  // State to store generated password
  const [password, setPassword] = useState("");
  // Ref for password input (for copying)
  const passwordRef = useRef(null);

  // Function to generate password based on selected options
  const passwordGenetor = useCallback(() => {
    let pass = "";
    // Base string: uppercase and lowercase letters
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    // Add numbers if allowed
    if (numberAllowed) str += "0123456789";
    // Add special characters if allowed
    if (charAllowed) str += "!@#$%^&*_";

    // Generate password of selected length
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    // Update password state
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  // Function to copy password to clipboard
  const copyPasswordToClipboard = useCallback(() => {
    // Select the password input
    passwordRef.current?.select();
    // Copy to clipboard
    window.navigator.clipboard.writeText(password);
    // Show alert
    alert("Password copied to clipboard");
  }, [password]);

  // Regenerate password when options change
  useEffect(() => {
    passwordGenetor();
  }, [length, numberAllowed, charAllowed, passwordGenetor]);

  return (
    <>
      <div className=" w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 ">
        <h1 className="text-white text-center py-7">Password Genentor</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />

          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-700 px-3 py-1 outlinr-none shrink-0"
          >
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2 py-7">
          <div className="flex items -center gap-x-1">
            <input
              type="range"
              id=""
              min={6}
              max={20}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor=""> Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1 ">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={(e) => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1 ">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={(e) => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
