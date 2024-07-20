import Modal from 'react-modal';
import styled from 'styled-components';
import close from '../../../assets/close.png';
import { useEffect, useRef, useState } from 'react';

const CongratsModal = ({ githubId }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();

  return (
    <div>
      <StyledButton onClick={() => setModalOpen(true)}>모달열기</StyledButton>
      <StyledDiv>
        {modalOpen && (
          <StyledModal
            ref={modalBackground}
            onClick={e => {
              if (e.target === modalBackground.current) {
                setModalOpen(false);
              }
            }}
          >
            <StyledContent>
              <StyledClose onClick={() => setModalOpen(false)} src={close} />
              <StyledComment>
                <br />
                <br />
                <br />
                <br />
                {githubId}githubId님, Commitato에 오신 걸 환영해요! <br />
                <br />
                앞으로 Commitato와 함께 1일 1커밋을 실천하며 꾸준히 성장해봐요!
                <br />
              </StyledComment>
            </StyledContent>
          </StyledModal>
        )}
      </StyledDiv>
    </div>
  );
};

export default CongratsModal;

const StyledDiv = styled.div``;

const StyledButton = styled.button``;

const StyledModal = styled.div`
  position: fixed;
  display: flex;
  width: 704px;
  height: 263px;
  text-align: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.white};
  border-radius: 30px 30px;
`;

const StyledContent = styled.div``;

const StyledComment = styled.div`
  font-family: ${({ theme }) => theme.FONT_FAMILY.pretendard[200]};
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
`;

const StyledClose = styled.img`
  width: 34px;
  height: 34px;
`;
