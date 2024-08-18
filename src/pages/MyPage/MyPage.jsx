import GitHubCalendar from 'react-github-calendar';
import React, { useState, useEffect, useContext } from 'react';
import { styled } from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import stupid_potato from '../../assets/stupid_potato.png';
import talking_potato from '../../assets/talking_potato.png';
import developer_potato from '../../assets/developer_potato.png';
import ceo_potato from '../../assets/ceo_potato.png';
import line from '../../assets/line.png';
import circle from '../../assets/circle.png';
import githubChar from '../../assets/githubChar.png';
import XpBar from '../../components/XpBar';
import IntroduceModal from './components/IntroduceModal';
import { UserContext } from '../../apis/UserContext';
import { StyledButton } from '../../components/Button';
import User from './User';
import { updateCommit } from '../../apis/commit/commit';

function GitHubChart({ githubId }) {
  const { userData, error } = useContext(UserContext);

  const [isMounted, setIsMounted] = useState(false);

  const explicitTheme = {
    light: ['#D9D9D9', '#FFEBB7', '#FFDF8D', '#ffcf55', '#FFBA07'],
    dark: ['#D9D9D9', '#FFEBB7', '#FFDF8D', '#ffcf55', '#FFBA07'],
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Wrapper>
      {isMounted && (
        <GitHubCalendar
          username={githubId}
          blockSize={20}
          blockMargin={15}
          blockRadius={5}
          theme={explicitTheme}
          style={{
            height: '17rem',
            width: '50rem',
            marginLeft: '3.5rem',
          }}
        />
      )}
    </Wrapper>
  );
}

