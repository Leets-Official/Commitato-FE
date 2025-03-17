import api from '@/apis/api';

const PATH = '/user';

const getRankingApi = async () => {
  try {
    const res = await api.get(`${PATH}/ranking`);
    return res.data.result;
  } catch (error) {
    error instanceof Error ? error.message : '랭킹 조회 오류가 발생했습니다: ';
  }
};

const getUserIdApi = async (githubId: string) => {
  try {
    const res = await api.get(`${PATH}/search/${githubId}`);
    return res.data.result;
  } catch (error) {
    error instanceof Error
      ? error.message
      : '유저 아이디 조회 오류가 발생했습니다: ';
  }
};
export default { getRankingApi, getUserIdApi };
