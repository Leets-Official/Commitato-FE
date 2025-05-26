import { AxiosError } from 'axios';
import { RankingUserWithChange } from 'ranking-types';
import { getRankingApi, getUserIdApi } from '@/apis/ranking/ranking.api';
import { useEffect, useRef, useState } from 'react';

export const useRankingList = (searchId: string | null) => {
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

  return {
    rankingData,
    isLoading,
    error,
    myRanking,
    page,
    setPage,
    totalPages,
    isLoggedIn,
  };
};
