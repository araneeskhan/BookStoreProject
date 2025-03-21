import { BiBook, BiUser, BiTime } from 'react-icons/bi';

const Stats = ({ books }) => {
  const totalBooks = books.length;
  const uniqueAuthors = new Set(books.map(book => book.author)).size;
  const latestBook = books.reduce((latest, book) => 
    !latest || new Date(book.createdAt) > new Date(latest.createdAt) ? book : latest
  , null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-colors-transform duration-300">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary-100 dark:bg-dark-hover rounded-lg">
            <BiBook className="text-4xl text-primary-500" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-dark-text-primary">{totalBooks}</h3>
            <p className="text-gray-600 dark:text-dark-text-secondary">Total Books</p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-colors-transform duration-300">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary-100 dark:bg-dark-hover rounded-lg">
            <BiUser className="text-4xl text-primary-500" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-dark-text-primary">{uniqueAuthors}</h3>
            <p className="text-gray-600 dark:text-dark-text-secondary">Unique Authors</p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-colors-transform duration-300">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary-100 dark:bg-dark-hover rounded-lg">
            <BiTime className="text-4xl text-primary-500" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-dark-text-primary truncate">
              {latestBook?.title || 'No books'}
            </h3>
            <p className="text-gray-600 dark:text-dark-text-secondary">Latest Addition</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;