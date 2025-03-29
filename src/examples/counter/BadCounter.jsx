import { useState } from 'react'
import { StaticComponent } from './StaticComponent'

export const BadCounter = () => {
  const [count, setCount] = useState(0)
  console.log('Bad counter rendered')
  
  return (
    <div className="bad-example">
      <h3>Bad Counter (Unnecessary Renders)</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <StaticComponent/>
    </div>
  )
}
