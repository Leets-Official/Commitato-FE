import React, { useEffect, useState } from 'react';
import RankingItem, {
  RankingItemProps,
} from '@/components/Ranking/RankingItem';
import Line from '@/assets/icon/myPageLine.svg?react';
import { getRankingApi, getUserIdApi } from '@/apis/ranking/ranking.api';

interface RankingListProps {
  searchId: string | null;
}
const RankingList: React.FC<RankingListProps> = ({ searchId }) => {
  const [rankingData, setRankingData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [myRanking, setMyRanking] = useState<any | null>(null);

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        setIsLoading(true);
        const data: RankingItemProps[] = await getRankingApi();
        setRankingData(data);
        const myRank = data.find(item => item.isMe || null);
        setMyRanking(myRank);

        setError(null);
      } catch (error) {
        setError('랭킹 데이터를 불러오는 중 오류가 발생했습니다.');
      } finally {
        setIsLoading(false);
      }
    };
    if (!searchId) {
      fetchRanking();
    }
  }, [searchId]);

  useEffect(() => {
    if (searchId) {
      const fetchUser = async () => {
        try {
          setIsLoading(true);
          const user = await getUserIdApi(searchId);
          setRankingData(user ? [user] : []);
          setError(null);
        } catch (error: any) {
          if (error.response?.status === 404) {
            setError(error.response.data.message);
          } else {
            setError('검색 중 오류가 발생했습니다.');
          }
          setRankingData([]);
        } finally {
          setIsLoading(false);
        }
      };
      fetchUser();
    }
  }, [searchId]);

  if (isLoading) {
    return (
      <p className="text-small text-center text-grey font-Bold letter-spacing-0.1 mt-4">
        로딩 중...
      </p>
    );
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
        {error ? (
          <p className="text-center text-red-500 font-Bold mt-4">{error}</p>
        ) : rankingData.length > 0 ? (
          rankingData.map(data => <RankingItem key={data.githubId} {...data} />)
        ) : (
          <p className="text-small text-center text-grey font-Bold letter-spacing-0.1 mt-4">
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
