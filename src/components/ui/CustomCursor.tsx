import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button";

      setIsHovering(!!isClickable);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Ring */}
      <div
        className="pointer-events-none fixed z-[9999] hidden transition-[width,height] duration-300 lg:block"
        style={{
          left: position.x - 20,
          top: position.y - 20,
          width: isHovering ? 56 : 40,
          height: isHovering ? 56 : 40,
          borderRadius: "50%",
          border: "1px solid rgba(6, 182, 212, 0.3)",
          transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      />

      {/* Inner Dot */}
      <div
        className="pointer-events-none fixed z-[9999] hidden lg:block"
        style={{
          left: position.x - 3,
          top: position.y - 3,
          width: 6,
          height: 6,
          borderRadius: "50%",
          backgroundColor: "rgba(6, 182, 212, 0.8)",
          transition: "width 0.3s, height 0.3s",
        }}
      />
    </>
  );
};

export default CustomCursor;