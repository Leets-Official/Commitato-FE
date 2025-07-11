import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { sections } from '@/constants/sections.constants';
import SectionWrapper from '@/components/main/SectionWrapper';
import BackgroundController from '@/components/main/BackgroundController';
import SectionMain from '@/components/main/SectionMain';
import ScrollBanner from '@/components/main/Banner';
import { useEffect, useRef, useState } from 'react';
import WelcomeModal from '@/components/modal/WelcomeModal';
import ScrollButton from '@/components/main/ScrollButton';

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [githubId, setGithubId] = useState<string | null>(null);
  const hasCheckedRef = useRef(false);
  const firstSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasCheckedRef.current) return;

    const storedGithubId = localStorage.getItem('githubId');
    const isNewUser = localStorage.getItem('isNewUser');

    if (storedGithubId && isNewUser === 'true') {
      setGithubId(storedGithubId);
      setIsModalOpen(true);
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
            <SectionMain scrollTargetRef={firstSectionRef} />
          </div>
          <ScrollBanner baseVelocity={20} className="mb-44" />
          {sections.map(section => (
            <SectionWrapper
              key={section.id}
              title={section.title}
              content={section.content}
              align={section.align ?? 'left'}
              ref={section.id === 1 ? firstSectionRef : null}
            />
          ))}
        </div>

        <Footer isMainPage />

        <ScrollButton />

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
