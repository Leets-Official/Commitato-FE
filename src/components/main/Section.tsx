import GithubLoginButton from '@/components/main/GithubLogin';
import BannerIcon from '@/assets/icon/ic_main_banner.svg?react';
import { TextFade } from './TextFade';

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
        <BannerIcon className="w-[160px]" />
        <span className="font-staatliches text-[96px]">ABOUT COMMITATO</span>
      </div>
    </>
  );
};

export default Section;
