import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6
      });
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed h-5 w-5 bg-cyan-500 rounded-full z-50 pointer-events-none"
    />
  );
};

export default Cursor;
