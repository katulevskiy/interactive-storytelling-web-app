import React, { useState } from 'react';

const DraggableItem = ({ id, text, onDragStart }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', id);
    onDragStart(id);
  };

  return (
    <div draggable onDragStart={handleDragStart}>
      {text}
    </div>
  );
};

const DropZone = ({ onDrop, children }) => {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedItemId = e.dataTransfer.getData('text/plain');
    if (droppedItemId !== null) {
      onDrop(droppedItemId);
    }
  };

  return (
    <div onDragOver={handleDragOver} onDrop={handleDrop}>
      {children}
    </div>
  );
};

const DragAndDropComponent = () => {
  const [items, setItems] = useState([
    { id: '1', text: 'Item 1' },
    { id: '2', text: 'Item 2' },
    { id: '3', text: 'Item 3' }
  ]);
  const [draggedItemId, setDraggedItemId] = useState(null);

  const handleDragStart = (id) => {
    setDraggedItemId(id);
  };

  const handleDrop = (itemId) => {
    if (itemId !== draggedItemId) {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId
            ? { ...item, text: items.find((i) => i.id === draggedItemId).text }
            : { ...item, text: item.text.replace(/[\s\S]*$/, '') + ' (moved)' }
        )
      );
    }
  };

  return (
    <div>
      <h2>Drag and Drop List</h2>
      <DropZone onDrop={handleDrop}>
        {items.map((item) => (
          <DraggableItem
            key={item.id}
            id={item.id}
            text={item.text}
            onDragStart={handleDragStart}
          />
        ))}
      </DropZone>
    </div>
  );
};

export default DragAndDropComponent;