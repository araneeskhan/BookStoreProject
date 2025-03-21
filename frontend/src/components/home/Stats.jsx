import { BiBook, BiUser, BiTime } from 'react-icons/bi';

const Stats = ({ books }) => {
  const totalBooks = books.length;
  const uniqueAuthors = new Set(books.map(book => book.author)).size;
  const latestBook = books.reduce((latest, book) => 
    !latest || new Date(book.createdAt) > new Date(latest.createdAt) ? book : latest
  , null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border rounded-xl p-4 lg:p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-colors-transform duration-300">
        <div className="flex items-center gap-3 lg:gap-4">
          <div className="p-2 lg:p-3 bg-primary-100 dark:bg-dark-hover rounded-lg shrink-0">
            <BiBook className="text-2xl lg:text-4xl text-primary-500" />
          </div>
          <div className="min-w-0">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-dark-text-primary">{totalBooks}</h3>
            <p className="text-sm lg:text-base text-gray-600 dark:text-dark-text-secondary truncate">Total Books</p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border rounded-xl p-4 lg:p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-colors-transform duration-300">
        <div className="flex items-center gap-3 lg:gap-4">
          <div className="p-2 lg:p-3 bg-primary-100 dark:bg-dark-hover rounded-lg shrink-0">
            <BiUser className="text-2xl lg:text-4xl text-primary-500" />
          </div>
          <div className="min-w-0">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-dark-text-primary">{uniqueAuthors}</h3>
            <p className="text-sm lg:text-base text-gray-600 dark:text-dark-text-secondary truncate">Unique Authors</p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border rounded-xl p-4 lg:p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-colors-transform duration-300 sm:col-span-2 lg:col-span-1">
        <div className="flex items-center gap-3 lg:gap-4">
          <div className="p-2 lg:p-3 bg-primary-100 dark:bg-dark-hover rounded-lg shrink-0">
            <BiTime className="text-2xl lg:text-4xl text-primary-500" />
          </div>
          <div className="min-w-0">
            <h3 className="text-lg lg:text-xl font-bold text-gray-800 dark:text-dark-text-primary truncate">
              {latestBook?.title || 'No books'}
            </h3>
            <p className="text-sm lg:text-base text-gray-600 dark:text-dark-text-secondary">Latest Addition</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;