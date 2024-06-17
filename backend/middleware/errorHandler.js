const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  const isDevelopment = process.env.NODE_ENV === 'development';

  const errorResponse = {
    message: err.message,
    status: statusCode,
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    method: req.method,
    stack: isDevelopment ? err.stack : undefined
  };

  res.status(statusCode).json(errorResponse);
};

export default errorHandler;