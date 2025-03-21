import { forwardRef } from 'react';
import { useEffect } from 'react';
import { BiCheckCircle, BiErrorCircle, BiInfoCircle } from 'react-icons/bi';

const Toast = forwardRef(({ variant = 'info', message }, ref) => {
  const variants = {
    success: { icon: BiCheckCircle, className: 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' },
    error: { icon: BiErrorCircle, className: 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100' },
    info: { icon: BiInfoCircle, className: 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100' }
  };

  const { icon: Icon, className } = variants[variant] || variants.info;

  return (
    <div ref={ref} className={`flex items-center p-4 rounded-lg shadow-lg ${className}`}>
      <Icon className="text-xl mr-2" />
      <p>{message}</p>
    </div>
  );
});

const Toast = ({ message, type = 'info', onClose }) => {
  const icons = {
    success: <BiCheckCircle className="text-green-500 text-xl" />,
    error: <BiErrorCircle className="text-red-500 text-xl" />,
    info: <BiInfoCircle className="text-blue-500 text-xl" />
  };

  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-4 right-4 animate-slide-up">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center gap-3">
        {icons[type]}
        <p className="text-gray-700 dark:text-gray-200">{message}</p>
      </div>
    </div>
  );
};

export default Toast;