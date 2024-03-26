/* eslint-disable no-unused-vars */

import { useState,useCallback, useEffect, useRef } from 'react'
import './App.css'
// use callback function take two argumnet one is function other is dependency array
// The React useCallback Hook returns a memoized callback function.
function App() {
    
  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [characterAllowed,setCharacterAllowed] = useState(false);
  const [Password,setPassword] = useState("");
 
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
       let char =  Math.floor(Math.random()*str.length);
       pass += str.charAt(char);
    }
    setPassword(pass);

  } ,[length,numberAllowed,characterAllowed,setPassword])
 
  
    useEffect(()=>{
        passwordGenerator();
    },[length,numberAllowed,characterAllowed])

    const copyPasswordToClipboard = useCallback(()=>{
        passwordRef.current?.select();
        // passwordRef.current?.setSelectionRange(0, 5);
        window.navigator.clipboard.writeText(Password);
    },[Password])

  return (
  <>
    <div className='big   mx-auto shadow-xl rounded-lg px-4 py-8 m text-white-600 bg-gray-700'> 
       <h1 className='text-center'>Password Generator</h1>
        <input 
        ref={passwordRef}
        type='text'
        value={Password}
        className=' small outline-none   py-1 px-3 rounded-xl font'
        placeholder='Password'
        readOnly
        /> 
        <button onClick={copyPasswordToClipboard}  className='button'>copy</button>

        <div>
          <input
            type='range'
            min={6}
            max={100}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length:{length}</label> 
          <input
            type='checkbox'
            className='mx-4'
             onChange={() => (setCharacterAllowed((prev)=>(!prev)))}
          />
          <label>characterAllowed</label>
          <input
            type='checkbox'
            className='mx-4'
            onChange={()=>(setNumberAllowed((prev)=>(!prev)))}
          />
          <label>numberAllowed</label>
      </div>
    </div>
  </>
  )
}

export default App
