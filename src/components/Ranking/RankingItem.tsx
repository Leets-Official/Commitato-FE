import React from 'react';
import UpIcon from '@/assets/icon/ic_ranking_up.svg?react';
import DownIcon from '@/assets/icon/ic_ranking_down.svg?react';
import LineIcon from '@/assets/icon/ic_ranking_line.svg?react';

interface RankingItemProps {
  rank: number;
  user: string;
  tier: string;
  commitDay: string;
  exp: number;
  change: 'up' | 'down' | 'none' | string;
  isMe?: boolean;
}

const RankingItem: React.FC<RankingItemProps> = ({
  rank,
  user,
  tier,
  commitDay,
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
      <div className="w-[10%]">{rank}</div>
      <div className="w-[30%] flex items-center">
        {isMe && (
          <span className="bg-primary px-1 rounded text-captionBody font-SemiBold mr-2">
            me
          </span>
        )}
        <span
          className="cursor-pointer hover:underline"
          onClick={() => alert(`${user} 프로필로 이동`)}
        >
          {user}
        </span>
      </div>
      <div className="w-[35%]">{tier}</div>
      <div className="w-[15%]">{commitDay}</div>
      <div className="w-[10%] font-bold flex items-center justify-between">
        <span className="mr-1">{exp}</span>
        {getIcon()}
      </div>
    </div>
  );
};

export default RankingItem;
