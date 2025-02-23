import FirstCommitato from '@/assets/icon/firstCommitato.svg?react';
import SecondCommitato from '@/assets/icon/secondCommitato.svg?react';
import ThirdCommitato from '@/assets/icon/thirdCommitato.svg?react';
import FourthCommitato from '@/assets/icon/fourthCommitato.svg?react';

interface LevelInfo {
  nextLevel: string;
  image: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const levelMap: Record<string, LevelInfo> = {
  '바보 감자': { nextLevel: '말하는 감자', image: FirstCommitato },
  '말하는 감자': { nextLevel: '개발자 감자', image: SecondCommitato },
  '개발자 감자': { nextLevel: 'CEO 감자', image: ThirdCommitato },
  'CEO 감자': { nextLevel: 'CEO 감자', image: FourthCommitato },
} as const;
