import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTop() {
  const [scrollToTopVisible, setScrollToTopVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Updating "scroll to top"
      setScrollToTopVisible(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
                fixed bottom-3 right-3 z-50 p-3 rounded-full shadow-lg
                transition-opacity duration-300
                ${scrollToTopVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                md:item-shadow
                content
                border border-black dark:border-white
                focus:outline-none cursor-pointer
            `}
      aria-label="Scroll to top"
    >
      <FaArrowUp size={16} />
    </button>
  );
}
