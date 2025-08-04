import { atom } from 'jotai';
import { HoverUserInfo } from 'ranking-types';

export const hoverUserCacheAtom = atom<Record<string, HoverUserInfo>>({});
