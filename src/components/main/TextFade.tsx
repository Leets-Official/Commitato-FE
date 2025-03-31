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
  direction: 'up' | 'down' | 'left' | 'right';
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
  duration?: number;
  delay?: number;
  repeat?: number;
}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 50 };
      case 'down':
        return { opacity: 0, y: -50 };
      case 'left':
        return { opacity: 0, x: 50 };
      case 'right':
        return { opacity: 0, x: -50 };
      default:
        return { opacity: 0, y: 50 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      whileInView={{
        opacity: 1,
        x: 0,
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
              hidden:
                direction === 'left'
                  ? { opacity: 0, x: 50 }
                  : direction === 'right'
                    ? { opacity: 0, x: -50 }
                    : direction === 'up'
                      ? { opacity: 0, y: 50 }
                      : { opacity: 0, y: -50 },
              show:
                direction === 'left' || direction === 'right'
                  ? {
                      opacity: 1,
                      x: 0,
                      transition: {
                        x: {
                          type: 'spring',
                          bounce: 0.3,
                          stiffness: 1200,
                          damping: 50,
                          mass: 0.3,
                          delay: 0,
                        },
                        opacity: {
                          duration: 0.2,
                          ease: 'linear',
                          delay: 0,
                        },
                      },
                    }
                  : {
                      opacity: 1,
                      y: 0,
                      transition: {
                        y: {
                          type: 'spring',
                          bounce: 0.3,
                          stiffness: 1000,
                          damping: 40,
                          mass: 0.3,
                          delay,
                        },
                        opacity: {
                          duration: 0.2,
                          ease: 'linear',
                          delay,
                        },
                      },
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
