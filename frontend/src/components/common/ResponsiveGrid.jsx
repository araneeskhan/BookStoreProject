const ResponsiveGrid = ({ children, cols = { default: 1, sm: 2, md: 3, lg: 4 }, className = '' }) => {
  const getGridCols = () => {
    return `grid grid-cols-${cols.default} ${
      cols.sm ? `sm:grid-cols-${cols.sm}` : ''
    } ${cols.md ? `md:grid-cols-${cols.md}` : ''} ${
      cols.lg ? `lg:grid-cols-${cols.lg}` : ''
    }`;
  };

  return (
    <div className={`${getGridCols()} gap-4 sm:gap-6 lg:gap-8 ${className}`}>
      {children}
    </div>
  );
};

export default ResponsiveGrid;