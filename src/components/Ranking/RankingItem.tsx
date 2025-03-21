import React from 'react';
import UpIcon from '@/assets/icon/ic_ranking_up.svg?react';
import DownIcon from '@/assets/icon/ic_ranking_down.svg?react';
import LineIcon from '@/assets/icon/ic_ranking_line.svg?react';

interface RankingItemProps {
  ranking: number;
  githubId: string;
  tierName: string;
  consecutiveCommitDays: string;
  exp: number;
  change: 'up' | 'down' | 'none' | string;
  isMe?: boolean;
}

const RankingItem: React.FC<RankingItemProps> = ({
  ranking,
  githubId,
  tierName,
  consecutiveCommitDays,
  exp,
  change,
  isMe,
}) => {
  const getIcon = () => {
    switch (change) {
      case 'up':
        return <UpIcon className="w-3 h-4" />;
      case 'down':
        return <DownIcon className="w-3 h-4" />;
      default:
        return <LineIcon className="w-3 h-2" />;
    }
  };

  return (
    <div className="flex py-3 px-4 items-center font-Bold">
      <div className="w-[10%]">{ranking}</div>
      <div className="w-[30%] flex items-center">
        {isMe && (
          <span className="bg-primary px-1 rounded text-captionBody font-SemiBold mr-2">
            me
          </span>
        )}
        <span
          className="cursor-pointer hover:underline"
          onClick={() => alert(`${githubId} 프로필로 이동`)}
        >
          {githubId}
        </span>
      </div>
      <div className="w-[35%]">{tierName}</div>
      <div className="w-[15%]">{consecutiveCommitDays}</div>
      <div className="w-[10%] font-bold flex items-center justify-between">
        <span className="mr-1">{exp}</span>
        {getIcon()}
      </div>
    </div>
  );
};

export default RankingItem;
