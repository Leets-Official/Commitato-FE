import { UserTypes } from 'commitato-types';

export const statsData: { label: string; valueKey: keyof UserTypes }[] = [
  { label: 'TODAY COMMIT', valueKey: 'todayCommitCount' },
  { label: 'TOTAL COMMIT', valueKey: 'totalCommitCount' },
] as const;
