declare module 'ranking-types' {
  export interface RankingUserTypes {
    githubId: string;
    exp: number;
    consecutiveCommitDays: number;
    tierName: string;
    ranking: number;
  }

  export type RankChange = 'up' | 'down' | 'none';

  export interface RankingUserWithChange extends RankingUserTypes {
    change: RankChange;
  }
}
