import stupid_potato from '../assets/stupid_potato.png';
import talking_potato from '../assets/talking_potato.png';
import developer_potato from '../assets/developer_potato.png';
import ceo_potato from '../assets/ceo_potato.png';
import stupid_potato_comment from '../assets/stupid_potato_comment.png';
import talking_potato_comment from '../assets/talking_potato_comment.png';
import developer_potato_comment from '../assets/developer_potato_comment.png';
import ceo_potato_comment from '../assets/ceo_potato_comment.png';
import styled from 'styled-components';

export const potatoes = [
  {
    id: 1,
    img: stupid_potato,
    comment: stupid_potato_comment,
    text: (
      <>
        바보 감자는 초보 단계의 감자에요. 아직은 많은 것을 배우고 익혀야 하는
        단계입니다. (포인트 범위: 0-999 포인트)
      </>
    ),
  },

  {
    id: 2,
    img: talking_potato,
    comment: talking_potato_comment,
    text: (
      <>
        <div>말하는 감자는 어느 정도 경험을 쌓은 감자에요.</div>
        <br />
        <div>
          이제 기본적인 대화를 할 수 있으며, 프로젝트에 대한 이해도가 조금 더
          높아졌습니다. (포인트 범위: 1000-14999 포인트)
        </div>
      </>
    ),
  },
  {
    id: 3,
    img: developer_potato,
    comment: developer_potato_comment,
    text: (
      <>
        <div>개발자 감자는 충분한 경험을 통해 개발에 익숙해진 감자입니다.</div>
        <br />
        <div>
          다양한 기술과 도구를 능숙하게 다룰 수 있습니다. (포인트 범위:
          15000-29999 포인트)
        </div>
      </>
    ),
  },
  {
    id: 4,
    img: ceo_potato,
    comment: ceo_potato_comment,
    text: (
      <>
        <div>CEO 감자는 커밋테이토의 최정상 단계의 감자입니다.</div>
        <br />
        <div>
          이제 프로젝트를 이끌고, 팀을 관리하는 능력을 갖추었습니다. 다른
          감자들에게 영감을 주는 리더입니다. (포인트 범위: 30000 포인트 이상)
        </div>
      </>
    ),
  },
];
