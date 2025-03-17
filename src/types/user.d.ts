declare module 'commitato-types' {
  interface UserTypes {
    githubId: string;
    ranking: number;
    tierName: string;
    consecutiveCommitDays: number;
    characterUrl: string;
    exp: number;
    todayCommitCount: number;
    totalCommitCount: number;
    isMyAccount: boolean;
    lastCommitUpdateTime: string;
  }
}
