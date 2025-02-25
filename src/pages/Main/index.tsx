import Footer from '@/components/Footer';
import Header from '@/components/Header';
import GithubLoginButton from '@/components/main/GithubLogin';

const MainPage = () => {
  return (
    <>
      <Header />
      <GithubLoginButton />
      main
      <Footer isMainPage />
    </>
  );
};

export default MainPage;
