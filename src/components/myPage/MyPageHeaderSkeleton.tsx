import SkeletonBox from '@/components/common/SkeletonBox';
import Line from '@/assets/icon/myPageLine.svg?react';

const MyPageHeaderSkeleton = () => {
  return (
    <div className="flex flex-col gap-2">
      <SkeletonBox height={50} width="15%" />
      <Line />
    </div>
  );
};

export default MyPageHeaderSkeleton;
