import { createBrowserRouter } from 'react-router-dom';
import MainPage from '@/pages/main';
import RankingPage from '@/pages/ranking';
import MyPage from '@/pages/myPage';
import GithubLoginLoading from '@/components/main/GithubLoginLoading';

const router = createBrowserRouter([
  {
    path: '',
    element: <MainPage />,
  },
  {
    path: '/login',
    element: <GithubLoginLoading />,
  },
  {
    path: '/ranking',
    element: <RankingPage />,
  },
  { path: '/mypage', element: <MyPage /> },
  { path: '/mypage/:githubId', element: <MyPage /> },
]);
export default router;
