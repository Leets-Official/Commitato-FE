import api from '@/apis/api';

const updateCommit = async (): Promise<void> => {
  try {
    await api.post('/commit/update');
  } catch (error) {
    console.error('Commit update 실패:', error);
    throw error;
  }
};

export default updateCommit;
