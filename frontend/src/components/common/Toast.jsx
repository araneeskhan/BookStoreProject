import { forwardRef } from 'react';
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

export default Toast;