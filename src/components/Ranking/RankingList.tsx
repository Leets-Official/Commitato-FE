import React from 'react';
import RankingItem from '@/components/Ranking/RankingItem';
import Line from '@/assets/icon/myPageLine.svg?react';
import Pagination from '@/components/Ranking/Pagination';
import RankingItemSkeleton from '@/components/Ranking/RankingItemSkeleton';
import RankingHeader from '@/components/Ranking/RankingHeader';
import { useRankingList } from '@/hooks/useRankingList';
import MyRankingSection from '@/components/Ranking/MyRankingSection';

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
        <RankingHeader />
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

        <MyRankingSection isLoggedIn={isLoggedIn} myRanking={myRanking} />
      </div>
    </div>
  );
};

export default RankingList;
