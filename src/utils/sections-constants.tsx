import ScrollBanner from '@/components/main/Banner';
import Comment1Svg from '@/assets/icon/ic_main_comment1.svg?react';
import SectionMain from '@/components/main/SectionMain';
import HowText from '@/components/main/HowText';

export const sections = [
  { id: 1, title: <SectionMain />, content: null },
  { id: 2, title: <ScrollBanner baseVelocity={2} />, content: <HowText /> },
  { id: 3, title: 'HOW IT WORKS?', content: <Comment1Svg /> },
  { id: 4, title: 'ABOUT COMMITATO', content: <Comment1Svg /> },
  { id: 5, title: 'FEATURES', content: <Comment1Svg /> },
  { id: 6, title: 'TESTIMONIALS', content: <Comment1Svg /> },
  { id: 7, title: 'GET STARTED', content: <Comment1Svg /> },
  { id: 8, title: 'WHY CHOOSE US?', content: <Comment1Svg /> },
  { id: 9, title: 'FINAL CALL TO ACTION', content: <Comment1Svg /> },
];
