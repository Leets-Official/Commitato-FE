import Comment1Svg from '@/assets/icon/ic_main_comment1.svg?react';
import HowText from '@/components/main/HowText';
import Comment2Svg from '@/assets/icon/ic_main_how_comment.svg?react';
import Comment3Svg from '@/assets/icon/ic_main_commit_comment.svg?react';
import Comment4Svg from '@/assets/icon/ic_main_ranking_comment.svg?react';
import RankingSvg from '@/assets/icon/ic_main_ranking.svg?react';
import CommitSvg from '@/assets/icon/ic_main_commit.svg?react';
import PotatoSection from '@/components/main/PotatoSection';
import { TextFade } from '@/components/main/TextFade';

export const sections = [
  {
    id: 1,
    title: '',
    content: (
      <div className="flex flex-col w-full items-start gap-12 mt-12">
        <Comment1Svg className="w-full max-w-[950px]" />
        <HowText />
      </div>
    ),
    align: 'left',
  },
  {
    id: 2,
    title: '',
    content: <Comment2Svg className="w-full max-w-[950px]" />,
    align: 'right',
  },
  {
    id: 3,
    title: '',
    content: <PotatoSection />,
    align: 'center',
  },
  {
    id: 4,
    title: '',
    content: '',
    align: 'center',
  },
  {
    id: 5,
    title: (
      <TextFade direction={'left'} duration={1.5} delay={0.1}>
        <Comment3Svg className="w-full max-w-[950px]" />
        <CommitSvg className="w-full max-w-[950px]" />
        <div className="font-Bold text-brown-200 text-captionBody sm:text-assistive tracking-wide">
          마이 페이지에서 나의 커밋 현황을 확인할 수 있는 달력 기능을 해요.
          꾸준한 커밋으로 당신의 커밋 농장을 황금색 감자로 가득 채워보세요!
        </div>
      </TextFade>
    ),
    content: '',
    align: 'left',
  },
  {
    id: 6,
    title: '',
    content: (
      <TextFade direction={'right'} duration={1.5} delay={0.1}>
        <Comment4Svg className="w-full max-w-[950px]" />
        <RankingSvg className="w-full max-w-[950px]" />

        <div className="flex flex-col text-right space-y-2">
          <div className="font-Bold text-brown-200 text-captionBody sm:text-assistive tracking-wide">
            랭킹에서 다른 유저와 자신의 순위, 티어, 연속 커밋 횟수, 획득 경험치
            등을 확인할 수 있어요.
          </div>
          <div className="font-Bold text-brown-200 text-captionBody sm:text-assistive tracking-wide">
            만약 특정 유저의 정보가 궁금하다면, 깃허브 아이디를 검색하여 확인할
            수 있어요.
          </div>
          <div className="font-Bold text-brown-200 text-captionBody sm:text-assistive tracking-wide">
            친구와 함께 순위를 겨루며 커밋테이토를 즐기세요!
          </div>
        </div>
      </TextFade>
    ),
    align: 'right',
  },
  {
    id: 7,
    title: (
      <TextFade direction={'up'} duration={2.2} delay={0.2} repeat={Infinity}>
        <div className="text-white text-center font-Bold lg:text-captionHeader sm:text-small md:text-body leading-[140%] tracking-[3%] space-y-[21px]">
          <div>COMMITATO와 함께하는 1일 1커밋,</div>
          <div>지금 시작하세요.</div>
        </div>
      </TextFade>
    ),
    content: '',
    align: 'center',
  },
] as const;
