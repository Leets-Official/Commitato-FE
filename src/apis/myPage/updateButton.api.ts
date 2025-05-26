import api from '@/apis/api';
import { UserTypes } from 'commitato-types';

const updateButton = async (): Promise<UserTypes | null> => {
  try {
    const response = await api.post('/commit/update');
    return response.data.result;
  } catch (error) {
    console.error('Commit update 실패:', error);
    return null;
  }
};

export default updateButton;
