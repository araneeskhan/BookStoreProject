const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  const isDevelopment = process.env.NODE_ENV === 'development';

  // Log error for debugging
  console.error(`[${new Date().toISOString()}] Error:`, {
    path: req.originalUrl,
    method: req.method,
    error: err.message,
    stack: err.stack
  });

  const errorResponse = {
    message: err.message,
    status: statusCode,
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    method: req.method,
    code: err.code || 'INTERNAL_ERROR',
    stack: isDevelopment ? err.stack : undefined,
    validation: err.validation || undefined
  };

  // Handle mongoose validation errors
  if (err.name === 'ValidationError') {
    errorResponse.status = 400;
    errorResponse.validation = Object.values(err.errors).map(e => ({
      field: e.path,
      message: e.message
    }));
  }

  res.status(statusCode).json(errorResponse);
};

export default errorHandler;