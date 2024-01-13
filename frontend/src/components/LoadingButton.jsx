const LoadingButton = ({ loading, children, ...props }) => {
  return (
    <button
      disabled={loading}
      className={`flex items-center justify-center ${props.className}`}
      {...props}
    >
      {loading ? (
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
      ) : null}
      {children}
    </button>
  );
};

export default LoadingButton;