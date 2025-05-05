import SkeletonBox from '@/components/common/SkeletonBox';

const ProfileCardSkeleton = () => {
  return (
    <div className="text-black">
      <div className="flex px-3">
        <div className="w-[17%] h-[15%] flex items-center justify-center">
          <SkeletonBox width={150} height={180} />
        </div>

        <div className="ml-7 flex-1 mt-5">
          <div className="flex justify-between items-center">
            <div>
              <SkeletonBox height={40} width={200} className="mb-2" />
              <SkeletonBox height={25} width={350} />
            </div>
            <div>
              <SkeletonBox
                height={50}
                width={150}
                className="rounded-full mr-3"
              />
              <SkeletonBox height={16} width="75%" className="mb-4 ml-3" />
            </div>
          </div>
          <div className="relative w-full mt-5 mb-2">
            <SkeletonBox height={39} width="98%" className="rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCardSkeleton;
