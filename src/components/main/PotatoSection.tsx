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
        ([name, { image: PotatoImage, comment: CommentImage }]) => (
          // eslint-disable-next-line react/jsx-key
          <div className="relative flex flex-col items-center justify-center gap-8">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handlePotatoClick(name)}
            >
              <PotatoImage key={name} className="w-48 h-auto cursor-pointer" />
            </motion.div>
            <div className="text-grey text-assistive font-ExtraBold leading-[140%] tracking-[3%]">
              {descriptions[name]}
            </div>

            {selectedItem === name && (
              <div className="absolute -top-20 left-1/2 -translate-x-1/2">
                <CommentImage className="w-[300px] md:w-[400px] lg:w-[500px]" />
              </div>
            )}
          </div>
        ),
      )}
    </div>
  );
};
export default PotatoSection;
