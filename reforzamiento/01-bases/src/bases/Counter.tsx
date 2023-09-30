import React, { useState } from 'react'

interface props {
  initialCounter: number;
}

export const Counter = ({initialCounter}:props) => {

  const [counter, setCounter] = useState(initialCounter);

    const handleClick = () => {
      setCounter( prev => prev + 1 );
    }

  return (
    <>
      <h1>Counter:{ counter }</h1>
      <hr />
      <button
        onClick={ handleClick }
      >
        +1
      </button>
    </>
  )
}
