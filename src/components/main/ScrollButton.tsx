import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import DownArrowSvg from '@/assets/icon/ic_main_down_arrow.svg?react';
import TopArrowSvg from '@/assets/icon/ic_main_top_arrow.svg?react';

const ScrollButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollUp, setScrollUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentY = window.scrollY;

    setIsVisible(currentY > 100);

    if (currentY > lastScrollY) {
      setScrollUp(false);
    } else {
      setScrollUp(true);
    }

    setLastScrollY(currentY);
  };

  const handleClick = () => {
    if (scrollUp) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const ArrowSvg = scrollUp ? TopArrowSvg : DownArrowSvg;

  return (
    <motion.button
      onClick={handleClick}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-white p-4 shadow-lg"
    >
      <ArrowSvg className="h-6 w-6" />
    </motion.button>
  );
};

export default ScrollButton;
