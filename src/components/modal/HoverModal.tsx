import { HoverUserInfo } from 'ranking-types';

interface HoverModalProps {
  userInfo: HoverUserInfo;
  onClose: () => void;
}

const HoverModal: React.FC<HoverModalProps> = ({ userInfo, onClose }) => {
  return (
    <div
      className="absolute z-50 p-3 bg-white border border-gray-200 rounded-xl shadow-md"
      style={{
        top: userInfo.position.y + 10,
        left: userInfo.position.x + 10,
      }}
      onMouseLeave={onClose}
    >
      <div className="flex items-center gap-3">
        <img
          src={userInfo.githubProfileImage}
          alt="github avatar"
          className="w-10 h-10 rounded-full"
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
