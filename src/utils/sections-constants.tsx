import Comment1Svg from '@/assets/icon/ic_main_comment1.svg?react';
import ScrollBanner from '@/components/main/Banner';
import HowText from '@/components/main/HowText';

export const sections = [
  {
    id: 1,
    title: <ScrollBanner baseVelocity={2} />,
    content: (
      <div className="flex flex-col w-full items-start gap-12">
        <Comment1Svg width="60%" />
        <HowText />
      </div>
    ),
    align: 'left',
  },
  { id: 2, title: '', content: '' },
  { id: 3, title: '', content: <Comment1Svg />, align: 'left' },
  { id: 4, title: '', content: <Comment1Svg />, align: 'right' },
  { id: 5, title: '', content: <Comment1Svg />, align: 'left' },
  { id: 6, title: '', content: <Comment1Svg />, align: 'right' },
  { id: 7, title: '', content: <Comment1Svg />, align: 'left' },
  { id: 8, title: '', content: <Comment1Svg />, align: 'right' },
];
