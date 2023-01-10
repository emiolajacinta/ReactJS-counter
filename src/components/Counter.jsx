import React from 'react';
import './Counter.css'
import { useState } from 'react';

const App =  () => {
  const [count,setCount] = useState(0)

 
   const increment = () =>{
     setCount(count+1)
   }
   const decrement = () =>{
    if(count>0){
      setCount(count-1)
     }
     else{
      return
     }
   }

  return ( 
     <>
        <div className='container'>
          <div className='counter-container'>
              <h1>Counter</h1>
              <button onClick={increment}>+</button>
              <span>{count}</span>
              <button onClick={decrement}>-</button>
          </div>
        </div>
     </>
   );
}

export default App;