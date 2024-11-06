import { Card } from '../common/Card';
import { useMemo } from 'react';

const BookStats = ({ books }) => {
  const stats = useMemo(() => ({
    total: books.length,
    thisYear: books.filter(b => b.publishYear === new Date().getFullYear()).length,
    authors: new Set(books.map(b => b.author)).size,
    averageYear: Math.round(books.reduce((acc, b) => acc + b.publishYear, 0) / books.length)
  }), [books]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {Object.entries(stats).map(([key, value]) => (
        <Card key={key} className="text-center">
          <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300 capitalize">
            {key.replace(/([A-Z])/g, ' $1').trim()}
          </h3>
          <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">
            {value}
          </p>
        </Card>
      ))}
    </div>
  );
};

export default BookStats;