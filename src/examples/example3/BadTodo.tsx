import React, { FC, useState } from 'react';

import { INITIAL_TODOS } from './constants';
import { ExampleCard } from '../../components/common/ExampleCard';


export const BadTodo: FC = () => {
  // deep clone the initial todos
  const initialTodos = structuredClone(INITIAL_TODOS);
  const [todos, setTodos] = useState<{ text: string; completed: boolean }[]>(initialTodos);

  const toggleTodo = (index: number) => {
    todos[index].completed = !todos[index].completed;
    setTodos(todos);
    console.log('BadTodo rendered', todos);
  };

  return (
    <ExampleCard 
      title="Bad State Mutation" 
      variant="bad" 
      description="Notice: Direct mutation of state is bad practice!">

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
    </ExampleCard>
  );
};
