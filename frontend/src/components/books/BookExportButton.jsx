import { useState } from 'react';
import { BiDownload, BiChevronDown } from 'react-icons/bi';
import { exportToCSV, exportToJSON } from '../../utils/bookExport';

const BookExportButton = ({ books }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleExport = (format) => {
    if (format === 'csv') {
      exportToCSV(books);
    } else if (format === 'json') {
      exportToJSON(books);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
      >
        <BiDownload className="text-xl" />
        Export
        <BiChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-lg shadow-lg z-10">
          <button
            onClick={() => handleExport('csv')}
            className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 rounded-t-lg"
          >
            Export as CSV
          </button>
          <button
            onClick={() => handleExport('json')}
            className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 rounded-b-lg"
          >
            Export as JSON
          </button>
        </div>
      )}
    </div>
  );
};

export default BookExportButton;