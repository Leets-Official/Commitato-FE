import Modal from '@/components/modal';
import Button from '../Button';
import FirstCommitato from '@/assets/icon/firstCommitato.svg?react';
import Next from '@/assets/icon/next.svg?react';
import SecondCommitato from '@/assets/icon/secondCommitato.svg?react';

interface CongratModalProps {
  onClose: () => void;
  githubId: string;
  level: string;
}

const CongratModal = ({ onClose, githubId, level }: CongratModalProps) => {
  return (
    <Modal onClose={onClose} className="h-[461px]">
      <h2>
        축하드려요 {githubId}님, 당신의 감자가 성장했어요!
        <br />
      </h2>

      <div className="flex items-center justify-center gap-4 mt-4">
        <div className="flex flex-col items-center">
          <FirstCommitato className="w-[161px] h-[224px]" />
          <p className="text-grey mt-2 text-assistive">{level}</p>
        </div>
        <Next className="w-[32px] h-[32px]" />
        <div className="flex flex-col items-center">
          <SecondCommitato className="w-[161px] h-[224px]" />
          <p className="text-grey mt-2 text-assistive">말하는 감자</p>
        </div>
      </div>

      <Button className="w-[216px] h-[50px] mt-9" onClick={onClose}>
        확인
      </Button>
    </Modal>
  );
};

export default CongratModal;
