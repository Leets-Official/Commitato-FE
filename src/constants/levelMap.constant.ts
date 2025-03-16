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
  comment?: React.FC<React.SVGProps<SVGSVGElement>>;
  description?: string;
}

export const levelMap: Record<string, LevelInfo> = {
  '바보 감자': {
    nextLevel: '말하는 감자',
    image: FirstCommitato,
    comment: FirstCommitatoComment,
    description:
      '바보 감자는 초보 단계의 감자에요. 아직은 많은 것을 배우고 익혀야 하는 단계입니다. (포인트 범위: 0-999 포인트)',
  },
  '말하는 감자': {
    nextLevel: '개발자 감자',
    image: SecondCommitato,
    comment: SecondCommitatoComment,
    description:
      '말하는 감자는 어느 정도 경험을 쌓은 감자에요. 이제 기본적인 대화를 할 수 있으며, 프로젝트에 대한 이해도가 조금 더 높아졌습니다. (포인트 범위: 1000-14999 포인트)',
  },
  '개발자 감자': {
    nextLevel: 'CEO 감자',
    image: ThirdCommitato,
    comment: ThirdCommitatoComment,
    description:
      '개발자 감자는 충분한 경험을 통해 개발에 익숙해진 감자입니다. 다양한 기술과 도구를 능숙하게 다룰 수 있습니다. (포인트 범위: 15000-29999 포인트)',
  },
  'CEO 감자': {
    nextLevel: '',
    image: FourthCommitato,
    comment: FourthCommitatoComment,
    description:
      'CEO 감자는 커밋테이토의 최정상 단계의 감자입니다. 이제 프로젝트를 이끌고, 팀을 관리하는 능력을 갖추었습니다. 다른 감자들에게 영감을 주는 리더입니다. (포인트 범위: 30000 포인트 이상)',
  },
} as const;
