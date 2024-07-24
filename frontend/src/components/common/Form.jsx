import React from 'react';

const Form = ({ onSubmit, children, className = '' }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className={`flex flex-col border-2 border-sky-400 rounded-xl p-6 max-w-2xl mx-auto ${className}`}
    >
      {children}
    </form>
  );
};

export default Form;