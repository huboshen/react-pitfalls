import { useState } from 'react'
import './styles/App.css'
import { BadCounter } from './examples/counter/BadCounter.jsx'
import { GoodCounter } from './examples/counter/GoodCounter.jsx'
import { BadList } from './examples/list/BadList.jsx'
import { GoodList } from './examples/list/GoodList.jsx'
import { BadTodo } from './examples/todo/BadTodo.jsx'
import { GoodTodo } from './examples/todo/GoodTodo.jsx'
import { BadTimer } from './examples/timer/BadTimer.jsx'
import { GoodTimer } from './examples/timer/GoodTimer.jsx'


export default function App() {
  const [example, setExample] = useState(0)

  const examples = [
    [BadCounter, GoodCounter],
    [BadList, GoodList],
    [BadTodo, GoodTodo],
    [BadTimer, GoodTimer],
  ]

  const [BadComponent, GoodComponent] = examples[example]

  return (
    <div className="app">
      <h1>React Rendering Pitfalls Demo</h1>
      <div className="nav">
        {examples.map((_, i) => (
          <button
            key={i}
            onClick={() => setExample(i)}
            className={i === example ? 'active' : ''}
          >
            Example {i + 1}
          </button>
        ))}
      </div>

      <div className="examples-container">
        <div className="example-column">
          <h2>Bad Practice</h2>
          <BadComponent />
        </div>
        <div className="example-column">
          <h2>Good Practice</h2>
          <GoodComponent />
        </div>
      </div>

      <div className="notes">
        <p>Open browser console to see render logs</p>
      </div>
    </div>
  )
}
