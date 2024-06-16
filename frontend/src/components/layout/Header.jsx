import ThemeToggle from '../common/ThemeToggle';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary-600 dark:text-primary-400">
          BookStore
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;