import React, { useRef, useState } from 'react';
import { debounce } from 'lodash';

import RankingItem from '@/components/temp/RankingItem';
import Line from '@/assets/icon/myPageLine.svg?react';
import Pagination from '@/components/temp/Pagination';
import RankingItemSkeleton from '@/components/temp/RankingItemSkeleton';
import RankingHeader from '@/components/temp/RankingHeader';
import MyRankingSection from '@/components/temp/MyRankingSection';
import HoverModal from '@/components/modal/HoverModal';

import { useRankingList } from '@/hooks/useRankingList';
import { getHoverUserInfoApi } from '@/apis/ranking/ranking.api';
import { HoverUserInfo } from 'ranking-types';

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

  const [hoverUserInfo, setHoverUserInfo] = useState<HoverUserInfo | null>(
    null,
  );

  // debounce로 hover api 호출 최적화
  const debouncedFetch = useRef(
    debounce(async (githubId: string, position: { x: number; y: number }) => {
      const res = await getHoverUserInfoApi(githubId);
      setHoverUserInfo({ ...res, position });
    }, 300),
  ).current;

  const handleUserHover = (
    githubId: string,
    position: { x: number; y: number },
  ) => {
    console.log('👆 Hover 감지:', githubId, position);
    debouncedFetch(githubId, position);
  };

  const handleUserLeave = () => {
    setHoverUserInfo(null);
  };

  // 로딩 시 스켈레톤 ui 표시
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

  // 에러 발생 시 에러 메시지 표시
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
          rankingData.map(data => (
            <RankingItem
              key={data.githubId}
              {...data}
              onUserHover={handleUserHover}
              onUserLeave={handleUserLeave}
            />
          ))
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

        {/* 리스트 하단 내 랭킹 표시 */}
        <MyRankingSection isLoggedIn={isLoggedIn} myRanking={myRanking} />
      </div>

      {/* 호버 모달 */}
      {hoverUserInfo && (
        <HoverModal userInfo={hoverUserInfo} onClose={handleUserLeave} />
      )}
    </div>
  );
};

export default RankingList;
