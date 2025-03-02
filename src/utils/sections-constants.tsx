import ScrollBanner from '@/components/main/Banner';
import GithubLoginButton from '@/components/main/GithubLoginButton';
import Comment1Svg from '@/assets/icon/ic_main_comment1.svg?react';
import SectionMain from '@/components/main/SectionMain';

export const sections = [
  {
    id: 1,
    title: <SectionMain />,
    content: null,
    disableAnimation: true,
  },
  {
    id: 2,
    title: <ScrollBanner baseVelocity={2} />,
    content: <Comment1Svg className="w-fit" />,
    disableAnimation: true,
  },
  {
    id: 3,
    title: '',
    content: <Comment1Svg />,
    animation: 'fade-up',
  },
  {
    id: 4,
    title: '',
    content: <Comment1Svg />,
    animation: 'fade-up',
  },
  {
    id: 5,
    title: '',
    content: <Comment1Svg />,
    animation: 'fade-up',
  },
  {
    id: 6,
    title: '',
    content: <Comment1Svg />,
    animation: 'fade-up',
  },
  {
    id: 7,
    title: '',
    content: <Comment1Svg />,
    animation: 'fade-up',
  },
  {
    id: 8,
    title: '',
    content: <Comment1Svg />,
    animation: 'fade-up',
  },
  {
    id: 9,
    title: '',
    content: <Comment1Svg />,
    animation: 'fade-up',
  },
];
