import React from 'react'
import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  function handleClickButton() {
    setCount(count + 1)
  }
  function theCountChanged() {
    console.log(`Wow, the count changed and is now ${count}`)
  }
  return (
    <div>
      <p>
        Count: {count} <button onClick={handleClickButton}>Click Me!</button>
        {theCountChanged()}
      </p>
    </div>
  )
}
