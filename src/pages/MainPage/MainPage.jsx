import styled, { css, keyframes } from 'styled-components';
import comment1 from '../../assets/comment1.png';
import comment2 from '../../assets/comment2.png';
import comment3 from '../../assets/comment3.png';
import comment4 from '../../assets/comment4.png';
import { potatoes } from '../../utils/constants';
import { ParallaxText } from './components/ParallaxText';
import AnimatedText from './components/AnimatedText';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import MainFooter from './components/MainFooter';
import ranking_img from '../../assets/ranking_img.png';
import commitgrass from '../../assets/commitgrass.png';
import ScrollToTopButton from './components/ScrollToTopButton';
import axios from 'axios';
import githubLogin from '../../apis/auth/Login';

const TranslateAnimation = keyframes`
    0%{
      opacity: 0;
      transform: translateX(-100%);
    }
  
    100% {
      opacity: 1;
      transform:translateX(0%)
    }
  `;

const SlideUp = keyframes`
    0%{
      opacity: 0;
      transform: translateY(100%);
    }

    50% {
      opacity: 0.5;
    }

    100% {
      opacity: 1;
      transform: translateY(0%);
    }

  `;

const fadeIn = keyframes`
            from {
              opacity: 0;
              transform: scaleX(0.5)
            }
            to {
              opacity: 1;
              transform: scaleX(1)
            }
          `;
const pulseGrow = keyframes`
  to {
    transform: scale(1.1);
  }
  `;

const GithubButton = () => {
  const clientId = import.meta.env.VITE_REACT_APP_CLIENT_ID;
  const redirectUrl = import.meta.env.VITE_REACT_APP_REDIRECT_URL;
  const githubURL = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}`;
  const handleLogin = () => {
    window.location.href = githubURL;
  };

  return (
    <div>
      <button onClick={handleLogin}>깃허브 로그인</button>
    </div>
  );
};

export { GithubButton };

const MainPage = () => {
  const [activeIndexes, setActiveIndexes] = useState([]);

  // const clientId = 'Iv23lil2Miq3YxcLJLER';
  // const redirectUrl = 'https://www.commitato.site/login';
  // const githubURL = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}`;

  // const onClickToGithub = () => {
  //   window.location.href = githubURL;
  // };

  const onClickToBalloon = index => {
    setActiveIndexes(prevIndexes =>
      prevIndexes.includes(index)
        ? prevIndexes.filter(i => i !== index)
        : [...prevIndexes, index],
    );
  };

  const divRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    });

    divRefs.current.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      divRefs.current.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <>
      <Header />
      <StyledContainer>
        <CenterDiv>
          <MainDiv>COMMITATO</MainDiv>
          <GithubButton />
        </CenterDiv>

        <ScrollToTopButton />
        <ParallaxText baseVelocity={-7}>
          <svg
            width="130"
            height="28"
            viewBox="0 0 178 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 26L173 26"
              stroke="#333333"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <circle
              cx="89"
              cy="26"
              r="21"
              fill="white"
              stroke="black"
              strokeWidth="10"
            />
          </svg>
          &nbsp; &nbsp;ABOUT &nbsp; &nbsp; COMMITATO
        </ParallaxText>

        <FlexContainer>
          <AnimatedDiv ref={divRefs.current[0]}>
            <Comment1Img src={comment1} alt="comment1" />
          </AnimatedDiv>
          <AnimatedText />

          <Comment2ImgWrapper>
            <AnimatedDiv ref={divRefs.current[1]}>
              <Comment2Img src={comment2} alt="comment2" />
            </AnimatedDiv>
          </Comment2ImgWrapper>

          {/*bg: black*/}
          <BgDiv>
            {potatoes.map((potato, index) => (
              <PotatoWrapper key={potato.id}>
                <FlexBox>
                  {potato.id === 1 || potato.id === 3 ? (
                    <>
                      <PotatoImg
                        src={potato.img}
                        alt={potato.img}
                        onClick={() => onClickToBalloon(index)}
                      />
                      <BalloonImg
                        src={potato.comment}
                        alt={`balloon_${potato.id}`}
                        active={activeIndexes.includes(index)}
                      />
                    </>
                  ) : (
                    <>
                      <BalloonImg
                        src={potato.comment}
                        alt={`balloon_${potato.id}`}
                        active={activeIndexes.includes(index)}
                      />
                      <PotatoImg
                        src={potato.img}
                        alt={potato.img}
                        onClick={() => onClickToBalloon(index)}
                      />
                    </>
                  )}
                </FlexBox>
                <StyledText
                  isActive={activeIndexes.includes(index)}
                  align={
                    activeIndexes.includes(index)
                      ? potato.id === 1 || potato.id === 3
                        ? 'left'
                        : 'right'
                      : 'center'
                  }
                >
                  {potato.text}
                </StyledText>
              </PotatoWrapper>
            ))}
          </BgDiv>

          <Comment3ImgWrapper>
            <AnimatedDiv ref={divRefs.current[2]}>
              <Comment3Img src={comment3} alt="comment3" />
            </AnimatedDiv>
            <AnimatedImg>
              <CommitGrassImg src={commitgrass} alt="commitgrass" />
              <StyledComment>
                마이 페이지에서 나의 커밋 현황을 확인할 수 있는 달력 기능을
                해요. 꾸준한 커밋으로 당신의 커밋 농장을 황금색 감자로 가득
                채워보세요!
              </StyledComment>
            </AnimatedImg>
          </Comment3ImgWrapper>

          {/*bg: yellow */}
          <Comment4ImgWrapper>
            <AnimatedDiv ref={divRefs.current[3]}>
              <Comment4Img src={comment4} alt="comment4" />
            </AnimatedDiv>
            <AnimatedImg>
              <RankingImg src={ranking_img} alt="ranking_img" />
              <StyledComment2>
                <div>
                  랭킹에서 다른 유저와 자신의 순위, 티어, 연속 커밋 횟수, 획득
                  경험치 등을 확인할 수 있어요.
                </div>
                <div>
                  만약 특정 유저의 정보가 궁금하다면, 깃허브 아이디를 검색하여
                  확인할 수 있어요.
                </div>
                <div>친구와 함께 순위를 겨루며 커밋테이토를 즐기세요!</div>
              </StyledComment2>
            </AnimatedImg>
          </Comment4ImgWrapper>
        </FlexContainer>

        <TextDiv>
          <SlideUpText>
            <p>COMMITATO와 함께하는 1일 1커밋,</p>
            <p>지금 시작하세요.</p>
          </SlideUpText>
        </TextDiv>
        <MainFooter />
      </StyledContainer>
    </>
  );
};

