import { createBrowserRouter } from 'react-router-dom';
import MainPage from '@/pages/MainPage';
import RankingPage from '@/pages/RankingPage';
import MyPage from '@/pages/myPage';

const router = createBrowserRouter([
  {
    path: '',
    element: <MainPage />,
  },
  {
    path: '/ranking',
    element: <RankingPage />,
  },
  { path: '/mypage', element: <MyPage /> },
]);
export default router;
