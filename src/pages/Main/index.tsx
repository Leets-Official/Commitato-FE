import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Section from '@/components/main/Section';
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
    <div className="overflow-x-hidden">
      <Header />
      <div className="relative w-screen min-w-screen  min-h-screen">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,#FFCF55_0%,#FFCF55_20%,#000_40%,#000_60%,#FFCF55_70%,#000_100%)] "></div>

        <div className="relative h-auto">
          <div className="relative flex flex-col items-center justify-center space-y-10 py-20">
            {Array(9)
              .fill('')
              .map((_, index) => (
                <Section
                  // key={index}
                  className="w-full h-screen"
                />
              ))}
          </div>

          <Footer isMainPage />
          {isModalOpen && (
            <WelcomeModal
              onClose={() => setIsModalOpen(false)}
              githubId={githubId}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
