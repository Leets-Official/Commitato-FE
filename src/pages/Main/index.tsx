import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { sections } from '@/utils/sections-constants';
import SectionWrapper from '@/pages/Main/components/SectionWrapper';
import BackgroundController from '@/components/main/BackgroundController';

const MainPage = () => {
  return (
    <div className="overflow-x-hidden relative w-screen min-w-screen min-h-screen">
      <Header />

      <BackgroundController />

      <div className="relative h-auto">
        <div className="relative flex flex-col items-center justify-center">
          {sections.map(section => (
            <SectionWrapper
              key={section.id}
              title={section.title}
              content={section.content}
            />
          ))}
        </div>

        <Footer isMainPage />
      </div>
    </div>
  );
};

export default MainPage;
