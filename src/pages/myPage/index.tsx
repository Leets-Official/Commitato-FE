import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import CommitStats from '@/components/myPage/CommitStats';
import ProfileCard from '@/components/myPage/ProfileCard';
import MyCommitFarm from '@/components/myPage/MyCommitFarm';
import Line from '@/assets/icon/myPageLine.svg?react';
import { UserTypes } from 'commitato-types';
import { useEffect, useState } from 'react';
import MyPageUser from '@/apis/myPage/user.api';
import updateCommit from '@/apis/myPage/commitUpdate.api';
import { useParams } from 'react-router-dom';

const MyPage = () => {
  const { githubId } = useParams();
  const [userData, setUserData] = useState<UserTypes | null>(null);
  const myGithubId = localStorage.getItem('githubId');

  const finalGithubId = githubId || myGithubId;

  useEffect(() => {
    if (!finalGithubId) return;

    const fetchUserData = async () => {
      await updateCommit();

      const data = await MyPageUser(finalGithubId);
      console.log(data);
      if (data) setUserData(data);
    };
    fetchUserData();
  }, [finalGithubId]);

  if (!userData) {
    return <div className="text-white text-center mt-10">Loading...</div>;
  }

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Header />
      <main className="h-[70vh] flex flex-col m-[6%] w-[65%] bg-white rounded-2xl mx-auto py-7 px-5">
        <p className="font-staatliches text-header">
          {githubId ? `${githubId}'s PAGE` : 'MY PAGE'}
        </p>
        <Line />
        <div className="mt-3">
          <ProfileCard user={userData} setUser={setUserData} />
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
