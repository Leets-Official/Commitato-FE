import githubLogin from '@/apis/auth/githubLogin.api';
import updateCommit from '@/apis/myPage/commitUpdate.api';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginLoadingModal from '@/components/modal/LoginLoadingModal';

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
    <main className="w-screen h-screen flex items-center justify-center bg-black">
      <LoginLoadingModal />
    </main>
  );
};

export default GithubLoginLoading;
