import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
  const nav = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setIsLoggedIn(!!token);
  }, []);

  const home = async () => {
    nav('/');
  };
  const myPage = async () => {
    nav('/my');
  };
  const ranking = async () => {
    nav('/ranking');
  };

  const logout = () => {
    localStorage.removeItem('accessToken'); // 로그아웃 시 토큰 삭제
    setIsLoggedIn(false);
    nav('/'); // 로그인 페이지로 리디렉션
  };

  return (
    <StyledHeader>
      <LogoDiv>COMMITATO</LogoDiv>
      <StyledButton onClick={home}>HOME</StyledButton>
      <StyledButton onClick={myPage}>MY PAGE</StyledButton>
      <StyledButton onClick={ranking}>RANKING</StyledButton>
      {isLoggedIn && (
        <StyledLogOutButton onClick={logout}>LOG OUT</StyledLogOutButton>
      )}
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  padding: 20px;
  z-index: 1;
  width: 100%;
  height: 38px;
  background: #ffffff;
  top: 0px;
`;

const LogoDiv = styled.div`
  font-family: ${({ theme }) => theme.FONT_FAMILY.main};
  color: ${({ theme }) => theme.COLORS.black};
  font-size: ${({ theme }) => theme.FONT_SIZE.large};
`;

const StyledButton = styled.h1`
  font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[100]};
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
  color: ${({ theme }) => theme.COLORS.gray[200]};
  margin-left: 15px;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.COLORS.black};
  }
`;

const StyledLogOutButton = styled.h1`
  font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[100]};
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
  color: ${({ theme }) => theme.COLORS.gray[200]};
  margin-left: 74%;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.COLORS.black};
  }
`;
