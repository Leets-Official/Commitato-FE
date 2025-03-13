import { motion } from 'framer-motion';

const textVariants = {
  offscreen: {
    y: 500,
  },
  onscreen: {
    y: 200,
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
    <div className="flex flex-col items-start gap-12 font-staatliches ">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={textVariants}
        exit={{ opacity: 0 }}
      >
        <HowTextItem
          size="lg:text-[180px] md:text-[150px] sm:text-[120px]"
          color="text-black"
          extraStyles="ml-[-450px]"
        />
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={textVariants}
        exit={{ opacity: 0 }}
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
      >
        <HowTextItem
          size="lg:text-[180px] md:text-[150px] sm:text-[120px]"
          color="text-[#cca644]"
          extraStyles="ml-[390px]"
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
  return <div className={`${size} ${color} ${extraStyles}`}>HOW?</div>;
};
