import FarmLine from '@/assets/icon/commitFarm.svg?react';
import CountNumber from '@/components/myPage/CountNumber';
import CommitCalendar from '@/components/myPage/CommitCalendar';
import SkeletonBox from '@/components/common/SkeletonBox';
import Line from '@/assets/icon/myPageLine.svg?react';
import { CommitType } from '@/types/commit';

interface MyCommitFarmProps {
  isLoading: boolean;
  className?: string;
  commits: CommitType[];
}

const MyCommitFarm = ({
  isLoading,
  className = '',
  commits,
}: MyCommitFarmProps) => {
  if (isLoading) {
    return (
      <main className={`w-full flex flex-col mt-2 ${className}`}>
        <SkeletonBox height={30} width="30%" className="mb-1" />
        <Line />
        <SkeletonBox height={200} className="mt-5" />
      </main>
    );
  }

  return (
    <main className="w-full flex flex-col mt-2">
      <div className="w-full flex justify-between px-2">
        <p className="w-full font-ExtraBold text-captionBody whitespace-nowrap">
          나의 커밋 농장
        </p>
        <CountNumber />
      </div>
      <FarmLine className="w-full" />
      <CommitCalendar commits={commits} />
    </main>
  );
};

export default MyCommitFarm;
