import { motion } from 'framer-motion';

const textVariants = {
  offscreen: {
    y: 100,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.9,
    },
  },
};

const HowText: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-12 font-staatliches w-full">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={textVariants}
        exit={{ opacity: 0 }}
        className="w-full flex justify-center"
      >
        <HowTextItem
          size="lg:text-[180px] md:text-[150px] sm:text-[120px]"
          color="text-black"
        />
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={textVariants}
        exit={{ opacity: 0 }}
        className="w-full flex justify-center"
      >
        <HowTextItem
          size="lg:text-[180px] md:text-[150px] sm:text-[120px]"
          color="text-[#4d3e1a]"
        />
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={textVariants}
        exit={{ opacity: 0 }}
        className="w-full flex justify-center"
      >
        <HowTextItem
          size="lg:text-[180px] md:text-[150px] sm:text-[120px]"
          color="text-[#cca644]"
        />
      </motion.div>
    </div>
  );
};

export default HowText;

interface HowTextItemProps {
  size: string;
  color: string;
  extraStyles?: string;
}

const HowTextItem: React.FC<HowTextItemProps> = ({
  size,
  color,
  extraStyles,
}) => {
  return <div className={`${size} ${color} text-center`}>HOW?</div>;
};
