import rateLimit from 'express-rate-limit';

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    message: 'Too many requests from this IP, please try again later.',
    status: 429
  },
  standardHeaders: true,
  legacyHeaders: false,
});

export const createBookLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10, // Limit each IP to 10 create requests per hour
  message: {
    message: 'Too many books created from this IP, please try again later.',
    status: 429
  }
});