import { BiBookAlt } from 'react-icons/bi';

const EmptyState = ({ message = 'No books found' }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center animate-bounce-subtle">
      <BiBookAlt className="text-6xl text-gray-400 dark:text-gray-600 mb-4" />
      <h3 className="text-xl font-medium text-gray-600 dark:text-gray-400">{message}</h3>
    </div>
  );
};

export default EmptyState;