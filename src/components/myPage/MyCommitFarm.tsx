import FarmLine from '@/assets/icon/commitFarm.svg?react';
import CountNumber from '@/components/myPage/CountNumber';
import CommitCalendar from '@/components/myPage/CommitCalendar';
import { useEffect, useState } from 'react';
import getUserCommits from '@/apis/myPage/userCommit.api';
import { useParams } from 'react-router-dom';
import SkeletonBox from '@/components/common/SkeletonBox';
import Line from '@/assets/icon/myPageLine.svg?react';

interface MyCommitFarmProps {
  isLoading: boolean;
  className?: string;
}

const MyCommitFarm = ({ isLoading, className = '' }: MyCommitFarmProps) => {
  const [commitData, setCommitData] = useState([]);
  const { githubId } = useParams();
  const myGithubId = localStorage.getItem('githubId');
  const finalGithubId = githubId || myGithubId;

  useEffect(() => {
    const fetchData = async () => {
      if (!finalGithubId) {
        return;
      }

      try {
        const data = await getUserCommits(finalGithubId);
        console.log(data);
        setCommitData(data);
      } catch (error) {
        console.error('커밋 데이터 로드 실패:', error);
      }
    };
    fetchData();
  }, [finalGithubId]);

  if (isLoading) {
    return (
      <main className={`w-full flex flex-col mt-2 ${className}`}>
        <SkeletonBox height={30} width="30%" className="mb-1" />
        <Line />
        <SkeletonBox height={200} className="mt-5" />
      </main>
    );
  }

  return (
    <main className="w-full flex flex-col mt-2">
      <div className="w-full flex justify-between px-2">
        <p className="w-full font-ExtraBold text-captionBody whitespace-nowrap">
          나의 커밋 농장
        </p>
        <CountNumber />
      </div>
      <FarmLine className="w-full" />
      <CommitCalendar commits={commitData} />
    </main>
  );
};

export default MyCommitFarm;
