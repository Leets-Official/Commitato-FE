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
        <Comment1Svg width="60%" />
        <HowText />
      </div>
    ),
    align: 'left',
  },
  {
    id: 2,
    title: '',
    content: <Comment2Svg width="60%" />,
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
    title: (
      <TextFade direction={'left'} duration={2.2} delay={0.2}>
        <Comment3Svg width="60%" />
        <CommitSvg width="70%" />
      </TextFade>
    ),
    content: '',
    align: 'left',
  },
  {
    id: 5,
    title: (
      <TextFade direction={'right'} duration={2.2} delay={0.2}>
        <Comment4Svg width="60%" />
        <RankingSvg width="70%" />
      </TextFade>
    ),
    content: '',
    align: 'right',
  },
  { id: 6, title: '', content: '', align: 'right' },
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
