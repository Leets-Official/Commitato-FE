import api from '@/apis/api';
import { RankingUserTypes } from 'ranking-types';

const PATH = '/user';

export const getRankingApi = async (page: number = 0, size: number = 10) => {
  try {
    const res = await api.get(`${PATH}/ranking`, { params: { page, size } });

    const myGithubId = localStorage.getItem('githubId');

    if (res.data?.result?.content) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const rankingData = res.data.result.content.map((item: any) => ({
        ...item,
        isMe: item.githubId === myGithubId,
      }));

      return {
        content: rankingData,
        totalPages: res.data.result.totalPage,
        totalElements: res.data.result.totalElements,
      };
    } else {
      console.error('올바른 응답 데이터가 아닙니다.', res.data);
      return { content: [], totalPages: 1, totalElements: 0 };
    }
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    error instanceof Error ? error.message : '랭킹 조회 오류가 발생했습니다: ';
  }
};

export const getUserIdApi = async (
  githubId: string,
): Promise<RankingUserTypes[]> => {
  try {
    const res = await api.get(`${PATH}/search/${githubId}`);

    if (res.data?.result) {
      const myGithubId = localStorage.getItem('githubId');

      return res.data.result.map((user: RankingUserTypes) => ({
        ...user,
        isMe: user.githubId === myGithubId,
      }));
    }
    return [];
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    error instanceof Error
      ? error.message
      : '유저 아이디 조회 오류가 발생했습니다: ';
    return [];
  }
};
