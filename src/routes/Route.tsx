import { createBrowserRouter } from 'react-router-dom';
import MainPage from '@/pages/MainPage';
import RankingPage from '@/pages/RankingPage';

const router = createBrowserRouter([
  {
    path: '',
    element: <MainPage />,
  },
  {
    path: '/ranking',
    element: <RankingPage />,
  },
]);
export default router;
