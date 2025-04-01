import React, { useState, FC } from 'react';

import { MemoizedStaticComponent } from './StaticComponent';
import { ExampleCard } from '../../components/common/ExampleCard';

export const GoodCounter: FC = () => {
  const [count, setCount] = useState<number>(0);
  console.log('Good counter rendered');
  
  return (
    <ExampleCard title="Good Counter (Optimized)" variant='good' description='Check console to compare the number of renders with the bad counter'>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <MemoizedStaticComponent/>
    </ExampleCard>
  );
};
