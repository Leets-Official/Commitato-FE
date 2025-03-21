import api from '@/apis/api';

const PATH = '/user';

export const getRankingApi = async (page: number = 0, size: number = 10) => {
  try {
    const res = await api.get(`${PATH}/ranking`, { params: { page, size } });
    return res.data.result.content;
  } catch (error) {
    error instanceof Error ? error.message : '랭킹 조회 오류가 발생했습니다: ';
  }
};

export const getUserIdApi = async (githubId: string) => {
  try {
    const res = await api.get(`${PATH}/search/${githubId}`);
    return res.data.result;
  } catch (error) {
    error instanceof Error
      ? error.message
      : '유저 아이디 조회 오류가 발생했습니다: ';
  }
};
