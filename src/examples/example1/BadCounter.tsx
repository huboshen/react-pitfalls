import React, { useState, FC } from 'react';

import { StaticComponent } from './StaticComponent';
import { ExampleCard } from '../../components/common/ExampleCard';

export const BadCounter: FC = () => {
  const [count, setCount] = useState<number>(0);
  console.log('Bad counter rendered');
  
  return (
      <ExampleCard title="Bad Counter (Unnecessary Renders)" variant='bad' description='Check console for unnecessary renders'>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <StaticComponent/>
    </ExampleCard>
  );
};
