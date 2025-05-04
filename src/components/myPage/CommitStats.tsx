import Github from '@/assets/icon/myPageGithub.svg?react';
import Line from '@/assets/icon/commitStatsLine.svg?react';
import { UserTypes } from 'commitato-types';
import { statsData } from '@/constants';
import SkeletonBox from '../common/SkeletonBox';

interface ProfileCardProps {
  user: UserTypes;
  isLoading: boolean;
}

const CommitStats = ({ user, isLoading }: ProfileCardProps) => {
  const handleGithub = () => {
    window.open(`https://github.com/${user.githubId}`, '_blank');
  };

  if (isLoading) {
    return (
      <div className="text-black flex flex-col p-2 w-full ml-3 mt-5">
        {Array.from({ length: statsData.length }).map((_, index) => (
          <div key={index} className="mb-2">
            <SkeletonBox height={35} width="90%" className="mb-3 ml-3" />
            <Line className="w-full" />
          </div>
        ))}
        <SkeletonBox height={35} width="90%" className="mt-4 ml-3" />
      </div>
    );
  }

  return (
    <div className="text-black flex flex-col p-2 w-full">
      {statsData.map(({ label, valueKey }, index) => (
        <>
          <div key={index} className="flex items-center justify-between">
            <p className="font-staatliches text-body ml-2">{label}</p>
            <p className="font-bold text-captionHeader w-[141px] flex justify-center">
              {user[valueKey as keyof UserTypes]}
            </p>
          </div>
          <Line className="w-full" />
        </>
      ))}
      <div className="flex items-center justify-between">
        <div className="flex items-center ml-2" onClick={handleGithub}>
          <Github />
          <p className="font-staatliches text-[32px]">GitHub</p>
        </div>
        <p className="font-semibold text-[15px] w-[141px] flex justify-center">
          {user.githubId}
        </p>
      </div>
    </div>
  );
};

export default CommitStats;
