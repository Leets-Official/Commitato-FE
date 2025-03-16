import Comment1Svg from '@/assets/icon/ic_main_comment1.svg?react';
import HowText from '@/components/main/HowText';
import Comment2Svg from '@/assets/icon/ic_main_how_comment.svg?react';
import Comment3Svg from '@/assets/icon/ic_main_commit_comment.svg?react';
import Comment4Svg from '@/assets/icon/ic_main_ranking_comment.svg?react';
import RankingSvg from '@/assets/icon/ic_main_ranking.svg?react';

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
  { id: 2, title: '', content: <Comment2Svg width="60%" />, align: 'right' },
  { id: 3, title: '', content: '', align: 'center' },
  { id: 4, title: <Comment3Svg width="70%" />, content: '', align: 'left' },
  {
    id: 5,
    title: <Comment4Svg width="60%" />,
    content: <RankingSvg width="70%" />,

    align: 'right',
  },
  { id: 6, title: '', content: '', align: 'right' },
  { id: 7, title: '', content: '', align: 'left' },
  { id: 8, title: '', content: '', align: 'right' },
] as const;
