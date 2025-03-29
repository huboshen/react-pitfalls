import { useState, useEffect } from 'react'

export const GoodTimer = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

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
    <div className="good-example">
      <h3>Good Timer (With Cleanup)</h3>
      <p>Count: {count}</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <div style={{ color: 'green', marginTop: '10px' }}>
        <p>Good practice: Timer properly cleaned up!</p>
      </div>
    </div>
  );
};
