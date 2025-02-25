import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const githubLogin = async (authCode: string) => {
  try {
    const res = await axios.get(`${BASE_URL}/login/callback`, {
      params: { code: authCode },
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export default githubLogin;
