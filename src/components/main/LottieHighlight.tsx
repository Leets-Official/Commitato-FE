import Lottie from 'lottie-react';
import HighlightLottie from '@/assets/lotties/lottie_highlight.json';

interface LottieHighlightProps {
  className?: string;
}

const LottieHighlight: React.FC<LottieHighlightProps> = ({ className }) => {
  return (
    <div
      className={`absolute left-1/2 -translate-x-1/2 w-[90%] h-[30%] opacity-50 ${className}`}
    >
      <Lottie animationData={HighlightLottie} loop autoPlay />
    </div>
  );
};

export default LottieHighlight;
