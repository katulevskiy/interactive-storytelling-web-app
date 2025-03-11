import React from 'react';

const Virtualization = ({ items, renderItem, itemSize }) => {
  const [viewportHeight, setViewportHeight] = React.useState(0);

  // Calculate total height of all items
  const totalContentHeight = items.length * itemSize;

  // Measure the visible portion of the list to optimize rendering
  const handleScroll = (e) => {
    const { scrollTop } = e.currentTarget;
    const startIdx = Math.floor(scrollTop / itemSize);
    const endIdx = Math.min(startIdx + Math.ceil(viewportHeight / itemSize), items.length);

    setViewportStart(startIdx);
    setViewportEnd(endIdx);
  };

  // Set viewport height on mount and resize
  React.useEffect(() => {
    const handleResize = () => setViewportHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    
    handleResize(); // Initial set

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [viewportStart, setViewportStart] = React.useState(0);
  const [viewportEnd, setViewportEnd] = React.useState(items.length);

  const virtualizedItems = items.slice(viewportStart, viewportEnd);

  return (
    <div
      style={{ height: '100%', overflowY: 'scroll' }}
      onScroll={handleScroll}
      ref={(el) => {
        if (el) setViewportHeight(el.clientHeight);
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