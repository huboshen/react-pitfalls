import React, { useState, useEffect } from 'react';

interface ListItemProps {
  item: string;
  defaultValue: string;
}

export const ListItem = ({ item, defaultValue }: ListItemProps) => {
  const [text, setText] = useState(defaultValue);

  useEffect(() => {
    console.log("ListItem mounted:", item);
    return () => console.log("ListItem unmounted:", item);
  }, [item]);

  return (
    <div style={{ backgroundColor: "lightblue", padding: "5px", margin: "5px" }}>
      <span>{item}</span>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here"
      />
    </div>
  );
};
