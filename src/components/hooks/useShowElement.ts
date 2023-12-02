import { useState, useEffect } from "react";

interface useShowElementReturnI {
  showElement: boolean;
}

/**
 * Hook to determine if an element should be shown based on the scroll position.
 * @param {number} showAfter - The scroll position (in pixels) after which the element should be shown.
 *
 * @returns {Object} - An object containing the state variable boolean `showElement`.
 */
const useShowElement = (showAfter: number): useShowElementReturnI => {
  const [showElement, setShowElement] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > showAfter) {
        setShowElement(true);
      } else {
        setShowElement(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showAfter]);

  return { showElement };
};

export default useShowElement;
