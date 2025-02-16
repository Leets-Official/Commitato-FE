import React from 'react';
import Github from '@/assets/icon/footerGithub.svg?react';

interface FooterProps {
  isMainPage?: boolean;
}

const Footer: React.FC<FooterProps> = ({ isMainPage = false }) => {
  return (
    <footer
      className={`w-full ${
        isMainPage ? 'h-[236px]' : 'h-[143px]'
      } flex text-white text-center py-7 items-center justify-center`}
    >
      <div className="px-9">
        <div className="flex justify-center items-center space-x-2">
          <span className="font-staatliches text-body">COMMITATO</span>
          <Github />
        </div>

        <div className="flex-col text-button text-grey mt-[5%] space-y-3">
          {isMainPage && (
            <div className="flex-col text-button text-grey mt-[5%] space-y-3">
              <p>
                대표 | 가천대학교 Leets 동아리 내 commitato 팀 &nbsp; &nbsp;
                사이트명 | Commitato
              </p>
              <p>
                주소 | 가천대학교 글로벌캠퍼스 : (13120) 경기도 성남시 수정구
                성남대로 1342
              </p>
              <p>
                본 사이트에 게재된 개인 정보 및 작업물의 무단 도용을 금합니다.
              </p>
            </div>
          )}
          <p>Copyright 2024. Commitato all rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
