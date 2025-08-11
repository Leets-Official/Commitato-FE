import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { RankingUserWithChange } from 'ranking-types';

type Position = { x: number; y: number };

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
  const idRef = useRef<HTMLSpanElement>(null);

  const handleIdClick = () => nav(`/mypage/${githubId}`);

  const handleEnter = () => {
    const el = idRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect(); // viewport-based
    const position: Position = { x: rect.left, y: rect.bottom };
    onUserHover?.(githubId, position);
  };

  return (
    <div className="flex items-center whitespace-nowrap px-4 py-3 font-Bold">
      <div
        className={`w-[10%] ${ranking <= 3 ? 'text-small md:text-lg font-ExtraBold' : 'text-assistive'}`}
      >
        {ranking}
      </div>

      <div className="flex w-[30%] items-center">
        {isMe && (
          <span className="mr-2 rounded bg-primary px-1 text-captionBody font-SemiBold">
            me
          </span>
        )}
        <span
          ref={idRef}
          className="cursor-pointer hover:underline"
          onClick={handleIdClick}
          onMouseEnter={handleEnter}
          onMouseLeave={onUserLeave}
        >
          {githubId}
        </span>
      </div>

      <div className="w-[35%]">{tierName}</div>
      <div className="w-[15%]">{consecutiveCommitDays}일</div>
      <div className="flex w-[10%] items-center justify-between font-bold">
        <span className="mr-1">{exp}</span>
      </div>
    </div>
  );
};

export default RankingItem;
