import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navLink = 'text-gray-500 hover:text-blue-600';
  const active = 'text-blue-600 font-semibold';

  return (
    <nav className="p-4 bg-white shadow flex justify-between">
      <h1 className="text-xl font-bold">Campus Club Finder</h1>
      <div className="flex gap-4">
        <Link to="/" className={location.pathname === '/' ? active : navLink}>Home</Link>
        <Link to="/clubs" className={location.pathname.startsWith('/clubs') ? active : navLink}>Clubs</Link>
        <Link to="/about" className={location.pathname === '/about' ? active : navLink}>About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
