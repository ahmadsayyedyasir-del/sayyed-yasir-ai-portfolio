import { useEffect, useState } from "react";

const MouseGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-150"
      style={{
        left: position.x - 160,
        top: position.y - 160,
      }}
    />
  );
};

export default MouseGlow;