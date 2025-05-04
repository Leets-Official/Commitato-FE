import Modal from '@/components/modal';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import CongratLottie from '@/assets/lotties/lottie_congrats.json';

interface WelcomeModalProps {
  onClose: () => void;
  githubId: string | null;
}

const WelcomeModal = ({ onClose, githubId }: WelcomeModalProps) => {
  const nav = useNavigate();

  const handleMyPage = () => {
    nav('/mypage');
  };

  return (
    <Modal onClose={onClose} className="w-[704px] h-[263px] p-6">
      <Lottie
        animationData={CongratLottie}
        loop={false}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      />
      <h2>
        {githubId}님, Commitato에 오신 걸 환영해요!
        <br />
        앞으로 Commitato와 함께 1일 1커밋을 실천하며 꾸준히 성장해봐요!
      </h2>
      <Button className="w-[292px] h-[54px] mt-7" onClick={handleMyPage}>
        마이페이지 바로가기
      </Button>
    </Modal>
  );
};

export default WelcomeModal;
