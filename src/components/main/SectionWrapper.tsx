import { ReactNode } from 'react';

interface SectionWrapperProps {
  title?: ReactNode;
  content?: ReactNode;
  className?: string;
  align?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  title,
  content,
  className,
  align = 'left',
}) => {
  return (
    <div
      className={`w-full flex flex-col items-center justify-center min-h-screen 
        px-36 space-y-36 ${className}`}
    >
      {title && <div>{title}</div>}

      {content && (
        <div
          className={`w-full flex ${
            align === 'left' ? 'justify-start' : 'justify-end'
          }`}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default SectionWrapper;
