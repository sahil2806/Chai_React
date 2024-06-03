import {configureStore} from '@reduxjs/toolkit';// It is used to create a Redux store
import todoReducer from '../features/todo/todoSlice';

// When you call configureStore, it sets up the Redux store based on the provided configuration options and returns the created store object.
export const store = configureStore({ reducer: todoReducer })

// console.log(store.getState());  // it print the  initial state of the store

