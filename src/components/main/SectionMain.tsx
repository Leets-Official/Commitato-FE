import GithubLoginButton from '@/components/main/GithubLoginButton';
import { TextFade } from '@/components/main/TextFade';

interface SectionProps {
  className?: string;
}

const SectionMain: React.FC<SectionProps> = ({ className }) => {
  return (
    <>
      <div
        className={`flex flex-col justify-start items-center mt-[-120px] ${className}`}
      >
        <TextFade direction={'up'} duration={2.2} delay={0.2}>
          <div className="font-staatliches text-[clamp(3rem,20vw,13rem)]">
            COMMITATO
          </div>
        </TextFade>

        <GithubLoginButton />
      </div>
    </>
  );
};

export default SectionMain;
