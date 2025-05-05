import GithubLoginButton from '@/components/main/GithubLoginButton';
import { TextFade } from '@/components/main/TextFade';
import Lottie from 'lottie-react';
import ArrowLottie from '@/assets/lotties/lottie_arrow_down.json';
import { RefObject } from 'react';

interface SectionProps {
  className?: string;
  scrollTargetRef: RefObject<HTMLDivElement>;
}

const SectionMain: React.FC<SectionProps> = ({
  className,
  scrollTargetRef,
}) => {
  const handleScroll = () => {
    if (scrollTargetRef.current) {
      const top =
        scrollTargetRef.current.getBoundingClientRect().top + window.scrollY;
      const halfHeight = scrollTargetRef.current.offsetHeight / 2;

      window.scrollTo({
        top: top - halfHeight,
        behavior: 'smooth',
      });
    }
  };
  return (
    <>
      <div
        className={`flex flex-col justify-start items-center mt-[-50px] ${className}`}
      >
        <TextFade direction={'up'} duration={2.2} delay={0.2}>
          <div className="font-staatliches text-[clamp(3rem,20vw,13rem)]">
            COMMITATO
          </div>
        </TextFade>

        <GithubLoginButton />

        <div className="pt-28 w-32 h-32 cursor-pointer" onClick={handleScroll}>
          <Lottie animationData={ArrowLottie} loop={true} />
        </div>
      </div>
    </>
  );
};

export default SectionMain;
