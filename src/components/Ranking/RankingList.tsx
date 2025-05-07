import React, { useEffect, useRef, useState } from 'react';
import RankingItem from '@/components/Ranking/RankingItem';
import Line from '@/assets/icon/myPageLine.svg?react';
import { getRankingApi, getUserIdApi } from '@/apis/ranking/ranking.api';
import Pagination from '@/components/Ranking/Pagination';
import { RankingUserWithChange } from 'ranking-types';
import { AxiosError } from 'axios';

interface RankingListProps {
  searchId: string | null;
}

const RankingList: React.FC<RankingListProps> = ({ searchId }) => {
  const [rankingData, setRankingData] = useState<RankingUserWithChange[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [myRanking, setMyRanking] = useState<RankingUserWithChange | null>(
    null,
  );
  const [page, setPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [hasFetchMyRanking, setHasFetchMyRanking] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const prevRankingMap = useRef<Record<string, number>>({});

  // 랭킹 조회 api 요청
  useEffect(() => {
    const fetchRanking = async () => {
      try {
        setIsLoading(true);
        const res = await getRankingApi(page);
        if (res) {
          const { content, totalPages } = res;

          const newRankingData = content.map(
            (user: { githubId: string | number; ranking: number }) => {
              const prevRank = prevRankingMap.current[user.githubId];
              let change: 'up' | 'down' | 'none' = 'none';

              if (prevRank !== undefined) {
                if (user.ranking < prevRank) change = 'up';
                else if (user.ranking > prevRank) change = 'down';
              }

              return { ...user, change };
            },
          );

          // 새 랭킹 반영
          setRankingData(newRankingData);
          setTotalPages(totalPages);

          // 이전 랭킹 저장
          prevRankingMap.current = newRankingData.reduce(
            (acc: Record<string, number>, user: RankingUserWithChange) => {
              acc[user.githubId] = user.ranking;
              return acc;
            },
            {} as Record<string, number>,
          );

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
        console.error('랭킹 조회 오류 발생: ', error);
      } finally {
        setIsLoading(false);
      }
    };
    if (!searchId) {
      fetchRanking();
    }
  }, [page, searchId, hasFetchMyRanking]);

  // 유저 검색 api 요청
  useEffect(() => {
    if (searchId) {
      const fetchUser = async () => {
        try {
          setIsLoading(true);
          const users = await getUserIdApi(searchId);

          if (users) {
            const newSearchResult = users.map(user => {
              const prevRank = prevRankingMap.current[user.githubId];
              let change: 'up' | 'down' | 'none' = 'none';

              if (prevRank !== undefined) {
                if (user.ranking < prevRank) change = 'up';
                else if (user.ranking > prevRank) change = 'down';
              }

              return { ...user, change };
            });

            setRankingData(newSearchResult);
            setError(null);
          }
        } catch (err: unknown) {
          const error = err as AxiosError<{ message: string }>;

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
