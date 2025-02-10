import React from 'react';
import styled from 'styled-components';

export default function Button(props) {
  const { label, onClick } = props;

  return <StyledButton onClick={onClick}>{label}</StyledButton>;
}

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.COLORS.black};
  font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[200]};
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
  width: 300px;
  height: 50px;
  border-radius: 13px;
  border: none;
  color: #ffffff;
  cursor: pointer;
`;
