import React, { FC, memo } from 'react';

export const StaticComponent: FC = () => {
  console.log('Static component rendered');
  return <div>Static Content</div>;
};

export const MemoizedStaticComponent = memo(StaticComponent);
