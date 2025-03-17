import { useEffect, useState } from 'react';

const BackgroundController = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newIndex = Math.floor(scrollY / sectionHeight);
      setActiveIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionHeight]);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-10 transition-all duration-1000 ease-in-out">
      <div
        className={`absolute top-0 left-0 w-full h-full  bg-yellow-100 transition-opacity duration-1000 ${
          activeIndex < 2 ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div
        className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b from-yellow-100 to-[#000] transition-opacity duration-1000 ${
          activeIndex === 2 ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div
        className={`absolute top-0 left-0 w-full h-full bg-[#000] transition-opacity duration-1000 ${
          activeIndex >= 3 && activeIndex < 5 ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div
        className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#000] to-yellow-100 transition-opacity duration-1000 ${
          activeIndex === 5 ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div
        className={`absolute top-0 left-0 w-full h-full bg-yellow-100 transition-opacity duration-1000 ${
          activeIndex >= 6 && activeIndex < 8 ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div
        className={`absolute top-0 left-0 w-full h-[150vh] bg-gradient-to-b from-yellow-100 via-[#000] to-[#000] transition-opacity duration-1000 ${
          activeIndex === 8 ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

export default BackgroundController;
