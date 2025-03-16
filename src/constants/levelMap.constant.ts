import FirstCommitato from '@/assets/icon/firstCommitato.svg?react';
import SecondCommitato from '@/assets/icon/secondCommitato.svg?react';
import ThirdCommitato from '@/assets/icon/thirdCommitato.svg?react';
import FourthCommitato from '@/assets/icon/fourthCommitato.svg?react';

import FirstCommitatoComment from '@/assets/icon/ic_main_firstCommitato_comment.svg?react';
import SecondCommitatoComment from '@/assets/icon/ic_main_secondCommitato_comment.svg?react';
import ThirdCommitatoComment from '@/assets/icon/ic_main_thirdCommitato_comment.svg?react';
import FourthCommitatoComment from '@/assets/icon/ic_main_fourthCommitato_comment.svg?react';

interface LevelInfo {
  nextLevel: string;
  image: React.FC<React.SVGProps<SVGSVGElement>>;
  comment: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const levelMap: Record<string, LevelInfo> = {
  '바보 감자': {
    nextLevel: '말하는 감자',
    image: FirstCommitato,
    comment: FirstCommitatoComment,
  },
  '말하는 감자': {
    nextLevel: '개발자 감자',
    image: SecondCommitato,
    comment: SecondCommitatoComment,
  },
  '개발자 감자': {
    nextLevel: 'CEO 감자',
    image: ThirdCommitato,
    comment: ThirdCommitatoComment,
  },
  'CEO 감자': {
    nextLevel: '',
    image: FourthCommitato,
    comment: FourthCommitatoComment,
  },
} as const;
