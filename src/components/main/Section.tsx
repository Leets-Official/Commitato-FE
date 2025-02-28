import GithubLoginButton from '@/components/main/GithubLoginButton';
import { TextFade } from '@/components/main/TextFade';
import ScrollBanner from '@/components/main/Banner';

interface SectionProps {
  className?: string;
}

const Section: React.FC<SectionProps> = ({ className }) => {
  return (
    <>
      <div
        className={`flex flex-col justify-start  items-center mt-20 ${className}`}
      >
        <TextFade direction={'up'} duration={2.2} delay={0.2}>
          <div className="font-staatliches text-[13rem]">COMMITATO</div>
        </TextFade>

        <GithubLoginButton />
      </div>
      <div className="flex items-center gap-7">
        <ScrollBanner className="mt-10" baseVelocity={3} />
      </div>
    </>
  );
};

export default Section;
