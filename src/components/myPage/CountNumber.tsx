import { countData } from '@/constants';

const CountNumber = () => {
  return (
    <div className="w-full flex gap-[1.25rem] whitespace-nowrap">
      {countData.map(({ color, label }, index) => (
        <div key={index} className="flex gap-[0.5rem]">
          <div
            className={`w-[1.25rem] h-[1.25rem] ${color} rounded-[0.1875rem]`}
          />
          <p className="font-semibold text-[0.875rem]">{label}</p>
        </div>
      ))}
    </div>
  );
};

export default CountNumber;
