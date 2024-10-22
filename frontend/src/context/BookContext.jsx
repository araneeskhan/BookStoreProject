import { createContext, useContext, useReducer } from 'react';

const BookContext = createContext();

const initialState = {
  books: [],
  selectedBook: null,
  filters: {
    year: null,
    author: null,
    searchQuery: ''
  },
  view: 'grid'
};

const bookReducer = (state, action) => {
  switch (action.type) {
    case 'SET_BOOKS':
      return { ...state, books: action.payload };
    case 'SET_SELECTED_BOOK':
      return { ...state, selectedBook: action.payload };
    case 'SET_FILTERS':
      return { ...state, filters: { ...state.filters, ...action.payload } };
    case 'TOGGLE_VIEW':
      return { ...state, view: state.view === 'grid' ? 'list' : 'grid' };
    default:
      return state;
  }
};

export const BookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookReducer, initialState);

  return (
    <BookContext.Provider value={{ state, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error('useBookContext must be used within a BookProvider');
  }
  return context;
};