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
    <div
      className={`w-full flex flex-col items-center justify-center min-h-screen 
        px-6 md:px-16 lg:px-24 max-w-screen-lg mx-auto ${className}`}
    >
      {title && <div>{title}</div>}

      {content && <div className="w-full flex justify-center">{content}</div>}
    </div>
  );
};

export default SectionWrapper;
