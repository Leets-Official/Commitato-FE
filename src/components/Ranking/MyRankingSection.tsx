import React from 'react';
import RankingItem from '@/components/Ranking/RankingItem';
import { RankingUserWithChange } from 'ranking-types';

interface MyRankingSectionProps {
  isLoggedIn: boolean;
  myRanking: RankingUserWithChange | null;
}

const MyRankingSection: React.FC<MyRankingSectionProps> = ({
  isLoggedIn,
  myRanking,
}) => {
  if (isLoggedIn) {
    return myRanking ? <RankingItem {...myRanking} /> : null;
  }
  return (
    <div className="font-Bold text-assistive flex items-center justify-center text-grey p-4 bg-gray- rounde50d-md ">
      로그인 후 내 랭킹을 확인할 수 있어요!
    </div>
  );
};

export default MyRankingSection;
