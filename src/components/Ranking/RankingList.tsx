import React, { useEffect, useState } from 'react';
import RankingItem from '@/components/Ranking/RankingItem';
import Line from '@/assets/icon/myPageLine.svg?react';
import { getRankingApi } from '@/apis/ranking/ranking.api';

// const rankingData = [
//   {
//     rank: 1,
//     userId: 1,
//     user: 'adflakjd',
//     tier: 'CEO 감자',
//     commitDay: '7일',
//     exp: 120,
//     change: 'up',
//   },
//   {
//     rank: 2,
//     userId: 2,
//     user: 'dalzzy',
//     tier: 'CEO 감자',
//     commitDay: '5일',
//     exp: 110,
//     change: 'down',
//     isMe: true,
//   },
//   {
//     rank: 3,
//     userId: 3,
//     user: 'woneeeee',
//     tier: 'CEO 감자',
//     commitDay: '4일',
//     exp: 100,
//     change: 'none',
//   },
//   {
//     rank: 4,
//     userId: 4,
//     user: 'githubID_4',
//     tier: '개발자 감자',
//     commitDay: '4일',
//     exp: 90,
//     change: 'none',
//   },
//   {
//     rank: 5,
//     userId: 5,
//     user: 'kimmm',
//     tier: '말하는 감자',
//     commitDay: '4일',
//     exp: 80,
//     change: 'none',
//   },
//   {
//     rank: 6,
//     userId: 6,
//     user: 'githubID_6',
//     tier: '개발자 감자',
//     commitDay: '4일',
//     exp: 80,
//     change: 'none',
//   },
//   {
//     rank: 7,
//     userId: 7,
//     user: 'githubID_7',
//     tier: '바보 감자',
//     commitDay: '4일',
//     exp: 100,
//     change: 'none',
//   },
//   {
//     rank: 8,
//     userId: 8,
//     user: 'githubID_8',
//     tier: '개발자 감자',
//     commitDay: '4일',
//     exp: 80,
//     change: 'none',
//   },
//   {
//     rank: 9,
//     userId: 9,
//     user: 'githubID_9',
//     tier: '바보 감자',
//     commitDay: '4일',
//     exp: 80,
//     change: 'none',
//   },
//   {
//     rank: 10,
//     userId: 10,
//     user: 'githubID_10',
//     tier: '개발자 감자',
//     commitDay: '4일',
//     exp: 80,
//     change: 'none',
//   },
// ];

interface RankingListProps {
  searchId: string;
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

  const filteredData =
    rankingData.filter(item =>
      item.githubId.toLowerCase().includes(searchId.toLowerCase()),
    ) || [];

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
