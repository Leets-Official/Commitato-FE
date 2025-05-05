import React, { useEffect, useState } from 'react';
import RankingItem from '@/components/Ranking/RankingItem';
import Line from '@/assets/icon/myPageLine.svg?react';
import { getRankingApi, getUserIdApi } from '@/apis/ranking/ranking.api';
import Pagination from '@/components/Ranking/Pagination';

interface RankingListProps {
  searchId: string | null;
}

const RankingList: React.FC<RankingListProps> = ({ searchId }) => {
  const [rankingData, setRankingData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [myRanking, setMyRanking] = useState<any | null>(null);
  const [page, setPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [hasFetchMyRanking, setHasFetchMyRanking] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // 랭킹 조회 api 요청
  useEffect(() => {
    const fetchRanking = async () => {
      try {
        setIsLoading(true);
        const res = await getRankingApi(page);
        if (res) {
          const { content, totalPages } = res;
          setRankingData(content);
          setTotalPages(totalPages);

          if (!hasFetchMyRanking) {
            const myRank = content.find(
              (item: { isMe: boolean }) => item.isMe || null,
            );
            if (myRank) {
              setMyRanking(myRank);
              setHasFetchMyRanking(true);
            }
          }
        }

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
  }, [page, searchId]);

  // 유저 검색 api 요청
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

  //로그인 여부 확인
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setIsLoggedIn(!!token);
  }, []);

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
    <div className="w-full flex flex-col justify-between min-h-[60vh]">
      <div className="flex py-3 font-ExtraBold text-grey text-left px-4">
        <div className="w-[10%]">Rank</div>
        <div className="w-[30%]">User</div>
        <div className="w-[35%]">Tier</div>
        <div className="w-[15%]">연속 커밋 횟수</div>
        <div className="w-[10%]">경험치</div>
      </div>

      <div className="min-h-[50vh]">
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
      <div className="flex justify-center mt-9 min-h-[40px]">
        <Pagination
          totalPages={totalPages}
          currentPage={page}
          onPageChange={setPage}
        />
      </div>
      <div className="w-full mt-1 pt-3">
        <div className="w-full">
          <Line className="w-full" />
        </div>

        {isLoggedIn ? (
          myRanking && <RankingItem {...myRanking} />
        ) : (
          <div className="font-Bold text-assistive flex items-center justify-center text-grey p-4 bg-gray- rounde50d-md ">
            로그인 후 내 랭킹을 확인할 수 있어요!
          </div>
        )}
      </div>
    </div>
  );
};

export default RankingList;
