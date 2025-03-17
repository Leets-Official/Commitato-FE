import FirstCommitato from '@/assets/icon/ic_firstCommitato.svg?react';
import { UserTypes } from 'commitato-types';

interface ProfileCardProps {
  user: UserTypes;
}

const ProfileCard = ({ user }: ProfileCardProps) => {
  return (
    <div className="text-black">
      <div className="flex px-3">
        <FirstCommitato className="w-[17%] h-[15%] flex-shrink-0" />
        <div className="ml-4 p-6 flex-1">
          <h2 className="font-ExtraBold text-large">{user.githubId}</h2>
          <div className="font-SemiBold text-assistive flex gap-7">
            <p>Ranking {user.ranking}위</p>
            <p>Level {user.level}</p>
            <p>연속 커밋 {user.commit}일차</p>
          </div>
          <div className="mt-4 w-full">
            <div className="relative w-full bg-gray-300 h-[39px] rounded-xl">
              <div
                className="absolute left-0 top-0 h-full bg-primary rounded-xl"
                style={{ width: '60%' }}
              ></div>
            </div>
            <div className="flex justify-between text-grey font-semibold text-sm mt-1">
              <p>0점</p>
              <p>50점</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
