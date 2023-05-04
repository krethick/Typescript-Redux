import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';

const middleware = [...getDefaultMiddleware(), thunk, logger];

export const store = configureStore({
  reducer: reducers,
  middleware: middleware,
});

export default store;
