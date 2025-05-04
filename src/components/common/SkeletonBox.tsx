import Skeleton, { SkeletonProps } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface SkeletonBoxProps extends SkeletonProps {
  className?: string;
}

const SkeletonBox = ({ className = '', ...props }: SkeletonBoxProps) => {
  return (
    <Skeleton
      baseColor="#e0e0e0"
      highlightColor="#f5f5f5"
      className={`rounded-2xl ${className}`}
      {...props}
    />
  );
};

export default SkeletonBox;
