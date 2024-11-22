import { useState } from 'react';

const BookSortSelect = ({ onSort }) => {
  const [sortOption, setSortOption] = useState('title-asc');

  const handleSort = (event) => {
    const value = event.target.value;
    setSortOption(value);
    onSort(value);
  };

  return (
    <select
      value={sortOption}
      onChange={handleSort}
      className="px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 dark:text-white"
    >
      <option value="title-asc">Title (A-Z)</option>
      <option value="title-desc">Title (Z-A)</option>
      <option value="year-desc">Newest First</option>
      <option value="year-asc">Oldest First</option>
      <option value="author-asc">Author (A-Z)</option>
      <option value="author-desc">Author (Z-A)</option>
    </select>
  );
};

export default BookSortSelect;