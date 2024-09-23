import { useState } from 'react';
import { Badge } from '../common/Badge';

const BookFilter = ({ onFilterChange }) => {
  const [year, setYear] = useState('');
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, i) => currentYear - i);

  const handleYearChange = (selectedYear) => {
    setYear(selectedYear === year ? '' : selectedYear);
    onFilterChange(selectedYear === year ? '' : selectedYear);
  };

  return (
    <div className="flex flex-wrap gap-2 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <span className="text-gray-700 dark:text-gray-300 font-medium">Filter by year:</span>
      <div className="flex flex-wrap gap-2">
        {years.map((y) => (
          <Badge
            key={y}
            variant={y === year ? 'primary' : 'default'}
            className="cursor-pointer hover:opacity-80"
            onClick={() => handleYearChange(y)}
          >
            {y}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default BookFilter;