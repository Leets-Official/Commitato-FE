import { levelMap } from '@/constants';
import { motion } from 'framer-motion';
import { descriptions } from '@/constants';
import { useState } from 'react';

const PotatoSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handlePotatoClick = (name: string) => {
    setSelectedItem(prev => (prev === name ? null : name));
  };

  return (
    <div className="flex flex-col items-center gap-24 mb-52 w-full">
      {Object.entries(levelMap).map(
        ([name, { image: PotatoImage, comment: CommentImage }], index) => {
          const isSelected = selectedItem === name;
          const isLeft = index % 2 === 0;

          return (
            <div
              key={name}
              className="flex flex-col items-center w-full max-w-[1000px]"
            >
              {isSelected ? (
                <div
                  className={`
      flex items-center gap-8 w-full
      ${isLeft ? 'justify-start' : 'justify-end'}
    `}
                >
                  {isLeft ? (
                    <>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handlePotatoClick(name)}
                        className="cursor-pointer"
                      >
                        <PotatoImage className="w-48 md:w-48 lg:w-56 h-auto" />
                      </motion.div>
                      <CommentImage className="w-[300px] md:w-[600px] lg:w-[1200px]" />
                    </>
                  ) : (
                    <>
                      <CommentImage className="w-[300px] md:w-[600px] lg:w-[1200px]" />
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handlePotatoClick(name)}
                        className="cursor-pointer"
                      >
                        <PotatoImage className="w-48 md:w-48 lg:w-56 h-auto" />
                      </motion.div>
                    </>
                  )}
                </div>
              ) : (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handlePotatoClick(name)}
                  className="cursor-pointer"
                >
                  <PotatoImage className="w-48 h-auto" />
                </motion.div>
              )}

              <div
                className={`
                mt-6 text-grey text-assistive font-ExtraBold leading-[140%] tracking-[3%]
                ${isSelected ? (isLeft ? 'text-left items-start' : 'text-right items-end') : 'text-center items-center'}
                flex flex-col w-full
              `}
              >
                {descriptions[name]}
              </div>
            </div>
          );
        },
      )}
    </div>
  );
};
export default PotatoSection;
