import Modal from '@/components/modal';
import Button from '@/components/common/Button';
import FirstCommitato from '@/assets/icon/ic_firstCommitato.svg?react';
import Next from '@/assets/icon/next.svg?react';
import SecondCommitato from '@/assets/icon/ic_secondCommitato.svg?react';
import ThirdCommitato from '@/assets/icon/ic_thirdCommitato.svg?react';
import FinalCommitato from '@/assets/icon/ic_fourthCommitato.svg?react';

interface CongratModalProps {
  onClose: () => void;
  githubId: string;
  level: string;
  newLevel: string;
}

const CongratModal = ({
  onClose,
  githubId,
  level,
  newLevel,
}: CongratModalProps) => {
  const getCommitatoByTier = (tier: string, className?: string) => {
    switch (tier) {
      case '바보 감자':
        return <FirstCommitato className={className} />;
      case '말하는 감자':
        return <SecondCommitato className={className} />;
      case '개발자 감자':
        return <ThirdCommitato className={className} />;
      case 'CEO 감자':
        return <FinalCommitato className={className} />;
      default:
        return <FirstCommitato className={className} />;
    }
  };

  return (
    <Modal onClose={onClose} className="h-[461px]">
      <h2>
        축하드려요 {githubId}님, 당신의 감자가 성장했어요!
        <br />
      </h2>

      <div className="flex items-center justify-center gap-4 mt-4">
        <div className="flex flex-col items-center">
          {getCommitatoByTier(level, 'w-[161px] h-[224px]')}
          <p className="text-grey mt-2 text-assistive">{level}</p>
        </div>
        <Next className="w-[32px] h-[32px]" />
        <div className="flex flex-col items-center">
          {getCommitatoByTier(newLevel, 'w-[161px] h-[224px]')}
          <p className="text-grey mt-2 text-assistive">{newLevel}</p>
        </div>
      </div>

      <Button className="w-[216px] h-[50px] mt-9" onClick={onClose}>
        확인
      </Button>
    </Modal>
  );
};

export default CongratModal;
