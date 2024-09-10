import { useEffect, useState } from "react";

export default function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   const toggleVisibility = () => {
  //     if (window.pageYOffset > 100) {
  //       setIsVisible(true);
  //     } else {
  //       setIsVisible(false);
  //     }
  //   };

  //   window.addEventListener('scroll', toggleVisibility);

  //   return () => window.removeEventListener('scroll', toggleVisibility);
  // }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={scrollToTop}
        className="p-3 underline text-gray-400 hover:text-black font-semibold transition-all"
      >
        GO TO TOP
      </button>
    </div>
  );
}
