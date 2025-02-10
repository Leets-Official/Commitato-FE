import styled from 'styled-components';
import footer from '../assets/footer.png';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const nav = useNavigate();

  const github = async () => {
    nav('https://github.com/');
  };
  return (
    <StyledDiv>
      <StyledHeader>
        <LogoDiv>COMMITATO</LogoDiv>
        <StyleImg src={footer} onClick={github} />
      </StyledHeader>
      {/* <StyledHeader2>
          <StyledPre>대표 | 가천대학교 Leets 동아리 내 commitato 팀</StyledPre>
          <StyledPre>사이트명 | Commitato</StyledPre>
        </StyledHeader2>
        <StyledPre>
          주소 | 가천대학교 글로벌캠퍼스 : (13120) 경기도 성남시 수정구 성남대로
          1342
        </StyledPre>
        <StyledPre>
          본 사이트에 게재된 개인 정보 및 작업물의 무단 도용을 금합니다.
        </StyledPre> */}
      <StyledPre>Copyright 2024. Commitato all rights reserved.</StyledPre>
    </StyledDiv>
  );
};

export default Footer;

 const StyledDiv = styled.div`
  width: 100%;
  height: 130px;
  background-color: ${({ theme }) => theme.COLORS.black};
  text-align: center;
  // margin-bottom: 5%;
`;

// const StyleMargin = styled.div`
//   // margin-left: 15%;
// `;

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1%;
`;

// const StyledHeader2 = styled.div`
//   display: flex;
//   margin-top: 2%;
// `;

const LogoDiv = styled.div`
  font-family: ${({ theme }) => theme.FONT_FAMILY.main};
  color: ${({ theme }) => theme.COLORS.white};
  font-size: 30px;
  margin-top: 0.5%;
`;

const StyleImg = styled.img`
  width: 33px;
  height: 33px;
  margin-left: 0.5%;
  margin-top: 0.2%;
`;

const StyledPre = styled.div`
  font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[100]};
  color: ${({ theme }) => theme.COLORS.gray[200]};
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
  // margin-bottom: 5%;
`;
