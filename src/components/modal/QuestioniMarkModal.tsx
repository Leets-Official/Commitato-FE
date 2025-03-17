import SpeechBubble from '@/assets/icon/ic_speech_bubble.svg?react';

interface QuestionMarkModalProps {
  onClose: () => void;
  position: { top: number; left: number };
}

const QuestionMarkModal = ({ onClose, position }: QuestionMarkModalProps) => {
  return (
    <div className="fixed inset-0 z-40 bg-transparent" onClick={onClose}>
      <div
        className="absolute z-50"
        style={{ top: `${position.top}px`, left: `${position.left}px` }}
        onClick={e => e.stopPropagation()}
      >
        <div className="relative">
          <SpeechBubble
            className="w-full h-auto"
            style={{
              filter: 'drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.3))',
            }}
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center">
            <h3 className="font-staatliches text-body">EXP</h3>
            <p className="font-SemiBold text-button text-grey mt-1">
              바보 감자 (29,999점 이하) <br />
              그냥 감자 (30,000점 이상 149,999점 이하) <br />
              개발자 감자 (150,000점 이상 299,999점 이하) <br />
              CEO 감자 (300,000점 이상)
            </p>
            <p className="font-SemiBold text-button text-grey mt-2 mb-3">
              커밋 1회당 5점이 부여 <br />
              연속 커밋의 경우 기본 보너스 경험치 100점이 부여 <br />
              연속 커밋 일수가 쌓일 경우 10점씩 추가 부여
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionMarkModal;
