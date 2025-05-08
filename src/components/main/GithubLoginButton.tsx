import { useEffect, useState } from 'react';
import Button from '@/components/common/Button';
import GithubSVG from '@/assets/icon/footerGithub.svg?react';

const CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_GITHUB_REDIRECT_URI;

const GithubLoginButton = () => {
  const [githubId, setGithubId] = useState<string | null>(null);

  useEffect(() => {
    const storedId = localStorage.getItem('githubId');
    if (storedId) {
      setGithubId(storedId);
    }
  }, []);

  const handleGithubLogin = () => {
    if (!githubId) {
      const link = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=read:user,public_repo,repo,read:org`;
      window.location.href = link;
    }
  };

  return (
    <Button
      onClick={handleGithubLogin}
      disabled={!!githubId}
      className="flex items-center justify-center gap-2 px-7 py-3 w-full max-w-[280px] min-w-[180px] mt-20 whitespace-nowrap"
    >
      {githubId ? 'Login by' : 'Login with'}
      <GithubSVG className="w-6 h-6" />
      {githubId || 'Github'}
    </Button>
  );
};

export default GithubLoginButton;
