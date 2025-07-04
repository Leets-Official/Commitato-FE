import { UserTypes } from 'commitato-types';
import { useState } from 'react';
import QuestionMark from '@/assets/icon/ic_question_mark.svg?react';
import LevelMapModal from '@/components/modal/LevelMapModal';
import UpdateButton from '@/components/myPage/UpdateButton';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';
import ProfileCardSkeleton from '@/components/myPage/ProfileCardSkeleton';

interface ProfileCardProps {
  user: UserTypes;
  setUser: (updatedUser: UserTypes) => void;
  isLoading: boolean;
  isMyPage: boolean;
}

const ProfileCard = ({
  user,
  setUser,
  isLoading,
  isMyPage,
}: ProfileCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  if (isLoading) {
    return <ProfileCardSkeleton />;
  }

  const handleIconClick = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPosition({
      top: rect.top + window.scrollY - 20,
      left: rect.left + window.scrollX - 460,
    });
    setIsModalOpen(true);
  };

  const getMaxScore = (tier: string) => {
    switch (tier) {
      case '바보 감자':
        return 30000;
      case '말하는 감자':
        return 150000;
      case '개발자 감자':
        return 300000;
      case 'CEO 감자':
        return 'MAX';
      default:
        return 30000;
    }
  };

  const getMinScore = (tier: string) => {
    switch (tier) {
      case '바보 감자':
        return 0;
      case '말하는 감자':
        return 30000;
      case '개발자 감자':
        return 150000;
      case 'CEO 감자':
        return 300000;
      default:
        return 0;
    }
  };

  const minScore = getMinScore(user.tierName);
  const maxScore = getMaxScore(user.tierName);
  const progress =
    maxScore === 'MAX'
      ? 100
      : ((user.exp - minScore) / (maxScore - minScore)) * 100;

  const getTimeAgo = (isoString: string) => {
    const pastDate = new Date(isoString);
    const now = new Date();

    const diffInMs = now.getTime() - pastDate.getTime();
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInDays > 0) {
      return `${diffInDays}일 전`;
    } else if (diffInHours > 0) {
      return `${diffInHours}시간 전`;
    } else {
      return formatDistanceToNow(pastDate, { addSuffix: true, locale: ko });
    }
  };

  return (
    <div className="text-black">
      <div className="flex px-3">
        <img
          src={user.characterUrl}
          alt="User Character"
          className="w-[17%] h-[15%] flex-shrink-0"
        />
        <div className="ml-4 p-4 flex-1">
          <div className="flex justify-between">
            <h2 className="font-ExtraBold text-large">{user.githubId}</h2>
            {isMyPage && <UpdateButton onUpdated={setUser} />}
          </div>
          <div className="font-SemiBold text-assistive flex justify-between">
            <div className="flex gap-7">
              <p>Ranking {user.ranking}위</p>
              <p>Level {user.tierName}</p>
              <p>연속 커밋 {user.consecutiveCommitDays}일차</p>
            </div>
            {isMyPage && (
              <p className="font-SemiBold text-button text-grey mr-10 mt-1">
                최근 업데이트 : {getTimeAgo(user.lastCommitUpdateTime)}
              </p>
            )}
          </div>
          <div className="mt-4 w-full">
            <div className="w-full flex">
              <div className="w-full relative bg-gray-300 h-[39px] rounded-xl">
                <div className="w-full relative bg-gray-300 h-[39px] rounded-xl overflow-hidden">
                  {progress > 0 && (
                    <div
                      className="absolute left-0 top-0 h-full bg-primary"
                      style={{
                        width: `${progress}%`,
                        borderTopLeftRadius: '12px',
                        borderBottomLeftRadius: '12px',
                        borderTopRightRadius: progress === 100 ? '12px' : '0px',
                        borderBottomRightRadius:
                          progress === 100 ? '12px' : '0px',
                      }}
                    />
                  )}
                </div>
              </div>
              <div className="relative">
                <QuestionMark
                  className="mt-2 ml-3 cursor-pointer"
                  onClick={handleIconClick}
                />
              </div>
            </div>
            <div className="flex justify-between text-grey font-semibold text-sm mt-1">
              <p>{minScore}점</p>
              <p className="mr-2">
                {maxScore === 'MAX' ? 'MAX' : `${maxScore}점`}
              </p>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <LevelMapModal
          onClose={() => setIsModalOpen(false)}
          position={position}
        />
      )}
    </div>
  );
};

export default ProfileCard;
