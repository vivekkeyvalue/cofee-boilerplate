import {
  configureStore,
  PreloadedState,
  combineReducers
} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';

import { api } from './baseApi';
import storeLogger from './logger';

const middlewareList = (getDefaultMiddleware: CurriedGetDefaultMiddleware) => {
  const list = [api.middleware];
  if (process.env.NODE_ENV === 'development') {
    list.push(storeLogger);
  }
  return getDefaultMiddleware().concat(list);
};

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
      middlewareList(getDefaultMiddleware),
    preloadedState
  });

export const store = setupStore({});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof setupStore>;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
