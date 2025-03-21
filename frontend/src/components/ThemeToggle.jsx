import { useTheme } from '../hooks/useTheme';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-lg bg-gray-100 dark:bg-dark-hover shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
      aria-label="Toggle theme"
    >
      <div className="relative z-10 transform transition-transform duration-300 ease-in-out group-hover:scale-110">
        {isDarkMode ? (
          <FaSun className="text-yellow-400 w-5 h-5" />
        ) : (
          <FaMoon className="text-gray-700 w-5 h-5" />
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-200 dark:from-transparent dark:to-dark-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
};

export default ThemeToggle;