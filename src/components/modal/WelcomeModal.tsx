import Modal from '@/components/modal';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

interface WelcomeModalProps {
  onClose: () => void;
  githubId: string;
}

const WelcomeModal = ({ onClose, githubId }: WelcomeModalProps) => {
  const nav = useNavigate();

  const handleMyPage = () => {
    nav('/mypage');
  };

  return (
    <Modal onClose={onClose} className="h-[263px] p-6">
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
