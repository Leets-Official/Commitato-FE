import Footer from '@/components/Footer';
import Header from '@/components/Header';
import GithubLoginButton from '@/components/main/GithubLogin';
import WelcomeModal from '@/components/modal/WelcomeModal';
import { useEffect, useState } from 'react';

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [githubId, setGithubId] = useState<string | null>(null);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const storedGithubId = localStorage.getItem('githubId');

    if (accessToken && storedGithubId) {
      setGithubId(storedGithubId);
      setIsModalOpen(true);
    }
  }, []);

  return (
    <>
      <Header />
      <GithubLoginButton />
      main
      <Footer isMainPage />
      {isModalOpen && (
        <WelcomeModal
          onClose={() => setIsModalOpen(false)}
          githubId={githubId}
        />
      )}
    </>
  );
};

export default MainPage;
