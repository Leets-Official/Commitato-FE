import { ReactNode, forwardRef } from 'react';

interface SectionWrapperProps {
  title?: ReactNode;
  content?: ReactNode;
  className?: string;
  align?: 'left' | 'right' | 'center';
}

const SectionWrapper = forwardRef<HTMLDivElement, SectionWrapperProps>(
  ({ title, content, className, align = 'left' }, ref) => {
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
        ref={ref}
        className={`w-full flex flex-col items-center justify-center min-h-screen 
          px-6 md:px-16 lg:px-24 xl:px-36 ${className}`}
      >
        {title && (
          <div className={`w-full flex ${getAlignmentClass(align)}`}>
            {title}
          </div>
        )}
        {content && (
          <div className={`w-full flex ${getAlignmentClass(align)}`}>
            {content}
          </div>
        )}
      </div>
    );
  },
);

SectionWrapper.displayName = 'SectionWrapper';

export default SectionWrapper;
