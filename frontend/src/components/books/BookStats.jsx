import { Card } from '../common/Card';
import { BiBook, BiUser, BiTime } from 'react-icons/bi';

const BookStats = ({ books }) => {
  const stats = {
    total: books.length,
    authors: new Set(books.map(book => book.author)).size,
    recentBooks: books.filter(book => book.publishYear >= new Date().getFullYear() - 1).length
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <Card className="flex items-center p-4 bg-blue-50 dark:bg-blue-900">
        <BiBook className="text-3xl text-blue-500 dark:text-blue-300 mr-3" />
        <div>
          <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-200">Total Books</h3>
          <p className="text-2xl font-bold text-blue-800 dark:text-blue-100">{stats.total}</p>
        </div>
      </Card>

      <Card className="flex items-center p-4 bg-green-50 dark:bg-green-900">
        <BiUser className="text-3xl text-green-500 dark:text-green-300 mr-3" />
        <div>
          <h3 className="text-lg font-semibold text-green-700 dark:text-green-200">Unique Authors</h3>
          <p className="text-2xl font-bold text-green-800 dark:text-green-100">{stats.authors}</p>
        </div>
      </Card>

      <Card className="flex items-center p-4 bg-purple-50 dark:bg-purple-900">
        <BiTime className="text-3xl text-purple-500 dark:text-purple-300 mr-3" />
        <div>
          <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-200">Recent Books</h3>
          <p className="text-2xl font-bold text-purple-800 dark:text-purple-100">{stats.recentBooks}</p>
        </div>
      </Card>
    </div>
  );
};

export default BookStats;