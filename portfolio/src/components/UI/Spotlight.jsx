import React, { useState, useEffect } from 'react';

const Spotlight = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] transition duration-300"
      style={{
        background: `radial-gradient(800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(100, 255, 218, 0.07), transparent 80%)`,
      }}
    />
  );
};

export default Spotlight;