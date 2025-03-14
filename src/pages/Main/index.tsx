import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { sections } from '@/utils/sections-constants';
import SectionWrapper from '@/components/main/SectionWrapper';
import BackgroundController from '@/components/main/BackgroundController';
import SectionMain from '@/components/main/SectionMain';

const MainPage = () => {
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
      </div>
    </div>
  );
};

export default MainPage;
