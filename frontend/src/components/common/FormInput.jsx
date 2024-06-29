const FormInput = ({ label, error, ...props }) => {
  return (
    <div className="my-4">
      <label className="text-xl mr-4 text-gray-500 dark:text-gray-400">
        {label}
      </label>
      <input
        {...props}
        className={`border-2 ${
          error ? 'border-red-500' : 'border-gray-500'
        } px-4 py-2 w-full rounded-lg focus:outline-none focus:border-primary-500 dark:bg-gray-700 dark:text-white`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default FormInput;