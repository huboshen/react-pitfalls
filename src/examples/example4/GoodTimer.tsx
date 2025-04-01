import React, { useState, useEffect, FC } from 'react';

import { ExampleCard } from '../../components/common/ExampleCard';

export const GoodTimer: FC = () => {
  const [count, setCount] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      console.log('Good timer tick');
      setCount(c => c + 1);
    }, 1000);

    return () => {
      console.log('Cleaning up timer');
      clearInterval(timer);
    };
  }, [isRunning]);

  return (
    <ExampleCard title="Good Timer (With Cleanup)" variant='good' description='Good practice: Timer properly cleaned up!'>
      <p>Count: {count}</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
    </ExampleCard>
  );
};
