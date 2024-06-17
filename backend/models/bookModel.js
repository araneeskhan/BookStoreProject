import mongoose from 'mongoose';

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      minLength: [2, 'Title must be at least 2 characters'],
      maxLength: [100, 'Title cannot exceed 100 characters']
    },
    author: {
      type: String,
      required: [true, 'Author is required'],
      trim: true
    },
    publishYear: {
      type: Number,
      required: true,
      min: [1800, 'Publish year must be after 1800'],
      max: [new Date().getFullYear(), 'Publish year cannot be in the future']
    },
    description: {
      type: String,
      trim: true,
      maxLength: [500, 'Description cannot exceed 500 characters']
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export const Book = mongoose.model('Book', bookSchema);
