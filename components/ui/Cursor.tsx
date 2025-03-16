"use client";

import React, { useEffect, useState } from "react";

type Position = {
  x: number;
  y: number;
};

const Cursor: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []); // Ensure the dependency array is stable

  return (
    <div
      className="custom-cursor"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
    />
  );
};

export default Cursor;
