import githubLogin from '@/apis/auth/githubLogin.api';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GithubLoginLoading = () => {
  const nav = useNavigate();
  useEffect(() => {
    const fetchAuthCode = async () => {
      const authCode = new URLSearchParams(window.location.search).get('code');
      console.log(authCode);

      if (!authCode) {
        console.log('Authorization code가 없습니다.');
        return;
      }

      try {
        const res = await githubLogin(authCode);
        console.log(res);
        const isSuccess = res.isSuccess;

        if (isSuccess) {
          const accessToken = res.result.accessToken;
          console.log(accessToken);
          localStorage.setItem('accessToken', accessToken);
          nav('/');
        } else {
          console.log('로그인 실패');
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAuthCode();
  }, []);
  return <>카ㅏㅋ</>;
};

export default GithubLoginLoading;
