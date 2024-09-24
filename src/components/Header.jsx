import { useAuth } from '../utils/hooks/authHook';
import { Link } from 'react-router-dom';
import { LogOut, LogIn } from 'react-feather';

const Header = () => {
  const { user, handleLogout } = useAuth();
  function getGreeting() {
    const hour = new Date().getHours();

    if (hour < 12) {
      return 'Good Morning';
    } else if (hour < 17) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  }

  return (
    <div id="header--wrapper">
      {user ? (
        <>
          {getGreeting()}, {user.name}
          <LogOut className="header--link" onClick={handleLogout} />
        </>
      ) : (
        <>
          <Link to="/">
            <LogIn className="header--link" />
          </Link>
        </>
      )}
    </div>
  );
};

export default Header;
