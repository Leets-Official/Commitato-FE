import axios from 'axios';

export const postAuthLogout = async () => {
  const accessToken = localStorage.getItem('accessToken');

  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  try {
    const data = await axios.post('api/auth/logout', {}, { headers });
    return data;
  } catch (e) {
    console.log(e);
  }
};
