import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Deleted successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };
  
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are You Sure You want to delete this book?</h3>

        const [showConfirmation, setShowConfirmation] = useState(false);
        
        // Add confirmation dialog
        {showConfirmation ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg">
        <p className="mb-4">Are you sure you want to delete this book?</p>
        <div className="flex justify-end">
        <button
        onClick={() => setShowConfirmation(false)}
        className="mr-2 px-4 py-2 bg-gray-300 rounded"
        >
        Cancel
        </button>
        <button
        onClick={handleDeleteBook}
        className="px-4 py-2 bg-red-600 text-white rounded"
        >
        Delete
        </button>
        </div>
        </div>
        </div>
        ) : (
        <button
        className='p-4 bg-red-600 text-white m-8 w-full'
        onClick={() => setShowConfirmation(true)}
        >
        Yes, Delete it
        </button>
        )}
      </div>
    </div>
  )
}

export default DeleteBook;
