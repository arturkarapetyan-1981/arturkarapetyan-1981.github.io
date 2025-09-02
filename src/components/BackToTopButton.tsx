"use client";

import { useEffect, useState } from "react";

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling 20px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 flex items-center justify-center rounded-full shadow-md border-2 transition-opacity duration-300 cursor-pointer ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{
        width: "48px",
        height: "48px",
        backgroundColor: "#b33e86",
        borderColor: "#b33e86",
      }}
      aria-label="Back to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        className="w-8 h-8"
      >
        <g fill="none" fillRule="evenodd">
          <path d="M0 0H32V32H0z" />
          <path
            fill="#fff"
            fillRule="nonzero"
            d="M11.384 13.333h9.232c.638 0 .958.68.505 1.079l-4.613 4.07c-.28.246-.736.246-1.016 0l-4.613-4.07c-.453-.399-.133-1.079.505-1.079z"
            transform="matrix(1 0 0 -1 0 32)"
          />
        </g>
      </svg>
    </button>
  );
};

export default BackToTopButton;
