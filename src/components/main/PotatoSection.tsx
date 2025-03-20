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
    <div className="flex flex-col justify-center items-center gap-16 mb-52">
      {Object.entries(levelMap).map(
        ([name, { image: PotatoImage, comment: CommentImage }], index) => {
          const isLeftAligned = index % 2 === 0;
          const isSelected = selectedItem === name;

          return (
            <div
              key={name}
              className={`relative flex flex-col items-center gap-4 transition-all duration-500 ease-in-out`}
            >
              <div
                className={`flex items-center gap-4 ${isLeftAligned ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handlePotatoClick(name)}
                  className="cursor-pointer"
                >
                  <PotatoImage className="w-48 h-auto" />
                </motion.div>

                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, x: isLeftAligned ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-[220px] md:w-[300px] lg:w-[380px]"
                  >
                    <CommentImage className="w-[800px] md:w-[700px] sm:w-[500px]" />
                  </motion.div>
                )}
              </div>

              <div
                className={`text-grey text-assistive font-ExtraBold leading-[140%] tracking-[3%] transition-all duration-500 text-center`}
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
