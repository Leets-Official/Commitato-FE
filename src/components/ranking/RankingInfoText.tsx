import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import QuestionMarkIcon from '@/assets/icon/ic_question_mark.svg?react';

const RankingInfoModal = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <QuestionMarkIcon className="w-5 h-5 mt-3 cursor-pointer" />

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.2 }}
            className="absolute left-7 top-[2.5px] z-20"
          >
            <div className="rounded-full  bg-primary/20 px-4 py-2 text-yellow-500 text-sm font-SemiBold whitespace-nowrap">
              *랭킹은 00시 30분 기준 3시간마다 업데이트돼요!
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RankingInfoModal;
