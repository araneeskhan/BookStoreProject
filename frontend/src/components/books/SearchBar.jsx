import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 pl-10 border rounded-lg dark:bg-gray-700 dark:text-white"
        />
        <BiSearch className="absolute left-3 top-3 text-gray-400" />
      </div>
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchBar;