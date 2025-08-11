import React from 'react';
import RankingItem from '@/components/ranking/RankingItem';
import { RankingUserWithChange } from 'ranking-types';

const CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_GITHUB_REDIRECT_URI;

interface MyRankingSectionProps {
  isLoggedIn: boolean;
  myRanking: RankingUserWithChange | null;
}

const MyRankingSection: React.FC<MyRankingSectionProps> = ({
  isLoggedIn,
  myRanking,
}) => {
  const handleGithubLogin = () => {
    const storedId = localStorage.getItem('githubId');
    if (!storedId) {
      const link = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=read:user,public_repo,repo,read:org`;
      window.location.href = link;
    }
  };

  if (isLoggedIn) {
    return myRanking ? <RankingItem {...myRanking} /> : null;
  }
  return (
    <button
      onClick={handleGithubLogin}
      className="rounded-full bg-gray-100/70 px-4 py-2 text-gray-200 text-sm font-SemiBold whitespace-nowrap hover:bg-gray-100"
    >
      로그인 후 내 랭킹을 확인할 수 있어요!
    </button>
  );
};

export default MyRankingSection;
