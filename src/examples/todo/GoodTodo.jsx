import { useState, useEffect } from 'react'
import { INITIAL_TODOS } from './constants'

export const GoodTodo = () => {
  const initialTodos = structuredClone(INITIAL_TODOS);
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    console.log('GoodTodo rendered', todos);
  }, [todos]);

  const toggleTodo = index => {
    setTodos(todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    ));
  }

  return (
    <div className="good-example">
      <h3>Proper State Update</h3>
      {todos.map((todo, index) => (
        <div key={todo.text}>
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(index)}
            />
            {todo.text}
          </label>
          <div>{todo.completed ? ' (completed)' : ' (not completed)'}</div>
        </div>
      ))}
      <div style={{ color: 'green', marginTop: '10px' }}>
        <p>Good practice: Always create a new state object!</p>
      </div>
    </div>
  )
}
