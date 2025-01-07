import React from 'react'

const Spinner = ({ size = 'default' }) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    default: 'w-16 h-16',
    large: 'w-24 h-24'
  };

  return (
    <div className="flex justify-center items-center">
      <div 
        className={`${sizeClasses[size]} animate-ping rounded-full bg-sky-600 opacity-75`}
        role="status"
        aria-label="Loading"
      />
    </div>
  );
};

export default Spinner;