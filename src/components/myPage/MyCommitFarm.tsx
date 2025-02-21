import FarmLine from '@/assets/icon/commitFarm.svg?react';
import CountNumber from '@/components/myPage/CountNumber';

const MyCommitFarm = () => {
  return (
    <main className="w-full flex flex-col mt-2">
      <div className="flex justify-between px-2">
        <p className="font-ExtraBold text-captionBody">나의 커밋 농장</p>
        <CountNumber />
      </div>
      <FarmLine className="w-full" />
    </main>
  );
};

export default MyCommitFarm;
