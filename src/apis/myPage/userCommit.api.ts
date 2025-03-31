import api from '@/apis/api';

const getUserCommits = async (githubId: string) => {
  const response = await api.get(`/user/commit/${githubId}`);
  return response.data.result;
};

export default getUserCommits;
