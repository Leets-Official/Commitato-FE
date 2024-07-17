import { styled } from 'styled-components';

const StyledBase = styled.div`
  width: 981px;
  height: 45px;
  margin-top: 3%;
  margin-left: 5%;
  border: 1px solid;
  border-radius: 13px;
  border: none;
  background-color: ${({ theme }) => theme.COLORS.gray[100]};
`;

const StyledRange = styled.div`
  width: ${({ width }) => `${width}%`};
  height: 45px;
  border-radius: 13px;
  background-color: ${({ theme }) => theme.COLORS.yellow[100]};
  border: none;
`;

function XpBar() {
  const exp = 246;
  const ratio = parseInt(exp % 100);

  return (
    <StyledBase>
      <StyledRange width={ratio} />
    </StyledBase>
  );
}

export default XpBar;
