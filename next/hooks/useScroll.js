import { useState, useEffect } from 'react';

export function useScroll() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [bodyOffset, setBodyOffset] = useState(
    typeof window === 'undefined' || !window.document ? 0 : document.body.getBoundingClientRect()
  );
  const [scrollY, setScrollY] = useState(bodyOffset.top);
  const [scrollX, setScrollX] = useState(bodyOffset.left);
  const [scrollYBottom, setScrollYBottom] = useState(bodyOffset.top);
  const [scrollDirection, setScrollDirection] = useState();

  const listener = (e) => {
    setBodyOffset(
      typeof window === 'undefined' || !window.document ? 0 : document.body.getBoundingClientRect()
    );
    // setScrollY(-bodyOffset.top);
    setScrollY(window.pageYOffset);
    setScrollX(bodyOffset.left);
    setScrollDirection(lastScrollTop > -bodyOffset.top ? 'down' : 'up');
    setLastScrollTop(-bodyOffset.top);

    const bodyHeight = document.querySelector('body').clientHeight;
    setScrollYBottom(bodyHeight - scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  });

  return {
    scrollY,
    scrollX,
    scrollDirection,
    scrollYBottom
  };
}
