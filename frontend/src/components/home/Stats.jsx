import { BiBook, BiUser, BiTime } from 'react-icons/bi';

const Stats = ({ books }) => {
  const totalBooks = books.length;
  const uniqueAuthors = new Set(books.map(book => book.author)).size;
  const latestBook = books.reduce((latest, book) => 
    !latest || new Date(book.createdAt) > new Date(latest.createdAt) ? book : latest
  , null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform">
        <div className="flex items-center gap-4">
          <BiBook className="text-4xl text-primary-500" />
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{totalBooks}</h3>
            <p className="text-gray-600 dark:text-gray-300">Total Books</p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform">
        <div className="flex items-center gap-4">
          <BiUser className="text-4xl text-primary-500" />
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{uniqueAuthors}</h3>
            <p className="text-gray-600 dark:text-gray-300">Unique Authors</p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform">
        <div className="flex items-center gap-4">
          <BiTime className="text-4xl text-primary-500" />
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white truncate">
              {latestBook?.title || 'No books'}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">Latest Addition</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;