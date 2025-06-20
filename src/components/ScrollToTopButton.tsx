import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500, smooth: true });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 z-50 bg-designColor text-white p-3 rounded-full shadow-md hover:scale-110 transition-transform duration-300"
      >
        <FaArrowUp />
      </button>
    )
  );
};

export default ScrollToTopButton;