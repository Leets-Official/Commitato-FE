import githubLogin from '@/apis/auth/githubLogin.api';
import updateCommit from '@/apis/myPage/commitUpdate.api';
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
          const accessToken = res.result.jwtResponse.accessToken;
          const githubId = res.result.jwtResponse.githubId;
          const isNewUser = res.result.isNewUser;

          localStorage.setItem('isNewUser', isNewUser);
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('githubId', githubId);

          if (isNewUser) {
            await updateCommit();
          }

          localStorage.setItem('hasSeenWelcomeModal', 'false');

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

  return (
    <main className="text-white">
      깃허브에서 정보를 가져오는 중이라서 시간이 소요됩니다.
    </main>
  );
};

export default GithubLoginLoading;
