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

  const currentWindowDimensions = {
    isDesktop: windowDimensions >= 1200,
    isNotebook: windowDimensions >= 1024,
    isTablet: windowDimensions >= 768
  };

  useEffect(() => {
    if (hasWindow) {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow]);

  return { ...currentWindowDimensions };
}
