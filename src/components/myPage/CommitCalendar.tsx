import { format, subMonths, startOfMonth, endOfMonth } from 'date-fns';

type CommitData = {
  commitDate: string;
  cnt: number;
};

type Props = {
  commits: CommitData[];
};

const getColorClass = (cnt: number): string => {
  if (cnt === 0) return 'bg-lightGray';
  if (cnt >= 1 && cnt <= 5) return 'bg-yellow-300';
  if (cnt >= 6 && cnt <= 10) return 'bg-yellow-400';
  if (cnt >= 11 && cnt <= 20) return 'bg-yellow-100';
  return 'bg-yellow-500';
};

const getDateRange = (): string[] => {
  const today = new Date();
  const startDate = startOfMonth(subMonths(today, 2));
  const endDate = endOfMonth(today);

  const dates: string[] = [];
  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    dates.push(format(new Date(d), 'yyyy-MM-dd'));
  }

  return dates;
};

const splitDatesByMonth = (dates: string[]): Record<string, string[]> => {
  const map: Record<string, string[]> = {};

  dates.forEach(date => {
    const [year, month] = date.split('-');
    const key = `${year}-${month}`;
    if (!map[key]) map[key] = [];
    map[key].push(date);
  });

  return map;
};

type MonthBlockProps = {
  title: string;
  dates: string[];
  commitMap: Map<string, number>;
};

const MonthBlock: React.FC<MonthBlockProps> = ({ title, dates, commitMap }) => {
  return (
    <div className="flex flex-col items-center w-[100%]">
      <p className="text-grey font-staatliches text-body mt-3 mb-2">{title}</p>
      <div className="grid grid-cols-7 gap-x-4 gap-y-1">
        {dates.map(date => {
          const count = commitMap.get(date) ?? 0;
          const color = getColorClass(count);
          const day = parseInt(date.split('-')[2]);

          return (
            <div key={date} className="flex flex-col items-center">
              <div
                title={`${date}: ${count} commit${count !== 1 ? 's' : ''}`}
                className={`w-3 h-3 rounded-[3px] ${color}`}
              />
              <span className="font-SemiBold text-[8px] text-lightGray mt-1">
                {day}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CommitCalendar: React.FC<Props> = ({ commits }) => {
  const commitMap = new Map<string, number>();
  commits.forEach(c => {
    const key = c.commitDate.split('T')[0];
    commitMap.set(key, c.cnt);
  });

  const dates = getDateRange();
  const monthMap = splitDatesByMonth(dates);
  const sortedMonthKeys = Object.keys(monthMap).sort();

  return (
    <div className="flex justify-between gap-4 w-full">
      {sortedMonthKeys.map(monthKey => {
        const monthDate = new Date(`${monthKey}-01`);
        const title = format(monthDate, 'LLLL');
        return (
          <MonthBlock
            key={monthKey}
            title={title}
            dates={monthMap[monthKey]}
            commitMap={commitMap}
          />
        );
      })}
    </div>
  );
};

export default CommitCalendar;
