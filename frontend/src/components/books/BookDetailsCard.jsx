import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { formatDate } from '../../utils/dateFormatter';

const BookDetailsCard = ({ book }) => {
  return (
    <Card className="max-w-2xl mx-auto">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{book.title}</h2>
          <Badge variant="primary">{book.publishYear}</Badge>
        </div>
        
        <div className="space-y-2">
          <p className="text-gray-600 dark:text-gray-300">
            <span className="font-semibold">Author:</span> {book.author}
          </p>
          {book.description && (
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-semibold">Description:</span> {book.description}
            </p>
          )}
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Last updated: {formatDate(book.updatedAt)}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default BookDetailsCard;