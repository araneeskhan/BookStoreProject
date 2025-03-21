import { BiBookAlt } from 'react-icons/bi';
import ThemeToggle from '../ThemeToggle';
import SearchInput from '../common/SearchInput';

const Header = ({ searchTerm, onSearchChange, onViewChange, viewType }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <BiBookAlt className="text-4xl text-primary-500" />
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Book Store</h1>
        </div>
        <ThemeToggle />
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <SearchInput
          value={searchTerm}
          onChange={onSearchChange}
          placeholder="Search books..."
          className="w-full sm:w-96"
        />
        
        <div className="flex gap-2">
          <button
            onClick={() => onViewChange('table')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              viewType === 'table' 
                ? 'bg-primary-500 text-white' 
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
            }`}
          >
            Table
          </button>
          <button
            onClick={() => onViewChange('card')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              viewType === 'card' 
                ? 'bg-primary-500 text-white' 
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
            }`}
          >
            Cards
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;