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
    <div className="flex flex-col gap-8 font-staatliches w-full items-start mx-auto pl-12 mt-36">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={textVariants}
        exit={{ opacity: 0 }}
        className="w-full flex justify-start"
      >
        <HowTextItem
          size="lg:text-[150px] md:text-[130px] sm:text-[100px]"
          color="text-black"
          extraStyles="text-left"
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
          size="lg:text-[150px] md:text-[130px] sm:text-[100px]"
          color="text-[#4d3e1a]"
          extraStyles="text-center"
        />
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={textVariants}
        exit={{ opacity: 0 }}
        className="w-full flex justify-end"
      >
        <HowTextItem
          size="lg:text-[150px] md:text-[130px] sm:text-[100px]"
          color="text-[#cca644]"
          extraStyles="text-right"
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
  return (
    <div className={`${size} ${color} ${extraStyles} text-center`}>HOW?</div>
  );
};
