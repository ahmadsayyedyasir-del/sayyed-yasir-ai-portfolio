import { useState, useEffect } from "react";

type ScrollState = {
  scrollY: number;
  scrollDirection: "up" | "down";
  isAtTop: boolean;
};

const useScroll = (): ScrollState => {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: 0,
    scrollDirection: "down",
    isAtTop: true,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? "down" : "up";

      setScrollState({
        scrollY: currentScrollY,
        scrollDirection: direction,
        isAtTop: currentScrollY < 10,
      });

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollState;
};

export default useScroll;