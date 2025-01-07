import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';
import ThemeToggle from '../components/ThemeToggle';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className='p-4 dark:bg-dark-bg dark:text-dark-text min-h-screen'>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-3xl'>Books List</h1>
        <ThemeToggle />
      </div>
      <div className="flex justify-center items-center gap-x-4">
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('card')}
        >
          Card
        </button>
      </div>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-3xl'>Books List</h1>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <Link to='/books/create'>
            <MdOutlineAddBox className='text-sky-800 text-4xl hover:text-sky-600' />
          </Link>
        </div>
      </div>

      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <BooksTable books={currentBooks} />
      ) : (
        <BooksCard books={currentBooks} />
      )}

      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-sky-300 rounded-lg disabled:opacity-50 hover:bg-sky-400"
        >
          Previous
        </button>
        <span className="px-4 py-2">
          Page {currentPage} of {Math.ceil(filteredBooks.length / itemsPerPage)}
        </span>
        <button
          onClick={() => setCurrentPage(prev => prev + 1)}
          disabled={indexOfLastItem >= filteredBooks.length}
          className="px-4 py-2 bg-sky-300 rounded-lg disabled:opacity-50 hover:bg-sky-400"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
