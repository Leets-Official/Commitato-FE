import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import CommitStats from '@/components/myPage/CommitStats';
import ProfileCard from '@/components/myPage/ProfileCard';
import MyCommitFarm from '@/components/myPage/MyCommitFarm';
import Line from '@/assets/icon/myPageLine.svg?react';
import { UserTypes } from 'commitato-types';
import { useEffect, useState } from 'react';
import MyPageUser from '@/apis/myPage/user.api';
import { useParams } from 'react-router-dom';
import CongratModal from '@/components/modal/CongratModal';
import MyPageHeaderSkeleton from '@/components/myPage/MyPageHeaderSkeleton';

const MyPage = () => {
  const { githubId } = useParams();
  const [userData, setUserData] = useState<UserTypes | null>(null);
  const myGithubId = localStorage.getItem('githubId');
  const [prevTier, setPrevTier] = useState<string | null>(null);
  const [isTierUp, setIsTierUp] = useState(false);

  const finalGithubId = githubId || myGithubId;
  // const isMyPage = !githubId || githubId === myGithubId;

  useEffect(() => {
    if (!finalGithubId) return;

    const fetchUserData = async () => {
      const data = await MyPageUser(finalGithubId);

      if (userData && data?.tierName !== userData.tierName) {
        setPrevTier(userData.tierName);
        setIsTierUp(true);
      }

      setUserData(data);
    };
    fetchUserData();
  }, [githubId, myGithubId]);

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Header />
      <main className="h-[70vh] flex flex-col m-[6%] w-[65%] bg-white rounded-2xl mx-auto py-7 px-5">
        {userData ? (
          <>
            <p className="font-staatliches text-header">
              {githubId ? `${githubId}'s PAGE` : 'MY PAGE'}
            </p>
            <Line />
          </>
        ) : (
          <MyPageHeaderSkeleton />
        )}
        <div className="mt-3">
          <ProfileCard
            user={userData as UserTypes}
            setUser={setUserData}
            isLoading={!userData}
          />
        </div>
        <div className="flex w-full mt-5 justify-evenly">
          <div className="w-[60%]">
            <MyCommitFarm className="w-full" isLoading={!userData} />
          </div>
          <div className="w-[30%] mt-6">
            <CommitStats user={userData as UserTypes} isLoading={!userData} />
          </div>
        </div>
      </main>
      <Footer />
      {isTierUp && prevTier && userData && (
        <CongratModal
          onClose={() => {
            setIsTierUp(false);
            setPrevTier(null);
          }}
          githubId={userData.githubId}
          level={prevTier}
          newLevel={userData.tierName}
        />
      )}
    </div>
  );
};

export default MyPage;
