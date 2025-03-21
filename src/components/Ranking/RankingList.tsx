import React, { useEffect, useState } from 'react';
import RankingItem from '@/components/Ranking/RankingItem';
import Line from '@/assets/icon/myPageLine.svg?react';
import { getRankingApi } from '@/apis/ranking/ranking.api';

interface RankingListProps {
  searchId: string | null;
}
const RankingList: React.FC<RankingListProps> = ({ searchId }) => {
  const [rankingData, setRankingData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        setIsLoading(true);
        const data = await getRankingApi();
        setRankingData(data);
      } catch (error) {
        setError('랭킹 데이터를 불러오는 중 오류가 발생했습니다.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchRanking();
  }, []);

  const filteredData = searchId
    ? rankingData.filter(item => item.githubId === searchId)
    : rankingData;

  const myRanking = rankingData.find(item => item.isMe) || null;

  if (isLoading) {
    return <p className="text-center text-grey font-Bold">로딩 중...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 font-Bold">{error}</p>;
  }

  return (
    <div className="w-full">
      <div className="flex py-3 font-ExtraBold text-grey text-left px-4">
        <div className="w-[10%]">Rank</div>
        <div className="w-[30%]">User</div>
        <div className="w-[35%]">Tier</div>
        <div className="w-[15%]">연속 커밋 횟수</div>
        <div className="w-[10%]">경험치</div>
      </div>

      <div className="w-full min-h-[50vh]">
        {filteredData.length > 0 ? (
          filteredData.map(data => <RankingItem key={data.userId} {...data} />)
        ) : (
          <p className="text-center text-grey font-Bold">
            검색 결과가 없습니다.
          </p>
        )}
      </div>

      {myRanking && (
        <div className="w-full mt-9 pt-3">
          <Line className="w-full" />
          <RankingItem {...myRanking} />
        </div>
      )}
    </div>
  );
};

export default RankingList;
