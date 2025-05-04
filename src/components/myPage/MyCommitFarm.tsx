import FarmLine from '@/assets/icon/commitFarm.svg?react';
import CountNumber from '@/components/myPage/CountNumber';
import CommitCalendar from '@/components/myPage/CommitCalendar';
import { useEffect, useState } from 'react';
import getUserCommits from '@/apis/myPage/userCommit.api';
import { useParams } from 'react-router-dom';

const MyCommitFarm = () => {
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
  }, [githubId]);

  return (
    <main className="w-full flex flex-col mt-2">
      <div className="flex justify-between px-2">
        <p className="font-ExtraBold text-captionBody">나의 커밋 농장</p>
        <CountNumber />
      </div>
      <FarmLine className="w-full" />
      <CommitCalendar commits={commitData} />
    </main>
  );
};

export default MyCommitFarm;
