import React, { useState, FC, useCallback } from 'react';

import { ExampleCard } from '../../components/common/ExampleCard';
import { ListItem } from './components/ListItem';

export const BadList: FC = () => {
  const [items, setItems] = useState<Array<string>>(['Apple', 'Banana', 'Orange']);

  const handleReverse = useCallback(() => {
    setItems(prev => [...prev].reverse());
  }, []);

  return (
    <ExampleCard
      variant="bad"
      title="Unstable Index Keys"
      description="Using index as key can cause issues when list items are reordered"
    >
      <button onClick={handleReverse} className="demo-button" aria-label="Reverse list items">
        Reverse Items
      </button>
      <div className="item-list">
        {items.map((item, index) => (
          <ListItem key={index} item={`${item}`} defaultValue={item} />
        ))}
      </div>
    </ExampleCard>
  );
};
