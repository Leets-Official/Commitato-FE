declare module 'ranking-types' {
  export interface RankingUserTypes {
    githubId: string;
    exp: number;
    consecutiveCommitDays: number;
    tierName: string;
    ranking: number;
    isMe?: boolean;
  }

  export type RankChange = 'up' | 'down' | 'none';

  export interface RankingUserWithChange extends RankingUserTypes {
    change: RankChange;
    onUserHover?: (
      githubId: string,
      position: { x: number; y: number },
    ) => void;
    onUserLeave?: () => void;
  }

  export interface HoverUserInfo {
    githubId: string;
    githubUsername: string;
    githubProfileImage: string;
    position: { x: number; y: number };
  }
}
