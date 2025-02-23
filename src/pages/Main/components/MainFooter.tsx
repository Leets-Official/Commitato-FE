// import styled from 'styled-components';
// import footer from '../../../assets/footer.png';
// import line from '../../../assets/line.png';

// const MainFooter = () => {
//   return (
//     <Wrapper>
//       <Flex>
//         <LogoDiv>COMMITATO</LogoDiv>
//         <LineImg src={line} alt="line" />
//       </Flex>

//       <GithubImg>
//         <Flex>
//           <Img
//             src={footer}
//             onClick={() => {
//               window.open(
//                 'https://github.com/Leets-Official/commitato-FE',
//                 '_blank',
//               );
//             }}
//           />
//           <Text>FE</Text>
//         </Flex>
//         <Flex>
//           <Img
//             src={footer}
//             onClick={() => {
//               window.open(
//                 'https://github.com/Leets-Official/commitato-BE',
//                 '_blank',
//               );
//             }}
//           />
//           <Text>BE</Text>
//         </Flex>
//       </GithubImg>

//       <ContentWrapper>
//         <StyledDiv>
//           <div>
//             대표 | 가천대학교
//             <LinkDiv
//               target="_blank"
//               rel="noreferrer"
//               href="https://www.leets.land/"
//             >
//               Leets
//             </LinkDiv>
//             동아리 내 commitato 팀
//           </div>
//           <div>사이트명 | Commitato </div>
//         </StyledDiv>
//         <div>
//           주소 | 가천대학교 글로벌캠퍼스 : (13120) 경기도 성남시 수정구 성남대로
//           1342
//         </div>
//         <div>
//           본 사이트에 게재된 개인 정보 및 작업물의 무단 도용을 금합니다.
//         </div>
//         <div>Copyright 2024. Commitato all rights reserved.</div>
//       </ContentWrapper>
//     </Wrapper>
//   );
// };

// export default MainFooter;

// const Wrapper = styled.div`
//   width: 100%;
//   height: 250px;
//   background-color: ${({ theme }) => theme.COLORS.black};
//   justify-content: center;
//   text-align: center;
//   position: relative;
//   top: 5600px;
// `;

// const ContentWrapper = styled.div`
//   font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[100]};
//   color: ${({ theme }) => theme.COLORS.gray[200]};
//   font-size: 14px;
//   display: flex;
//   flex-direction: column;
//   gap: 15px;
//   margin-top: 30px;
// `;

// const StyledDiv = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 70px;
// `;
// const LogoDiv = styled.div`
//   font-family: ${({ theme }) => theme.FONT_FAMILY.main};
//   color: ${({ theme }) => theme.COLORS.white};
//   font-size: 24px;
//   margin-top: 10px;
// `;

// const Img = styled.img`
//   width: 30px;
//   height: 30px;
//   cursor: pointer;
// `;

// const LineImg = styled.img`
//   width: 100px;
//   height: 0.5px;
//   margin-bottom: 10px;
// `;

// const Flex = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap: 10px;
// `;
// const LinkDiv = styled.a`
//   text-decoration: none;
//   color: ${({ theme }) => theme.COLORS.gray[200]};

//   &:hover {
//     color: ${({ theme }) => theme.COLORS.gray[100]};
//     text-decoration: underline;
//   }
//   padding: 5px;
// `;

// const Text = styled.p`
//   font-family: ${({ theme }) => theme.FONT_FAMILY.main};
//   color: ${({ theme }) => theme.COLORS.white};
//   font-size: 12px;
// `;

// const GithubImg = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   gap: 20px;
// `;

const MainFooter = () => {
  return <>MainFooter</>;
};

export default MainFooter;
