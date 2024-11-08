import { useState } from 'react';
import { SearchInput } from '../common/SearchInput';
import { Badge } from '../common/Badge';

const BookSearch = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    query: '',
    year: '',
    author: ''
  });

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onSearch(newFilters);
  };

  return (
    <div className="space-y-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <SearchInput
        value={filters.query}
        onChange={(e) => handleFilterChange('query', e.target.value)}
        placeholder="Search books..."
        className="w-full"
      />
      
      <div className="flex flex-wrap gap-2">
        <Badge 
          variant={filters.year ? 'primary' : 'default'}
          className="cursor-pointer"
          onClick={() => handleFilterChange('year', filters.year ? '' : new Date().getFullYear())}
        >
          This Year
        </Badge>
        <Badge 
          variant={filters.author ? 'primary' : 'default'}
          className="cursor-pointer"
          onClick={() => handleFilterChange('author', filters.author ? '' : 'Popular')}
        >
          Popular Authors
        </Badge>
      </div>
    </div>
  );
};

export default BookSearch;