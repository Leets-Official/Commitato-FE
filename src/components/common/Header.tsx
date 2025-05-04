import { Link, useNavigate } from 'react-router-dom';
import LogoutModal from '@/components/modal/LogoutModal';
import { useState } from 'react';

const Header: React.FC = () => {
  const isLoggedIn = localStorage.getItem('accessToken');
  const nav = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setShowModal(false);
    nav('/');
  };

  return (
    <>
      <header className="w-full h-[63px] bg-white">
        <div className="flex items-center justify-between py-4 px-6">
          <div className="flex items-center space-x-8">
            <Link to="/" className="font-staatliches text-body">
              COMMITATO
            </Link>
            <div className="space-x-8">
              <Link
                to="/"
                className={`text-assistive ${location.pathname === '/' ? 'text-black' : 'text-grey hover:text-black'} `}
              >
                HOME
              </Link>

              {isLoggedIn && (
                <Link
                  to="/mypage"
                  className={`text-assistive ${location.pathname === '/mypage' ? 'text-black' : 'text-grey hover:text-black'} `}
                >
                  MY PAGE
                </Link>
              )}

              <Link
                to="/ranking"
                className={`text-assistive ${location.pathname === '/ranking' ? 'text-black' : 'text-grey hover:text-black'} `}
              >
                RANKING
              </Link>
            </div>
          </div>

          {isLoggedIn && (
            <button
              onClick={() => setShowModal(true)}
              className="text-grey hover:text-black"
            >
              Logout
            </button>
          )}
        </div>
      </header>
      {showModal && (
        <LogoutModal
          onClose={() => setShowModal(false)}
          onLogout={handleLogout}
        />
      )}
    </>
  );
};

export default Header;
