import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { sections } from '@/constants/sections.constants';
import SectionWrapper from '@/components/main/SectionWrapper';
import BackgroundController from '@/components/main/BackgroundController';
import SectionMain from '@/components/main/SectionMain';
import ScrollBanner from '@/components/main/Banner';
import { useEffect, useState } from 'react';
import WelcomeModal from '@/components/modal/WelcomeModal';

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [githubId, setGithubId] = useState<string | null>(null);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const storedGithubId = localStorage.getItem('githubId');
    const welcomeShown = localStorage.getItem('welcomeShown');

    if (accessToken && storedGithubId && welcomeShown !== 'true') {
      setGithubId(storedGithubId);
      setIsModalOpen(true);

      localStorage.setItem('welcomeShown', 'true');
    }
  }, []);

  return (
    <div className="overflow-x-hidden relative w-screen min-w-screen min-h-screen">
      <Header />

      <BackgroundController />

      <div className="relative h-auto">
        <div className="relative flex flex-col">
          <div
            className="w-full flex flex-col items-center justify-center min-h-screen 
        px-6 md:px-16 lg:px-24 max-w-screen-lg mx-auto"
          >
            <SectionMain />
          </div>
          <ScrollBanner baseVelocity={20} className="mb-44" />
          {sections.map(section => (
            <SectionWrapper
              key={section.id}
              title={section.title}
              content={section.content}
              align={section.align}
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
  );
};

export default MainPage;
