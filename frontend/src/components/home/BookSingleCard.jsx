import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';
import Card from '../common/Card';

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Card className='transform hover:scale-105 transition-transform duration-200'>
      <div className='relative'>
        <span className='absolute -top-4 right-2 px-4 py-1 bg-sky-500 text-white rounded-full text-sm font-medium'>
          {book.publishYear}
        </span>
      </div>
      
      <h4 className='text-gray-500 dark:text-gray-400 text-sm mt-4'>{book._id}</h4>
      
      <div className='space-y-4 mt-4'>
        <div className='flex items-center gap-x-2'>
          <PiBookOpenTextLight className='text-sky-500 text-2xl' />
          <h2 className='text-xl font-semibold dark:text-white'>{book.title}</h2>
        </div>
        
        <div className='flex items-center gap-x-2'>
          <BiUserCircle className='text-sky-500 text-2xl' />
          <h3 className='text-lg text-gray-700 dark:text-gray-300'>{book.author}</h3>
        </div>
      </div>

      <div className='flex justify-end items-center gap-x-4 mt-6'>
        <button
          onClick={() => setShowModal(true)}
          className='text-sky-500 hover:text-sky-600 transition-colors'
        >
          <BiShow className='text-2xl' />
        </button>
        <Link to={`/books/edit/${book._id}`} className='text-yellow-500 hover:text-yellow-600'>
          <AiOutlineEdit className='text-2xl' />
        </Link>
        <Link to={`/books/delete/${book._id}`} className='text-red-500 hover:text-red-600'>
          <MdOutlineDelete className='text-2xl' />
        </Link>
      </div>

      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </Card>
  );
};

export default BookSingleCard;
