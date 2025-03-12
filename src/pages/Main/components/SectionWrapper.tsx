import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionWrapperProps {
  title?: ReactNode;
  content?: ReactNode;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  title,
  content,
  className,
}) => {
  return (
    <motion.section
      className={`w-full flex flex-col items-center justify-center min-h-screen 
        px-6 md:px-16 lg:px-24 max-w-screen-lg mx-auto ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.1, duration: 0.8, ease: 'easeOut' },
      }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {title && <div>{title}</div>}

      {content && <div className="w-full flex justify-center">{content}</div>}
    </motion.section>
  );
};

export default SectionWrapper;
