import React, { useState } from 'react'

export default function Clock({ time }) {
    const [number, setNumber] = useState(0)
    const [name, setName] = useState("")
    return (
      <>
      show Timer
        <h1>{time}</h1>
       <h1>{number}</h1>
       <input
        value={name}
        onChange={e =>setName(e.target.value)}
      />
       <button onClick={()=>{
        setNumber(number+1)
       }}>+1</button>
       
      </>
    );
  }
