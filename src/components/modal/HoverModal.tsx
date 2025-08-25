import React, { useEffect, useMemo, useRef, useState } from 'react';
import { HoverUserInfo } from 'ranking-types';
import { GAP_Y, MARGIN, OFFSET_X } from '@/constants';

interface HoverModalProps {
  userInfo: HoverUserInfo;
  onClose: () => void;
  onEnter?: () => void;
  onLeave?: () => void;
}

const HoverModal: React.FC<HoverModalProps> = ({
  userInfo,
  onClose,
  onEnter,
  onLeave,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 240, h: 72 });

  useEffect(() => {
    if (!ref.current) return;
    const { offsetWidth, offsetHeight } = ref.current;
    setSize({ w: offsetWidth, h: offsetHeight });
  }, [userInfo]);

  const pos = useMemo(() => {
    const desiredLeft = userInfo.position.x + OFFSET_X;
    const desiredTopBelow = userInfo.position.y + GAP_Y;

    // 가로 클램프
    const maxLeft = window.innerWidth - size.w - MARGIN;
    const clampedLeft = Math.max(MARGIN, Math.min(desiredLeft, maxLeft));

    const wouldOverflowBottom =
      desiredTopBelow + size.h + MARGIN > window.innerHeight;
    // 넘치면 위로 flip
    const desiredTopAbove = userInfo.position.y - size.h - GAP_Y;

    const topIfBelow = Math.max(
      MARGIN,
      Math.min(desiredTopBelow, window.innerHeight - size.h - MARGIN),
    );
    const topIfAbove = Math.max(
      MARGIN,
      Math.min(desiredTopAbove, window.innerHeight - size.h - MARGIN),
    );

    return {
      left: clampedLeft,
      top: wouldOverflowBottom ? topIfAbove : topIfBelow,
    };
  }, [userInfo, size]);

  useEffect(() => {
    const close = () => onClose();
    window.addEventListener('scroll', close, { passive: true });
    window.addEventListener('resize', close);
    return () => {
      window.removeEventListener('scroll', close);
      window.removeEventListener('resize', close);
    };
  }, [onClose]);

  return (
    <div
      ref={ref}
      className="fixed z-50 rounded-xl border border-gray-200 bg-white p-3 shadow-md cursor-pointer"
      style={{ top: pos.top, left: pos.left, width: 'max-content' }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={() =>
        window.open(`https://github.com/${userInfo.githubId}`, '_blank')
      }
    >
      <div className="flex items-center gap-3">
        <img
          src={userInfo.githubProfileImage}
          alt="github-profile"
          className="h-10 w-10 rounded-full"
        />
        <div className="flex flex-col">
          <span className="font-semibold">{userInfo.githubUsername}</span>
          <span className="text-sm text-gray-500">@{userInfo.githubId}</span>
        </div>
      </div>
    </div>
  );
};

export default HoverModal;
