import SkeletonBox from '@/components/common/SkeletonBox';

const RankingItemSkeleton = () => {
  return (
    <div className="flex py-3 px-4 items-center">
      <div className="w-[10%]">
        <SkeletonBox width={20} height={20} />
      </div>
      <div className="w-[30%]">
        <SkeletonBox width={80} height={20} />
      </div>
      <div className="w-[35%]">
        <SkeletonBox width={100} height={20} />
      </div>
      <div className="w-[15%]">
        <SkeletonBox width={30} height={20} />
      </div>
      <div className="w-[10%] flex justify-between items-center">
        <SkeletonBox width={40} height={20} />
        <SkeletonBox width={12} height={12} />
      </div>
    </div>
  );
};

export default RankingItemSkeleton;
