import { motion, useInView } from 'framer-motion';
import * as React from 'react';

export function TextFade({
  direction,
  children,
  className = '',
  duration = 0.8,
  delay = 0.1,
  repeat = 0,
}: {
  direction: 'up' | 'down';
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
  duration?: number;
  delay?: number;
  repeat?: number;
}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: direction === 'down' ? -50 : 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          delay,
          duration,
          ease: 'easeOut',
          repeat,
          repeatType: repeat ? 'reverse' : undefined,
        },
      }}
      viewport={{ once: false, amount: 0.2 }}
      className={className}
    >
      {React.Children.map(children, child =>
        React.isValidElement(child) ? (
          <motion.div
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
            variants={{
              hidden: { opacity: 0, y: direction === 'down' ? -50 : 50 },
              show: {
                opacity: 1,
                y: 0,
                transition: { delay, duration, ease: 'easeOut' },
              },
            }}
          >
            {child}
          </motion.div>
        ) : (
          child
        ),
      )}
    </motion.div>
  );
}
