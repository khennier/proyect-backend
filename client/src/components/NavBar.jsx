import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function NavBar() {
  const { isAuthenticated, logout, user } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="bg-gray-900 text-white p-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold"><Link to='/'>Task Manager</Link></h1>
        <ul className="flex space-x-4">
            {isAuthenticated && (
                <li>
                    Welcome {user.username}  ||
                </li>
            )}
            {isAuthenticated && (
                <li>
                    <Link to="/tasks" className="hover:text-gray-300">Tasks</Link>
                </li>
            )}
            {!isAuthenticated && (
                <>
                    <li>
                        <Link to="/login" className="hover:text-gray-300">Login</Link>
                    </li>
                    <li>
                        <Link to="/register" className="hover:text-gray-300">Register</Link>
                    </li>
                </>
            )}
            <li>
                <Link to="/profile" className="hover:text-gray-300">Profile</Link>
            </li>
            {isAuthenticated && (
                <li>
                    <Link to="/" onClick={handleLogout} className="hover:text-gray-300">Logout</Link>
                </li>
            )}
        </ul>
    </nav>
  );
}

export default NavBar;


