import { ReactNode } from 'react';
import Close from '@/assets/icon/close.svg?react';

interface ModalProps {
  children: ReactNode;
  onClose?: () => void;
  className: string;
}

const Modal = ({ className, children, onClose }: ModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-1">
      <div
        className={`relative bg-white w-[704px] py-7 rounded-xl flex flex-col items-center justify-center text-center font-SemiBold text-captionBody ${className}`}
      >
        {onClose && (
          <button onClick={onClose} className="absolute top-4 right-4">
            <Close className="w-7 h-7" />
          </button>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
