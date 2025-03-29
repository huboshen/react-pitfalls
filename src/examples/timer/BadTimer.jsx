import { useState, useEffect } from 'react'

export const BadTimer = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      setInterval(() => {
        console.log('Bad timer tick', count);
        setCount(c => c + 1);
      }, 1000);
    }
  }, [isRunning, count]);

  return (
    <div className="bad-example">
      <h3>Bad Timer (No Cleanup)</h3>
      <p>Count: {count}</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <div style={{ color: 'red', marginTop: '10px' }}>
        <p>Warning: Timer not cleaned up! Check console for multiple ticks.</p>
      </div>
    </div>
  );
};
