import GithubLoginButton from '@/components/main/GithubLogin';
import { TextFade } from './TextFade';
import ScrollBanner from '@/components/main/Banner';

interface SectionProps {
  className?: string;
}

const Section: React.FC<SectionProps> = ({ className }) => {
  return (
    <>
      <div className={`flex flex-col justify-start  items-center ${className}`}>
        <TextFade direction={'up'} duration={1.9} delay={0.1}>
          <div className="font-staatliches text-[13rem]">COMMITATO</div>
        </TextFade>
        <GithubLoginButton />
      </div>
      <div className="flex items-center gap-7">
        <ScrollBanner className="mt-10" baseVelocity={4} />
      </div>
    </>
  );
};

export default Section;
