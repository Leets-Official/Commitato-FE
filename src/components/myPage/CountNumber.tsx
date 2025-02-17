import { countData } from '@/constants';

const CountNumber = () => {
  return (
    <div className="flex gap-5">
      {countData.map(({ color, label }, index) => (
        <div key={index} className="flex gap-2">
          <div className={`w-[20px] h-[20px] ${color} rounded-[3px]`} />
          <p className="font-semibold text-[14px]">{label}</p>
        </div>
      ))}
    </div>
  );
};

export default CountNumber;
