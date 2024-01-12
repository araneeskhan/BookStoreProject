import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 5555;
export const mongoDBURL = process.env.MONGODB_URL || "mongodb://localhost:27017/books-collection";
export const NODE_ENV = process.env.NODE_ENV || 'development';

// Please create a free database for yourself.
// This database will be deleted after tutorial
