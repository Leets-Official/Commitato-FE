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
        px-24 space-y-36 ${className}`}
    >
      {title && <div>{title}</div>}

      {content && (
        <div
          className={`w-full flex items-center ${
            align === 'left' ? 'justify-between' : 'justify-between'
          }`}
        >
          {align === 'left' && (
            <>
              {content}
              <div className="w-1/2" />
            </>
          )}

          {align === 'right' && (
            <>
              <div className="w-1/2" />
              {content}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SectionWrapper;
