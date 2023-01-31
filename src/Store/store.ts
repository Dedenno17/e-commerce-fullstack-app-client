import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

// REDUCERS
import authStateReducer from './slices/authState-slice';
import userReducer from './slices/user-slice';
import { api } from './apiCalls';

export const store = configureStore({
  reducer: {
    authState: authStateReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
