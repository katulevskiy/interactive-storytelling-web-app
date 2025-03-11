import React from 'react';

// Constants and utility functions
const calculateTotalHeight = (items, itemSize) => items.length * itemSize;

const calculateVisibleIndices = (scrollTop, viewportHeight, itemSize, totalItems) => {
  const startIdx = Math.floor(scrollTop / itemSize);
  return [startIdx, Math.min(startIdx + Math.ceil(viewportHeight / itemSize), totalItems)];
};

// Custom hook for managing viewport height
function useViewportHeight() {
  const [viewportHeight, setViewportHeight] = React.useState(0);

  React.useEffect(() => {
    const handleResize = () => setViewportHeight(window.innerHeight);
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial set

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return viewportHeight;
}

// Main Virtualization component
const Virtualization = ({ items, renderItem, itemSize }) => {
  const viewportHeight = useViewportHeight();
  
  const totalContentHeight = calculateTotalHeight(items, itemSize);

  // State and handlers for scroll management
  const [viewportStart, setViewportStart] = React.useState(0);
  const [viewportEnd, setViewportEnd] = React.useState(items.length);

  const handleScroll = (e) => {
    const { scrollTop } = e.currentTarget;
    const [startIdx, endIdx] = calculateVisibleIndices(scrollTop, viewportHeight, itemSize, items.length);

    setViewportStart(startIdx);
    setViewportEnd(endIdx);
  };

  const virtualizedItems = items.slice(viewportStart, viewportEnd);

  return (
    <div
      style={{ height: '100%', overflowY: 'scroll' }}
      onScroll={handleScroll}
      ref={(el) => {
        if (el) setViewportHeight(el.clientHeight); // Update viewport height dynamically
      }}>
      <div
        style={{
          position: 'relative',
          height: totalContentHeight,
          width: '100%',
        }}>
        {virtualizedItems.map((item, index) => (
          <div key={index} style={{ position: 'absolute', top: (viewportStart + index) * itemSize }}>{renderItem(item)}</div>
        ))}
      </div>
    </div>
  );
};

export default Virtualization;