import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RankingUserWithChange } from 'ranking-types';

const RankingItem: React.FC<RankingUserWithChange> = ({
  ranking,
  githubId,
  tierName,
  consecutiveCommitDays,
  exp,
  isMe,
  onUserHover,
  onUserLeave,
}) => {
  const nav = useNavigate();

  const handleIdClick = () => {
    nav(`/mypage/${githubId}`);
  };

  return (
    <div className="flex py-3 px-4 items-center font-Bold whitespace-nowrap">
      <div
        className={`w-[10%] ${
          ranking <= 3
            ? 'text-small md:text-lg font-ExtraBold'
            : 'text-assistive'
        }`}
      >
        {ranking}
      </div>
      <div className="w-[30%] flex items-center">
        {isMe && (
          <span className="bg-primary px-1 rounded text-captionBody font-SemiBold mr-2">
            me
          </span>
        )}
        <span
          className="cursor-pointer hover:underline"
          onClick={handleIdClick}
          onMouseEnter={e => {
            const rect = e.currentTarget.getBoundingClientRect();
            onUserHover?.(githubId, {
              x: rect.left,
              y: rect.bottom,
            });
          }}
          onMouseLeave={onUserLeave}
        >
          {githubId}
        </span>
      </div>
      <div className="w-[35%]">{tierName}</div>
      <div className="w-[15%]">{consecutiveCommitDays}일</div>
      <div className="w-[10%] font-bold flex items-center justify-between">
        <span className="mr-1">{exp}</span>
      </div>
    </div>
  );
};

export default RankingItem;
