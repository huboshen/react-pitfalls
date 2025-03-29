import { useState } from 'react'
import { ExampleCard } from '../../components/common/ExampleCard'
import { ListItem } from '../../components/common/ListItem'

export const BadList = () => {
  const [items, setItems] = useState(['Apple', 'Banana', 'Orange']);

  const handleReverse = () => {
    setItems(prev => [...prev].reverse());
  };

  return (
    <ExampleCard
      variant="bad"
      title="Unstable Index Keys"
    >
      <button onClick={handleReverse} className="demo-button" aria-label="Reverse list items">
        Reverse Items
      </button>
      <div className="item-list">
        {items.map((item, index) => (
          <ListItem key={index} item={`${item}`} keyType="index" defaultValue={item} />
        ))}
      </div>
    </ExampleCard>
  );
};
