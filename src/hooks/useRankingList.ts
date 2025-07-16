import { AxiosError } from 'axios';
import { RankingUserTypes } from 'ranking-types';
import { getRankingApi, getUserIdApi } from '@/apis/ranking/ranking.api';
import { useEffect, useState } from 'react';

export const useRankingList = (searchId: string | null) => {
  const [rankingData, setRankingData] = useState<RankingUserTypes[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [myRanking, setMyRanking] = useState<RankingUserTypes | null>(null);
  const [page, setPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [hasFetchMyRanking, setHasFetchMyRanking] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // 랭킹 조회
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
            const myRank = content.find((item: { isMe: any }) => item.isMe);
            if (myRank) {
              setMyRanking(myRank);
              setHasFetchMyRanking(true);
            }
          }

          setError(null);
        }
      } catch (error) {
        setError('랭킹 데이터를 불러오는 중 오류가 발생했습니다.');
        console.error('랭킹 조회 오류:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (!searchId) {
      fetchRanking();
    }
  }, [page, searchId, hasFetchMyRanking]);

  // 유저 검색
  // 유저 검색
  useEffect(() => {
    if (searchId) {
      const fetchUser = async () => {
        try {
          setIsLoading(true);
          const users = await getUserIdApi(searchId);
          console.log('유저 검색 결과: ', users);

          if (users) {
            const newSearchResult = [...users];

            newSearchResult.sort((a, b) => a.ranking - b.ranking); // 랭킹 낮은 순

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

  // 로그인 여부 확인
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
