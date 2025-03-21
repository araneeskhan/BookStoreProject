import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import Card from '../common/Card';

const BookModal = ({ book, onClose }) => {
  return (
    <div className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4'>
      <Card className='w-full max-w-2xl animate-scale-up'>
        <button
          onClick={onClose}
          className='absolute right-4 top-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
        >
          <AiOutlineClose className='text-2xl' />
        </button>

        <div className='space-y-6'>
          <div className='flex items-center gap-x-4'>
            <span className='px-4 py-1 bg-sky-500 text-white rounded-full text-sm font-medium'>
              {book.publishYear}
            </span>
            <p className='text-gray-500 dark:text-gray-400 text-sm'>{book._id}</p>
          </div>

          <div className='space-y-4'>
            <div className='flex items-center gap-x-3'>
              <PiBookOpenTextLight className='text-sky-500 text-3xl' />
              <h2 className='text-2xl font-bold dark:text-white'>{book.title}</h2>
            </div>
            
            <div className='flex items-center gap-x-3'>
              <BiUserCircle className='text-sky-500 text-3xl' />
              <h3 className='text-xl text-gray-700 dark:text-gray-300'>{book.author}</h3>
            </div>
          </div>

          <div className='mt-6 space-y-4'>
            <h4 className='text-lg font-semibold dark:text-white'>Description</h4>
            <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
              {book.description || 'No description available.'}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BookModal;
