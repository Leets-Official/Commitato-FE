import Button from '@/components/Button';
import GihubSVG from '@/assets/icon/footerGithub.svg?react';

const CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_GITHUB_REDIRECT_URI;

const GithubLoginButton = () => {
  const handleGithubLogin = async () => {
    const link = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=read:user, public_repo, repo, read:org`;
    window.location.href = link;
  };

  return (
    <Button onClick={handleGithubLogin} className="w-[15%] h-[55px]">
      Login with
      <GihubSVG className="m-2" />
      Github
    </Button>
  );
};

export default GithubLoginButton;
