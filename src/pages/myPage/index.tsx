import Footer from '@/components/Footer';
import Header from '@/components/Header';
import CommitStats from '@/components/myPage/CommitStats';
import ProfileCard from '@/components/myPage/ProfileCard';
import MyCommitFarm from '@/components/myPage/MyCommitFarm';
import Line from '@/assets/icon/myPageLine.svg?react';
import { UserTypes } from 'commitato-types';

const userData: UserTypes = {
  githubId: 'woneeeee',
  ranking: 10,
  level: '바보감자',
  commit: 3,
  todayCommit: 30,
  totalCommit: 121,
};

const MyPage = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Header />
      <main className="h-[70vh] flex flex-col m-[6%] w-[65%] bg-white rounded-2xl mx-auto py-7 px-5">
        <p className="font-staatliches text-header">MY PAGE</p>
        <Line />
        <div className="mt-3">
          <ProfileCard user={userData} />
        </div>
        <div className="flex w-full mt-5 justify-evenly">
          <div className="w-[60%]">
            <MyCommitFarm />
          </div>
          <div className="w-[30%] mt-6">
            <CommitStats user={userData} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MyPage;
