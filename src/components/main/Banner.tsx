import { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion';
import { wrap } from '@motionone/utils';
import BannerIcon from '@/assets/icon/ic_main_banner.svg?react';

const ScrollBanner: React.FC<{ baseVelocity?: number; className?: string }> = ({
  baseVelocity = 30,
  className = '',
}) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 500,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 350], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, v => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="flex gap-10 text-[64px] font-staatliches tracking-tight uppercase text-black"
        style={{ x }}
      >
        {Array(25)
          .fill(null)
          .map((_, index) => (
            <div key={index} className="flex items-center gap-6">
              <BannerIcon className="w-[160px]" />
              <span className="tracking-wider text-[#333]">
                ABOUT &nbsp; COMMITATO
              </span>
            </div>
          ))}
      </motion.div>
    </div>
  );
};

export default ScrollBanner;
