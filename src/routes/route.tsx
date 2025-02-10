import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/home";
import MyPage from "@/pages/myPage";
import RankingPage from "@/pages/ranking";
import NotFoundPage from "@/pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/mypage",
    element: <MyPage />,
  },
  {
    path: "/ranking",
    element: <RankingPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
