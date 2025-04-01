import React, { useState } from 'react';

import './styles/App.css';
import { BadCounter } from './examples/example1/BadCounter.tsx';
import { GoodCounter } from './examples/example1/GoodCounter.tsx';
import { BadList } from './examples/example2/BadList.tsx';
import { GoodList } from './examples/example2/GoodList.tsx';
import { BadTodo } from './examples/example3/BadTodo.tsx';
import { GoodTodo } from './examples/example3/GoodTodo.tsx';
import { BadTimer } from './examples/example4/BadTimer.tsx';
import { GoodTimer } from './examples/example4/GoodTimer.tsx';


export default function App() {
  const [example, setExample] = useState<number>(0);

  const examples = [
    [BadCounter, GoodCounter],
    [BadList, GoodList],
    [BadTodo, GoodTodo],
    [BadTimer, GoodTimer],
  ];

  const [BadComponent, GoodComponent] = examples[example];

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
  );
}
