import { cva } from 'class-variance-authority';

const buttonStyles = cva(
  'rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        primary: 'bg-sky-500 text-white hover:bg-sky-600 focus:ring-sky-500',
        secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600',
        danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
      },
      size: {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

const Button = ({ children, variant, size, className = '', ...props }) => {
  return (
    <button className={`${buttonStyles({ variant, size })} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;