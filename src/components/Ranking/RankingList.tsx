import React from 'react';
import RankingItem from '@/components/Ranking/RankingItem';
import Line from '@/assets/icon/myPageLine.svg?react';
import Pagination from '@/components/Ranking/Pagination';
import RankingItemSkeleton from './RankingItemSkeleton';
import RankingHeader from './RankingHeader';
import { useRankingList } from '@/hooks/useRankingList';

interface RankingListProps {
  searchId: string | null;
}

const RankingList: React.FC<RankingListProps> = ({ searchId }) => {
  const {
    rankingData,
    isLoading,
    error,
    myRanking,
    page,
    setPage,
    totalPages,
    isLoggedIn,
  } = useRankingList(searchId);

  if (isLoading) {
    return (
      <div className="w-full flex flex-col min-h-[60vh]">
        <div className="flex py-3 font-ExtraBold text-grey text-left px-4">
          <div className="w-[10%]">Rank</div>
          <div className="w-[30%]">User</div>
          <div className="w-[35%]">Tier</div>
          <div className="w-[15%]">연속 커밋 횟수</div>
          <div className="w-[10%]">경험치</div>
        </div>
        <div className="min-h-[50vh]">
          {Array.from({ length: 10 }).map((_, idx) => (
            <RankingItemSkeleton key={idx} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-500 font-Bold">{error}</p>;
  }

  return (
    <div className="w-full flex flex-col justify-between min-h-[60vh]">
      <RankingHeader />

      <div className="min-h-[50vh]">
        {error ? (
          <p className="text-center text-red-500 font-Bold mt-4">{error}</p>
        ) : rankingData.length > 0 ? (
          rankingData.map(data => <RankingItem key={data.githubId} {...data} />)
        ) : (
          <p className="text-small text-center text-grey font-Bold letter-spacing-0.1 mt-4">
            검색 결과가 없습니다.
          </p>
        )}
      </div>
      <div className="flex justify-center mt-9 min-h-[40px]">
        <Pagination
          totalPages={totalPages}
          currentPage={page}
          onPageChange={setPage}
        />
      </div>
      <div className="w-full mt-1 pt-3">
        <div className="w-full">
          <Line className="w-full" />
        </div>

        {isLoggedIn ? (
          myRanking && <RankingItem {...myRanking} />
        ) : (
          <div className="font-Bold text-assistive flex items-center justify-center text-grey p-4 bg-gray- rounde50d-md ">
            로그인 후 내 랭킹을 확인할 수 있어요!
          </div>
        )}
      </div>
    </div>
  );
};

export default RankingList;
