import { levelMap } from '@/constants';
import { motion } from 'framer-motion';
import { descriptions } from '@/constants';

const PotatoSection: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-16 mb-52">
      {Object.entries(levelMap).map(([name, { image: PotatoImage }]) => (
        <div className="flex flex-col items-center justify-center gap-8">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <PotatoImage key={name} className="w-48 h-auto cursor-pointer" />
          </motion.div>
          <div className="text-grey text-assistive font-ExtraBold leading-[140%] tracking-[3%]">
            {descriptions[name]}
          </div>
        </div>
      ))}
    </div>
  );
};
export default PotatoSection;
