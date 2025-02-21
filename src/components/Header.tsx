import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem('accessToken') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('accessToken', String(isLoggedIn));
  }, [isLoggedIn]);

  return (
    <header className="w-full h-[63px] bg-white">
      <div className="flex items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-8">
          <Link to="/" className="font-staatliches text-body">
            COMMITATO
          </Link>
          <div className="space-x-8">
            <Link to="/" className="text-grey text-assistive hover:text-black">
              HOME
            </Link>

            {isLoggedIn && (
              <Link
                to="/mypage"
                className="text-grey text-assistive hover:text-black"
              >
                MY PAGE
              </Link>
            )}

            <Link
              to="/ranking"
              className="text-grey text-assistive hover:text-black"
            >
              RANKING
            </Link>
          </div>
        </div>

        {isLoggedIn && (
          <button
            onClick={() => setIsLoggedIn(false)}
            className="text-grey hover:text-black"
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
