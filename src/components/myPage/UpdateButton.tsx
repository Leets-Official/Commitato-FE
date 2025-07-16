import { useEffect, useState } from 'react';
import updateButton from '@/apis/myPage/updateButton.api';
import { UserTypes } from 'commitato-types';
import getUserCommits from '@/apis/myPage/userCommit.api';

interface UpdateButtonProps {
  onUpdated: (updatedUser: UserTypes) => void;
}

const isInRestrictedTime = () => {
  const now = new Date();
  const hour = now.getHours();
  return hour === 6;
};

const UpdateButton = ({ onUpdated }: UpdateButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRestricted, setIsRestricted] = useState(isInRestrictedTime());
  const githubId = localStorage.getItem('githubId');

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRestricted(isInRestrictedTime());
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = async () => {
    try {
      setIsLoading(true);
      const updatedUser = await updateButton();
      console.log(updatedUser);
      if (updatedUser) {
        onUpdated(updatedUser);
        if (githubId) {
          const updatedCommits = await getUserCommits(githubId);
          console.log(updatedCommits);
        } else {
          console.log('githubId가 없습니다.');
        }
      }
    } catch (err) {
      console.error('업데이트 실패:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      <button
        className="w-[135px] h-[45px] bg-black hover:bg-grey cursor-pointer rounded-[10px] mt-2 mr-9 flex items-center justify-center"
        onClick={handleClick}
        disabled={isLoading}
      >
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <p className="font-Regular text-body font-staatliches text-white">
            {isRestricted ? '잠시 중단됨' : 'UPDATE'}
          </p>
        )}
      </button>
    </main>
  );
};

export default UpdateButton;
