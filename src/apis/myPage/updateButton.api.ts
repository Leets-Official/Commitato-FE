import api from '@/apis/api';
import { UserTypes } from 'commitato-types';

const updateButton = async (githubId: string): Promise<UserTypes | null> => {
  try {
    const updatedUserRes = await api.get(`/user/${githubId}`);
    return updatedUserRes.data.result;
  } catch (error) {
    console.error('Commit update 실패:', error);
    return null;
  }
};

export default updateButton;
