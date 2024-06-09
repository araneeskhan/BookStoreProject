import { useState } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const BASE_URL = 'http://localhost:5555';
const TIMEOUT = 5000;
const MAX_RETRIES = 2;

export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleRequest = async (method, endpoint, data = null, retryCount = 0) => {
    setLoading(true);
    try {
      const config = {
        method,
        url: `${BASE_URL}${endpoint}`,
        data,
        timeout: TIMEOUT,
      };
      const response = await axios(config);
      setLoading(false);
      return response.data;
    } catch (error) {
      if (retryCount < MAX_RETRIES && error.code === 'ECONNABORTED') {
        return handleRequest(method, endpoint, data, retryCount + 1);
      }
      setLoading(false);
      enqueueSnackbar(error.response?.data?.message || 'An error occurred', { 
        variant: 'error',
        autoHideDuration: 3000
      });
      throw error;
    }
  };

  return {
    loading,
    get: (endpoint) => handleRequest('GET', endpoint),
    post: (endpoint, data) => handleRequest('POST', endpoint, data),
    put: (endpoint, data) => handleRequest('PUT', endpoint, data),
    delete: (endpoint) => handleRequest('DELETE', endpoint),
  };
};