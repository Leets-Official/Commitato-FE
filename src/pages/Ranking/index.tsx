import Header from '@/components/Header';
import Line from '@/assets/icon/myPageLine.svg?react';
import SearchIcon from '@/assets/icon/ic_ranking_search.svg?react';
import Footer from '@/components/Footer';
import RankingList from '@/components/Ranking/RankingList';

const RankingPage = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Header />
      <main className="h-[90vh] flex flex-col m-[3%] w-[65%] bg-white rounded-2xl mx-auto py-7 px-10">
        <p className="font-staatliches text-header">RANKING</p>
        <Line />
        <div className="relative w-[90%] mt-2 flex items-center justify-center mx-auto">
          <input
            className="w-full flex border-[3.5px] border-primary rounded-full placeholder:font-staatliches 
            placeholder:text-body placeholder:text-lightGray outline-none font-Bold text-body px-4 py-2 mt-2 leading-none"
            placeholder="SEARCH ID"
          />
          <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-4 w-[28px]" />
        </div>
        <RankingList />
      </main>
      <Footer />
    </div>
  );
};

export default RankingPage;
