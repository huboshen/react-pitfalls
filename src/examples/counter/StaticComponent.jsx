import { memo } from 'react';

export const StaticComponent = () => {
  console.log('Static component rendered')
  return <div>Static Content</div>
}

export const MemoizedStaticComponent = memo(StaticComponent)
