import React, { useRef, useState } from 'react';
import { debounce } from 'lodash';
import { useAtom } from 'jotai';

import RankingItem from '@/components/ranking/RankingItem';
import Line from '@/assets/icon/myPageLine.svg?react';
import Pagination from '@/components/ranking/Pagination';
import RankingItemSkeleton from '@/components/ranking/RankingItemSkeleton';
import RankingHeader from '@/components/ranking/RankingHeader';
import MyRankingSection from '@/components/ranking/MyRankingSection';
import HoverModal from '@/components/modal/HoverModal';

import { useRankingList } from '@/hooks/useRankingList';
import { getHoverUserInfoApi } from '@/apis/ranking/ranking.api';
import { HoverUserInfo } from 'ranking-types';
import { hoverUserCacheAtom } from '@/atoms/hoverUserAtoms';

interface RankingListProps {
  searchId: string | null;
}

type Position = { x: number; y: number };

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
  const [hoverUserCache, setHoverUserCache] = useAtom(hoverUserCacheAtom);

  // prevent flicker when moving cursor between target and modal
  const closeTimer = useRef<number | null>(null);
  const cancelClose = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setHoverUserInfo(null), 120);
  };

  // debounced fetch for hover card
  const debouncedFetch = useRef(
    debounce(async (githubId: string, position: Position) => {
      const res = await getHoverUserInfoApi(githubId);
      const userInfo = { ...res, position };
      setHoverUserCache(prev => ({ ...prev, [githubId]: res }));
      setHoverUserInfo(userInfo);
    }, 250),
  ).current;

  const handleUserHover = (githubId: string, position: Position) => {
    cancelClose();
    if (hoverUserCache[githubId]) {
      setHoverUserInfo({ ...hoverUserCache[githubId], position });
      return;
    }
    debouncedFetch(githubId, position);
  };

  // loading
  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] w-full flex-col">
        <RankingHeader />
        <div className="min-h-[50vh]">
          {Array.from({ length: 10 }).map((_, idx) => (
            <RankingItemSkeleton key={idx} />
          ))}
        </div>
      </div>
    );
  }

  // error
  if (error) {
    return <p className="font-Bold text-center text-red-500">{error}</p>;
  }

  return (
    <div className="flex min-h-[60vh] w-full flex-col justify-between">
      <RankingHeader />

      <div className="min-h-[50vh]">
        {rankingData.length > 0 ? (
          rankingData.map(data => (
            <RankingItem
              key={data.githubId}
              {...data}
              onUserHover={handleUserHover}
              onUserLeave={scheduleClose}
            />
          ))
        ) : (
          <p className="letter-spacing-0.1 mt-4 text-center text-small font-Bold text-grey">
            검색 결과가 없습니다.
          </p>
        )}
      </div>

      <div className="mt-9 flex min-h-[40px] justify-center">
        <Pagination
          totalPages={totalPages}
          currentPage={page}
          onPageChange={setPage}
        />
      </div>

      <div className="mt-1 w-full pt-3">
        <div className="w-full">
          <Line className="w-full" />
        </div>
        <div className="mt-1.5 flex items-center justify-center">
          <MyRankingSection isLoggedIn={isLoggedIn} myRanking={myRanking} />
        </div>
      </div>

      {hoverUserInfo && (
        <HoverModal
          userInfo={hoverUserInfo}
          onClose={() => setHoverUserInfo(null)}
          onEnter={cancelClose}
          onLeave={scheduleClose}
        />
      )}
    </div>
  );
};

export default RankingList;
