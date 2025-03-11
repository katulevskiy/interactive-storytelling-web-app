// analyticsTracker.js

export const trackShareEvent = async (platform, storyId, metadata) => {
  try {
    // Construct payload for tracking
    const payload = {
      platform,
      storyId,
      timestamp: new Date().toISOString(),
      ...metadata,
    };

    // Send the share event to a backend service or analytics provider
    await fetch('/api/analytics/share', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    console.log(`Share tracked for platform: ${platform}, storyId: ${storyId}`);
  } catch (error) {
    console.error('Error tracking share event:', error);
  }
};