import React, { FC , useState, useEffect } from 'react';

import { ExampleCard } from '../../components/common/ExampleCard';


export const BadTimer: FC = () => {
  const [count, setCount] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    if (isRunning) {
      setInterval(() => {
        console.log('Bad timer tick', count);
        setCount(c => c + 1);
      }, 1000);
    }
  }, [isRunning, count]);

  return (
    <ExampleCard title="Bad Timer (No Cleanup)" variant='bad' description='Warning: Timer not cleaned up! Check console for multiple ticks.'>
      <p>Count: {count}</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
    </ExampleCard>
  );
};
