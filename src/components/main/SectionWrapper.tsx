import { ReactNode } from 'react';

interface SectionWrapperProps {
  title?: ReactNode;
  content?: ReactNode;
  className?: string;
  align?: 'left' | 'right' | 'center';
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  title,
  content,
  className,
  align = 'left',
}) => {
  const getAlignmentClass = (align: string) => {
    switch (align) {
      case 'left':
        return 'justify-start';
      case 'right':
        return 'justify-end';
      case 'center':
        return 'justify-center';
      default:
        return 'justify-start';
    }
  };

  return (
    <div
      className={`w-full flex flex-col items-center justify-center min-h-screen 
        px-6 md:px-16 lg:px-24 xl:px-36 ${className}`}
    >
      {title && (
        <div className={`w-full flex ${getAlignmentClass(align)}`}>{title}</div>
      )}

      {content && (
        <div className={`w-full flex ${getAlignmentClass(align)}`}>
          {content}
        </div>
      )}
    </div>
  );
};

export default SectionWrapper;