const MyPage = () => {
  const {
    userId,
    userName,
    userExp,
    userTierName,
    userUpdatedAt,
    userCharacterUrl,
    userConsecutiveCommitDays,
    userTotalCommitCount,
    userTodayCommitCount,
    lastCommitUpdateTime,
    ranking,
    error,
    loading,

    setUserName,
    setUserTierName,
    setUserConsecutiveCommitDays,
    setUserUpdatedAt,
    setUserTodayCommitCount,
    setUserTotalCommitCount,
    setLastCommitUpdateTime,
    setRanking,
    setUserCharacterUrl,
    setUserExp,
  } = useContext(UserContext);

  useEffect(() => {
    updateCommit().then(data => {
      setUserName(data.githubId);
      setUserTierName(data.tierName);
      setUserConsecutiveCommitDays(data.consecutiveCommitDays);
      setUserUpdatedAt(data.updatedAt);
      setUserTodayCommitCount(data.todayCommitCount);
      setUserTotalCommitCount(data.totalCommitCount);
      setUserCharacterUrl(data.characterUrl);
      setUserExp(data.exp);
      setLastCommitUpdateTime(data.lastCommitUpdateTime);
      setRanking(data.ranking);
    });
  }, []);

  // useEffect(() => {
  //   console.log('Current state: ', {
  //     userId,
  //     userName,
  //     userExp,
  //     userTierName,
  //     userCharacterUrl,
  //     userConsecutiveCommitDays,
  //     userTotalCommitCount,
  //     userTodayCommitCount,
  //   });
  // }, [
  //   userId,
  //   userName,
  //   userExp,
  //   userTierName,
  //   userCharacterUrl,
  //   userConsecutiveCommitDays,
  //   userTotalCommitCount,
  //   userTodayCommitCount,
  // ]);

  if (loading) {
    return <div>로딩중...</div>; // 데이터를 불러오는 동안 로딩 화면을 보여줌
  }

  if (error) {
    return <div>에러 발생: {error}</div>;
  }
  // if (
  //   !userId ||
  //   userExp === null ||
  //   userName === null ||
  //   userTierName === null ||
  //   userConsecutiveCommitDays === null ||
  //   userTotalCommitCount === null ||
  //   userTodayCommitCount === null
  // ) {
  //   return <div>로딩중...</div>;
  // }

  const character = [
    {
      id: 0,
      title: '바보 감자',
      img: stupid_potato,
    },
    {
      id: 1,
      title: '말하는 감자',
      img: talking_potato,
    },
    {
      id: 2,
      title: '개발자 감자',
      img: developer_potato,
    },
    {
      id: 3,
      title: 'CEO 감자',
      img: ceo_potato,
    },
  ];

  const selectedCharacterId = 0;

  const selectedCharacter = character.find(
    char => char.id === selectedCharacterId,
  );

  const displayCreateAt = createdAt => {
    const date = new Date(createdAt);
    const now = Date.now();
    const milliSeconds = now - date;

    const seconds = milliSeconds / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;
    const months = days / 30;
    const years = months / 12;

    if (seconds < 60) {
      return '방금 전';
    } else if (minutes < 60) {
      return `${Math.floor(minutes)}분 전`;
    } else if (hours < 24) {
      return `${Math.floor(hours)}시간 전`;
    } else if (days < 30) {
      return `${Math.floor(days)}일 전`;
    } else if (months < 12) {
      return `${Math.floor(months)}달 전`;
    } else {
      return `${Math.floor(years)}년 전`;
    }
  };
  return (
    <>
      <Header />
      <StyledBlack>
        <StyledWhite>
          <div>
            <StyledTitle>MY PAGE</StyledTitle>
            <StyledImg src={line} />
            <Wrapper>
              {selectedCharacter && (
                <div key={selectedCharacter.id}>
                  <Styledimg src={userCharacterUrl} />
                </div>
              )}
              <div>
                <StyledUpdate>
                  <StyledName>{userName}</StyledName>
                  <StyledUpdateDate>
                    <StyledUpdateButton>UPDATE</StyledUpdateButton>
                  </StyledUpdateDate>
                </StyledUpdate>
                <StyledThree>
                  <StyledRanking>Ranking {ranking}위 </StyledRanking>
                  <StyledLevel>level {userTierName} </StyledLevel>
                  <StyledCont>
                    연속 커밋 {userConsecutiveCommitDays}일차{' '}
                  </StyledCont>
                  <StyledDate>
                    최근 업데이트 : {displayCreateAt(lastCommitUpdateTime)}
                  </StyledDate>
                </StyledThree>
                <StyledXpBar>
                  <XpBar exp={userExp} />
                  <IntroduceModal />
                </StyledXpBar>

                <StyledTwo>
                  <StyledNum>0점</StyledNum>
                  <StyledNum>50점</StyledNum>
                </StyledTwo>
              </div>
            </Wrapper>
            <StyledSubTitle>나의 커밋 농장</StyledSubTitle>
            <StyledImg2 src={line} />
            <StyledDiv>
              <GitHubChart githubId={userName} />
              <StyledCommit>
                <StyledConnect>
                  <StyledArr>TODAY COMMIT</StyledArr>
                  <StyledArr3>{userTodayCommitCount}</StyledArr3>
                </StyledConnect>
                <StyledImg3 src={circle} />
                <StyledConnect>
                  <StyledArr>TOTAL COMMIT</StyledArr>
                  <StyledArr3>{userTotalCommitCount}</StyledArr3>
                </StyledConnect>
                <StyledImg3 src={circle} />
                <StyledGit>
                  <StyledImg4 src={githubChar} />
                  <StyledArr2>GITHUB</StyledArr2>
                  <StyledArr4>{userName}</StyledArr4>
                </StyledGit>
              </StyledCommit>
            </StyledDiv>
          </div>
        </StyledWhite>
      </StyledBlack>
      <Footer />
    </>
  );
};

export default MyPage;

const StyledUpdateDate = styled.div``;

const StyledDate = styled.div`
  font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[100]};
  font-size: 17px;
  color: ${({ theme }) => theme.COLORS.gray[200]};
  margin-left: 47%;
  margin-bottom: 10%;
`;

