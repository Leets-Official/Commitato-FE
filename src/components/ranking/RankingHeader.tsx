const RankingHeader = () => {
  return (
    <div>
      <div className="flex py-3 font-ExtraBold text-grey text-left px-4">
        <div className="w-[10%]">Rank</div>
        <div className="w-[30%]">User</div>
        <div className="w-[32%]">Tier</div>
        <div className="w-[18%]">연속 커밋 횟수</div>
        <div className="w-[10%]">경험치</div>
      </div>
    </div>
  );
};

export default RankingHeader;
