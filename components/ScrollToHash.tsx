'use client';

import { useEffect } from 'react';

const ScrollToHash = () => {
  const scrollToElement = () => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    // Initial scroll
    scrollToElement();

    // Scroll on hash change
    window.addEventListener('hashchange', scrollToElement);

    return () => {
      window.removeEventListener('hashchange', scrollToElement);
    };
  }, []);

  return null;
};

export default ScrollToHash;
