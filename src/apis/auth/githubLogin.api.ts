import api from '@/apis/api';

const githubLogin = async (authCode: string) => {
  try {
    const res = await api.get(`/login/callback`, {
      params: { code: authCode },
    });
    return res.data;
  } catch (error) {
    console.error(
      error instanceof Error ? error.message : '오류가 발생했습니다',
    );
    throw error;
  }
};

export default githubLogin;