export default MainPage;

const StyledContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.COLORS.yellow[100]};
  width: 100%;
  /* min-height: calc(100vh - 288px); */
`;

export const MainDiv = styled.div`
  font-family: ${({ theme }) => theme.FONT_FAMILY.main};
  color: ${({ theme }) => theme.COLORS.black};
  font-size: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 280px;

  @media screen and (max-width: 1920px) {
    font-size: 200px;
  }
  @media screen and (max-width: 768px) {
    font-size: 150px;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 480px) {
    font-size: 100px;
    justify-content: center;
    align-items: center;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;
const Comment1Img = styled.img`
  padding-left: 50px;
  width: 900px;
  @media screen and (max-width: 1920px) {
    width: 900px;
  }
  @media screen and (max-width: 768px) {
    padding-left: 30px;
    width: 600px;
  }
  @media screen and (max-width: 480px) {
    padding-left: 20px;
    width: 300px;
  }
`;
const Comment2Img = styled.img`
  width: 900px;
  @media screen and (max-width: 1920px) {
    width: 900px;
  }
  @media screen and (max-width: 768px) {
    width: 600px;
  }
  @media screen and (max-width: 480px) {
    width: 300px;
  }
`;

const Comment2ImgWrapper = styled.div`
  background-image: linear-gradient(
    ${({ theme }) => theme.COLORS.yellow[100]},
    ${({ theme }) => theme.COLORS.black}
  );
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 300px;
  padding-right: 100px;
`;
const Comment3ImgWrapper = styled.div`
  background-image: linear-gradient(
    ${({ theme }) => theme.COLORS.black},
    ${({ theme }) => theme.COLORS.yellow[100]}
  );
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Comment4ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  align-items: flex-end;
`;
const Comment3Img = styled.img`
  position: relative;
  margin-left: 100px;
  top: 1300px;
  width: 900px;
  @media screen and (max-width: 1920px) {
    width: 900px;
  }
  @media screen and (max-width: 768px) {
    margin-left: 70px;
    width: 600px;
  }
  @media screen and (max-width: 480px) {
    margin-left: 50px;
    width: 300px;
  }
`;
const Comment4Img = styled.img`
  position: relative;
  padding-right: 100px;
  top: 1700px;
  width: 900px;
  @media screen and (max-width: 1920px) {
    width: 900px;
  }
  @media screen and (max-width: 768px) {
    padding-right: 200px;
    width: 600px;
  }
  @media screen and (max-width: 480px) {
    padding-right: 300px;
    width: 300px;
  }
`;

const AnimatedDiv = styled.div`
  &.animate {
    animation: ${TranslateAnimation} 2s forwards;
  }
  margin: 50px 0;
`;

const BgDiv = styled.div`
  background-color: ${({ theme }) => theme.COLORS.black};
  position: relative;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-left: 100px;
  margin-right: 100px;
`;

const StyledText = styled.p`
  color: ${({ theme }) => theme.COLORS.gray[200]};
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[300]};
  text-align: ${({ align }) => align};
  position: ${({ isActive }) => (isActive ? 'relative' : 'static')};
  left: ${({ isActive, align }) =>
    isActive && align === 'left' ? '-170px' : '90px'};
  margin-bottom: 70px;
`;

const BalloonImg = styled.img`
  width: 700px;
  height: 250px;
  display: ${({ active }) => (active ? 'block' : 'none')};
  animation: ${({ active }) =>
    active &&
    css`
      ${fadeIn} 0.5s
    `};
`;

const PotatoImg = styled.img`
  width: 230px;
  cursor: pointer;
  &:hover {
    animation-name: ${pulseGrow};
    animation-duration: 0.3s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
`;

const PotatoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-bottom: 30px;
`;
const TextDiv = styled.div`
  background-image: linear-gradient(
    ${({ theme }) => theme.COLORS.yellow[100]},
    ${({ theme }) => theme.COLORS.black} 70%
  );
  font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[300]};
  height: 100vh;
  color: ${({ theme }) => theme.COLORS.white};
  font-size: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 6000px;
  margin-bottom: 400px;
