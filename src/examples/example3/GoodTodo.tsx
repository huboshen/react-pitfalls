import React, { useState, useEffect, FC } from 'react';

import { INITIAL_TODOS } from './constants';
import { ExampleCard } from '../../components/common/ExampleCard';


export const GoodTodo: FC = () => {
  const initialTodos = structuredClone(INITIAL_TODOS);
  const [todos, setTodos] = useState<{ text: string, completed: boolean }[]>(initialTodos);

  useEffect(() => {
    console.log('GoodTodo rendered', todos);
  }, [todos]);

  const toggleTodo = (index: number) => {
    setTodos(todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <ExampleCard
      title="Proper State Update"
      variant="good"
      description="Good practice: Always create a new state object!">
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
    </ExampleCard>
  );
};
