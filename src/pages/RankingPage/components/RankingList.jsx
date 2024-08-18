import styled from 'styled-components';
import RankingItem from './RankingItem';
import { StyledImg, StyledTitle } from '../../MyPage/MyPage';
import line from '../../../assets/line.png';
import Search from '../../../assets/Search.png';
import { useState } from 'react';

const RankingList = ({ data }) => {
  const [search, setSearch] = useState('');
  const onChangeSearch = e => {
    setSearch(e.target.value);
  };

  // const getFilteredData = () => {
  //   if (search === '') return datas;
  //   return datas.filter(data =>
  //     data.user.toLowerCase().includes(search.toLowerCase()),
  //   );
  // };

  // const filteredDatas = getFilteredData();
  return (
    <>
      <StyledTitle>Ranking</StyledTitle>
      <StyledImg src={line} />
      <InputDiv>
        <Input
          value={search}
          onChange={onChangeSearch}
          placeholder="Search Here"
        />
        <InputImg src={Search} alt="Search" />
      </InputDiv>

      <ListContainer>
        <div>Rank</div>
        <div>User</div>
        <div>Tier</div>
        <div>연속 커밋 횟수</div>
        <div>경험치</div>
      </ListContainer>
      <div>
        {data &&
          data.map(item => {
            return <RankingItem key={item.id} {...item} />;
          })}
      </div>

      <StyledImg src={line} />
    </>
  );
};

export default RankingList;

const InputDiv = styled.div`
  position: relative;
  width: 900px;
`;

const Input = styled.input`
  &::placeholder {
    font-family: ${({ theme }) => theme.FONT_FAMILY.main};
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.gray[100]};
  }

  font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[300]};
  font-size: ${({ theme }) => theme.FONT_SIZE.medium};

  border: 3px solid ${({ theme }) => theme.COLORS.yellow[100]};
  border-radius: 49px;
  width: 100%;
  padding: 9px 7px 7px 22px;
  margin: 20px 55px;
`;

const InputImg = styled.img`
  position: absolute;
  width: 33px;
  top: 36px;
  left: 930px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 100px;

  font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[300]};
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
  color: ${({ theme }) => theme.COLORS.gray[200]};
`;
