import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import RankingPage from '../pages/RankingPage/RankingPage';
import MyPage from '../pages/MyPage/MyPage';
import CallbackPage from '../pages/MyPage/CallbackPage';
import Login from '../apis/auth/Login';

const router = createBrowserRouter([
  {
    path: '',
    element: <MainPage />,
  },
  {
    path: '/ranking',
    element: <RankingPage />,
  },
  {
    path: '/my',
    element: <MyPage />,
  },
  {
    path: '/login',
    element: <CallbackPage />,
  },
  {
    path: '/',
    element: <Login />,
  },
]);
export default router;
