import { useState } from 'react'
import { INITIAL_TODOS } from './constants'

export const BadTodo = () => {
  // deep clone the initial todos
  const initialTodos = structuredClone(INITIAL_TODOS);
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = index => {
    todos[index].completed = !todos[index].completed;
    setTodos(todos);
    console.log('BadTodo rendered', todos);
  }

  return (
    <div className="bad-example">
      <h3>Bad State Mutation</h3>
      {todos.map((todo, index) => (
        <div key={index}>
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
      <div style={{ color: 'red', marginTop: '10px' }}>
        <p>Notice: Direct mutation of state is bad practice!</p>
      </div>
    </div>
  )
}
