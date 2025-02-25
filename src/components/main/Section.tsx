import GithubLoginButton from '@/components/main/GithubLogin';

interface SectionProps {
  className?: string;
}

const Section: React.FC<SectionProps> = ({ className }) => {
  return (
    <div
      className={`font-staatliches text-[13rem] flex flex-col justify-start  items-center ${className}`}
    >
      <div>COMMITATO</div>
      <GithubLoginButton />
    </div>
  );
};

export default Section;
