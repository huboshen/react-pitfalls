import React, { useState, useCallback, FC } from 'react';

import { ExampleCard } from '../../components/common/ExampleCard';
import { ListItem } from './components/ListItem';

export const GoodList: FC = () => {
  const [items, setItems] = useState<Array<{ id: string; name: string }>>(() => [
    { id: crypto.randomUUID(), name: 'Apple' },
    { id: crypto.randomUUID(), name: 'Banana' },
    { id: crypto.randomUUID(), name: 'Orange' }
  ]);

  const handleReverse = useCallback(() => {
    setItems(prev => [...prev].reverse());
  }, []);

  return (
    <ExampleCard
      variant="good"
      title="Stable Unique Keys"
      description="Keys persist through changes"
    >
      <button onClick={handleReverse} className="demo-button" aria-label="Reverse list items">
        Reverse Items
      </button>
      <div className="item-list">
        {items.map(item => (
          <ListItem key={item.id} item={`${item.name} (ID: ${item.id.slice(0, 4)})`} defaultValue={item.name} />
        ))}
      </div>
    </ExampleCard>
  );
};
