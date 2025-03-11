import { useState } from 'react';

const useDragAndDrop = () => {
  const [dragging, setDragging] = useState(false);
  
  const handleDragStart = (event) => {
    setDragging(true);
    event.dataTransfer.setData('text/plain', ''); // Necessary for Firefox compatibility
  };

  const handleDragOver = (event) => {
    if (!dragging) return;
    event.preventDefault(); // Allow drop by preventing default behavior
  };

  const handleDrop = (event, onDropCallback) => {
    if (!dragging) return;

    event.preventDefault();
    setDragging(false);

    if (onDropCallback && typeof onDropCallback === 'function') {
      const files = event.dataTransfer.files;
      onDropCallback(files);
    }
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  return { 
    handleDragStart, 
    handleDragOver, 
    handleDrop, 
    handleDragEnd,
    dragging
  };
};

export default useDragAndDrop;