`;

const SlideUpText = styled.div`
  animation: ${SlideUp} 2s infinite;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  @media screen and (max-width: 1920px) {
  }
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;
const AnimatedImg = styled.div`
  animation: ${SlideUp} 2s infinite;
`;
const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;

const CommitGrassImg = styled.img`
  width: 1100px;
  height: 280px;
  margin-left: 160px;
  position: relative;
  top: 1400px;
  cursor: pointer;
  @media screen and (max-width: 1920px) {
    width: 1100px;
  }
  @media screen and (max-width: 768px) {
    margin-left: 100px;
    width: 600px;
    height: 200px;
  }
  @media screen and (max-width: 480px) {
    width: 300px;
    height: 100px;
  }
`;

const RankingImg = styled.img`
  width: 1100px;
  height: 300px;
  position: relative;
  top: 1700px;
  padding-right: 160px;
  cursor: pointer;
  @media screen and (max-width: 1920px) {
    width: 1100px;
  }
  @media screen and (max-width: 768px) {
    padding-right: 160px;
    width: 600px;
    height: 200px;
  }
  @media screen and (max-width: 480px) {
    width: 300px;
    height: 100px;
  }
`;

const StyledComment = styled.div`
  color: ${({ theme }) => theme.COLORS.brown[200]};
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
  font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[300]};
  position: relative;
  top: 1430px;
  left: 169px;
  @media screen and (max-width: 1920px) {
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    left: 110px;
    font-size: 12px;
  }
  @media screen and (max-width: 480px) {
    left: 110px;
    font-size: 10px;
  }
`;

const StyledComment2 = styled(StyledComment)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-end;
  top: 1750px;
  margin-right: 330px;
`;
