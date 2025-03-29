import { useState } from 'react'
import { MemoizedStaticComponent } from './StaticComponent'

export const GoodCounter = () => {
  const [count, setCount] = useState(0)
  console.log('Good counter rendered')
  
  return (
    <div className="good-example">
      <h3>Good Counter (Optimized)</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <MemoizedStaticComponent/>
    </div>
  )
}
