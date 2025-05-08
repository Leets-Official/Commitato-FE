import { useState } from 'react';
import updateButton from '@/apis/myPage/updateButton.api';
import { UserTypes } from 'commitato-types';

interface UpdateButtonProps {
  onUpdated: (updatedUser: UserTypes) => void;
}

const UpdateButton = ({ onUpdated }: UpdateButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    const githubId = localStorage.getItem('githubId');
    if (!githubId) {
      console.error('GitHub ID가 존재하지 않습니다.');
      return;
    }

    try {
      setIsLoading(true);
      const updatedUser = await updateButton(githubId);
      console.log(updatedUser);
      if (updatedUser) {
        onUpdated(updatedUser);
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
            UPDATE
          </p>
        )}
      </button>
    </main>
  );
};

export default UpdateButton;
