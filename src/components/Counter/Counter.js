import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <span data-testid="count">
        Clicked {count} time{count === 1 ? "" : "s"}
      </span>
      <br />
      <button data-testid="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}

export default Counter

