import { useState, useEffect } from 'react';

export default function useWindowDimensions() {
  const hasWindow = typeof window !== 'undefined';

  function getWindowDimensions() {
    const windowWidth = hasWindow ? window.innerWidth : null;

    return windowWidth;
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  function handleResize() {
    setWindowDimensions(getWindowDimensions());
  }

  useEffect(() => {
    if (hasWindow) {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
}
