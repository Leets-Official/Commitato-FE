import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SectionAbout from '@/components/main/SectionAbout';
import SectionFeature from '@/components/main/SectionFeature';
import SectionMain from '@/components/main/SectionMain';
import WelcomeModal from '@/components/modal/WelcomeModal';
import { sections } from '@/utils/sections-constants';
import { motion } from 'framer-motion';
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
          <div className="relative flex flex-col items-center justify-center space-y-10">
            {/* {Array(9)
              .fill('')
              .map((_, id) => (
                <SectionMain
                  key={id}
                  className="w-full h-screen"
                />
              ))} */}
            {sections.map(section => (
              <motion.section
                key={section.id}
                className="snap-start h-screen flex flex-col justify-evenly items-center "
                // initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.8 }}
              >
                <h1>{section.title}</h1>
                <p className="mt-4 text-lg text-white">{section.content}</p>
              </motion.section>
            ))}
          </div>

          <Footer isMainPage />
          {/* {isModalOpen && (
        <WelcomeModal
          onClose={() => setIsModalOpen(false)}
          githubId={githubId}
        />
      )} */}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
