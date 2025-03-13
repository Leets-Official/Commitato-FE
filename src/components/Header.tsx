import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const isLoggedIn = localStorage.getItem('accessToken');
  const nav = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    nav('/');
  };

  return (
    <header className="w-full h-[63px] bg-white">
      <div className="flex items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-8">
          <Link to="/" className="font-staatliches text-body">
            COMMITATO
          </Link>
          <div className="space-x-8 ">
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
          <button onClick={handleLogout} className="text-grey hover:text-black">
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
