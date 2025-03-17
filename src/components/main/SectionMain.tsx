import GithubLoginButton from '@/components/main/GithubLoginButton';
import { TextFade } from '@/components/main/TextFade';
import Lottie from 'lottie-react';
import ArrowLottie from '@/assets/lotties/lottie_arrow_down.json';

interface SectionProps {
  className?: string;
}

const SectionMain: React.FC<SectionProps> = ({ className }) => {
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

        <div className="pt-28 w-32 h-32">
          <Lottie animationData={ArrowLottie} loop={true} />
        </div>
      </div>
    </>
  );
};

export default SectionMain;
