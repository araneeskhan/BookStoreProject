import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <div className="overflow-x-auto shadow-lg rounded-lg">
      <table className='w-full border-separate border-spacing-2 dark:border-gray-700' aria-label="Books list">
        <thead>
          <tr className="bg-gray-50 dark:bg-gray-800">
            <th scope="col" className='border border-slate-600 rounded-md p-2'>No</th>
            <th scope="col" className='border border-slate-600 rounded-md p-2'>Title</th>
            <th scope="col" className='border border-slate-600 rounded-md max-md:hidden p-2'>Author</th>
            <th scope="col" className='border border-slate-600 rounded-md max-md:hidden p-2'>Publish Year</th>
            <th scope="col" className='border border-slate-600 rounded-md p-2'>Operations</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id} className='h-8 dark:bg-dark-card hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200'>
              <td className='border border-slate-700 rounded-md text-center'>
                {index + 1}
              </td>
              <td className='border border-slate-700 rounded-md text-center'>
                {book.title}
              </td>
              <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                {book.author}
              </td>
              <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                {book.publishYear}
              </td>
              <td className='border border-slate-700 rounded-md text-center'>
                <div className='flex justify-center gap-x-4'>
                  <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className='text-2xl text-green-800' />
                  </Link>
                  <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className='text-2xl text-yellow-600' />
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className='text-2xl text-red-600' />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
