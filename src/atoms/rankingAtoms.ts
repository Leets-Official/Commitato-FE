import { atom } from 'jotai';
import type { RankingUserWithChange } from 'ranking-types';

// 현재 랭킹 리스트
export const currentRankingListAtom = atom<RankingUserWithChange[]>([]);

// 이전 랭킹 리스트 (변동 비교용)
export const prevRankingListAtom = atom<RankingUserWithChange[]>([]);