const StyledUpdate = styled.div`
  display: flex;
  width: 981px;
  justify-content: space-between;
  margin-left: 2.5%;
`;

const StyledXpBar = styled.div`
  display: flex;
`;

const StyledUpdateButton = styled.button`
  width: 135px;
  height: 45px;
  background-color: ${({ theme }) => theme.COLORS.black};
  border-radius: 10px 10px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.main};
  font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  color: ${({ theme }) => theme.COLORS.white};
  margin-right: 2%;
  &:hover {
    background-color: ${({ theme }) => theme.COLORS.gray[100]};
    border: ${({ theme }) => theme.COLORS.gray[100]};
  }
`;

export const StyledBlack = styled.div`
  display: flex;
  padding-top: 38px;
  width: 100%;
  height: 100vh;
  background: #000000;
`;

export const StyledWhite = styled.div`
  border-radius: 30px;
  width: 1316px;
  height: 752px;
  background: #ffffff;
  margin: auto auto;
`;

export const StyledTitle = styled.div`
  margin-left: 4.5%;
  margin-top: 3.5%;
  font-family: ${({ theme }) => theme.FONT_FAMILY.main};
  font-size: 48px;
`;

export const StyledImg = styled.img`
  margin-left: 4%;
  width: 90%;
`;

const Wrapper = styled.div`
  display: flex;
  background-color: white;
  padding: 20px;
`;

const StyledSubTitle = styled.div`
  margin-left: 7%;
  margin-top: 1%;
  font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[300]};
  font-size: 20px;
`;

const StyledImg2 = styled.img`
  margin-left: 5%;
  width: 62%;
`;

const StyledImg3 = styled.img`
  margin-top: 2%;
  margin-left: 7%;
  width: 70%;
`;

const StyledGit = styled.div`
  display: flex;
`;

const StyledImg4 = styled.img`
  margin-top: 2%;
  margin-left: 10%;
  width: 37px;
  height: 37px;
  object-fit: cover;
`;

const Styledimg = styled.img`
  width: 174px;
  height: 209px;
  object-fit: cover;
  margin-left: 20%;
`;

const StyledArr = styled.div`
  margin-left: 10%;
  margin-top: 6%;
  font-family: ${({ theme }) => theme.FONT_FAMILY.main};
  font-size: ${({ theme }) => theme.FONT_SIZE.medium};
`;

const StyledArr2 = styled.div`
  margin-left: 2%;
  margin-top: 3.2%;
  font-family: ${({ theme }) => theme.FONT_FAMILY.main};
  font-size: 28px;
`;

const StyledDiv = styled.div`
  display: flex;
`;

const StyledCommit = styled.div`
  margin-top: 2%;
  margin-left: 4%;
`;

const StyledThree = styled.div`
  display: flex;
  margin-left: 5%;
  margin-top: 1.5%;
  width: 950px;
  height: 22px;
  object-fit: cover;
  font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[200]};
  // justify-content: space-between;
`;
const StyledName = styled.div`
  font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[400]};
  font-size: ${({ theme }) => theme.FONT_SIZE.large};
  margin-left: 5%;
  // margin-top: 5%;
`;

const StyledRanking = styled.div`
  margin-right: 1%;
`;

const StyledLevel = styled.div`
  margin-right: 1%;
`;

const StyledCont = styled.div`
  margin-right: 1%;
`;

const StyledArr3 = styled.div`
  font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[300]};
  font-size: 50px;
  margin-left: 20%;
  margin-top: 2%;
`;

const StyledConnect = styled.div`
  display: flex;
`;

const StyledArr4 = styled.div`
  margin-left: 12%;
  margin-top: 4%;
  font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[200]};
  font-size: 18px;
`;

const StyledTwo = styled.div`
  margin-top: 0.5%;
  margin-left: 5.4%;
  font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[100]};
  font-family: ${({ theme }) => theme.COLORS.gray[100]};
  display: flex;
`;

const StyledNum = styled.div`
  width: 900px;
  justifycontent: space-between;
`;
