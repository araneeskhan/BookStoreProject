import Spinner from '../Spinner';

const LoadingButton = ({ 
  loading, 
  children, 
  className = '', 
  disabled = false,
  variant = 'primary',
  ...props 
}) => {
  const baseStyles = 'px-4 py-2 rounded-lg transition-colors flex items-center justify-center';
  const variants = {
    primary: 'bg-sky-500 hover:bg-sky-600 text-white disabled:bg-sky-300',
    danger: 'bg-red-500 hover:bg-red-600 text-white disabled:bg-red-300',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 disabled:bg-gray-100'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <Spinner size="small" />
      ) : children}
    </button>
  );
};

export default LoadingButton;