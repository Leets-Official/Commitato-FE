import Modal from '@/components/modal';
import Button from '@/components/common/Button';

interface LogoutModalProps {
  onClose: () => void;
  onLogout: () => void;
}

const LogoutModal = ({ onClose, onLogout }: LogoutModalProps) => {
  return (
    <Modal onClose={onClose} className="w-[504px] h-[250px] p-6 z-[10000]">
      <h2>정말 로그아웃 하시겠어요?</h2>
      <Button className="w-[292px] h-[54px] mt-7" onClick={onLogout}>
        로그아웃하기
      </Button>
    </Modal>
  );
};

export default LogoutModal;
