import LottieHighlight from '@/components/main/LottieHighlight';

export const descriptions: Record<string, React.ReactNode> = {
  '바보 감자': (
    <div className="relative flex flex-col justify-center items-center text-center">
      <div>바보 감자는 초보 단계의 감자에요.</div>
      <div className="relative inline-block">
        아직은 많은 것을 배우고 익혀야 하는 단계입니다.
        <span className="relative">
          <LottieHighlight className="bottom-[55px] left-[135px]" />
          <span>(포인트 범위: 0 - 29,999 포인트)</span>
        </span>
      </div>
    </div>
  ),
  '말하는 감자': (
    <div className="relative flex flex-col justify-center items-center text-center">
      <div>말하는 감자는 어느 정도 경험을 쌓은 감자에요.</div>
      <div className="relative inline-block">
        이제 기본적인 대화를 할 수 있으며, 프로젝트에 대한 이해도가 조금 더
        높아졌습니다.
        <span className="relative">
          <LottieHighlight className="bottom-[70px] left-[145px]" />
          <span>(포인트 범위: 30,000 - 149,999 포인트)</span>
        </span>
      </div>
    </div>
  ),
  '개발자 감자': (
    <div className="relative flex flex-col justify-center items-center text-center">
      <div>개발자 감자는 충분한 경험을 통해 개발에 익숙해진 감자입니다.</div>
      <div className="relative inline-block">
        다양한 기술과 도구를 능숙하게 다룰 수 있습니다.
        <span className="relative">
          <LottieHighlight className="bottom-[75px] left-[145px]" />
          <span>(포인트 범위: 150,000 - 299,999 포인트)</span>
        </span>
      </div>
    </div>
  ),
  'CEO 감자': (
    <div className="relative flex flex-col justify-center items-center text-center">
      <div>CEO 감자는 커밋테이토의 최정상 단계의 감자입니다.</div>
      <div className="relative inline-block">
        이제 프로젝트를 이끌고, 팀을 관리하는 능력을 갖추었습니다.
        <span className="relative">
          <LottieHighlight className="bottom-[60px] left-[135px]" />
          <span>(포인트 범위: 300,000 포인트 이상)</span>
        </span>
      </div>
    </div>
  ),
};
