import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const BASE_URL = 'http://localhost:5555';
const TIMEOUT = 5000;
const MAX_RETRIES = 2;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

const cache = new Map();

export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        // Add any auth headers or other request modifications here
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          // Handle unauthorized access
          enqueueSnackbar('Session expired. Please login again.', { variant: 'warning' });
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [enqueueSnackbar]);

  const clearCache = useCallback(() => {
    cache.clear();
  }, []);

  const getCacheKey = (method, endpoint, data) => {
    return `${method}:${endpoint}:${JSON.stringify(data)}`;
  };

  const handleRequest = async (method, endpoint, data = null, retryCount = 0) => {
    const cacheKey = getCacheKey(method, endpoint, data);
    
    if (method === 'GET') {
      const cachedData = cache.get(cacheKey);
      if (cachedData && Date.now() - cachedData.timestamp < CACHE_DURATION) {
        return cachedData.data;
      }
    }

    setLoading(true);
    try {
      const config = {
        method,
        url: `${BASE_URL}${endpoint}`,
        data,
        timeout: TIMEOUT,
      };
      const response = await axios(config);
      
      if (method === 'GET') {
        cache.set(cacheKey, {
          data: response.data,
          timestamp: Date.now()
        });
      } else {
        clearCache(); // Clear cache on mutations
      }

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
    clearCache,
    get: (endpoint) => handleRequest('GET', endpoint),
    post: (endpoint, data) => handleRequest('POST', endpoint, data),
    put: (endpoint, data) => handleRequest('PUT', endpoint, data),
    delete: (endpoint) => handleRequest('DELETE', endpoint),
  };
};