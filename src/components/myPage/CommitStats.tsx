import Github from '@/assets/icon/myPageGithub.svg?react';
import Line from '@/assets/icon/commitStatsLine.svg?react';
import { UserTypes } from 'commitato-types';
import { statsData } from '@/constants';

interface ProfileCardProps {
  user: UserTypes;
}

const CommitStats = ({ user }: ProfileCardProps) => {
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
        <div className="flex items-center ml-2">
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
