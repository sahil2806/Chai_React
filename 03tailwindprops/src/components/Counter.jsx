import React, { useState } from 'react'

const Counter = () => {
    const [counter,setCounter] = useState(0);

    function change (){
          setCounter(counter+1);4
          setCounter(counter+1);
          setCounter((counter)=>(counter+1));
          setCounter((counter)=>(counter+1));
           
        //   setCounter(counter+1);
    }
  return (
    <div> 
        <h1>{counter}</h1>
        <button onClick={change}>Click</button>
    
    </div>
  )
}

export default Counter