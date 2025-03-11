module.exports = {
  enableOptimizations: true,
  eventDebounceDelay: 50,
  virtualizationThreshold: 100,
  useEfficientLibrary: 'react-beautiful-dnd', // Using a library known for real-time interactivity

  visualFeedbackOptions: {
    opacityOnDrag: 0.8,
    scaleOnDrag: 1.05,
    shadowColor: '#000',
    shadowBlur: 10
  },

  performanceSettings: {
    maxElementsInMemory: 200, // Limit to optimize memory usage for large datasets
    lazyLoadThreshold: 20     // Start loading elements just before they come into view
  }
};