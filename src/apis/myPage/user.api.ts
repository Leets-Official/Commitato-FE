import api from '@/apis/api';
import { UserTypes } from 'commitato-types';

const MyPageUser = async (githubId: string): Promise<UserTypes | null> => {
  try {
    const res = await api.get(`/user/${githubId}`);
    return res.data.result;
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    return null;
  }
};

export default MyPageUser;
