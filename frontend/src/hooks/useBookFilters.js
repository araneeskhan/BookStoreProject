import { useState, useMemo } from 'react';
import { useDebounce } from './useDebounce';

export const useBookFilters = (books) => {
  const [filters, setFilters] = useState({
    search: '',
    year: '',
    author: ''
  });

  const debouncedSearch = useDebounce(filters.search);

  const filteredBooks = useMemo(() => {
    return books.filter(book => {
      const matchesSearch = debouncedSearch
        ? book.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
          book.author.toLowerCase().includes(debouncedSearch.toLowerCase())
        : true;

      const matchesYear = filters.year
        ? book.publishYear === parseInt(filters.year)
        : true;

      const matchesAuthor = filters.author
        ? book.author.toLowerCase() === filters.author.toLowerCase()
        : true;

      return matchesSearch && matchesYear && matchesAuthor;
    });
  }, [books, debouncedSearch, filters.year, filters.author]);

  return {
    filters,
    setFilters,
    filteredBooks
  };
};