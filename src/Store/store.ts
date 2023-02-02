import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// REDUCERS
import authStateReducer from './slices/authState-slice';
import userReducer from './slices/user-slice';
import { api } from './apiCalls';

// PERSIST CONFIG
const persistAuthConfig = {
  key: 'auth',
  version: 1,
  storage,
};

const persistUserConfig = {
  key: 'user',
  version: 1,
  storage,
};

const persistedAuthReducer = persistReducer(
  persistAuthConfig,
  authStateReducer
);
const persistedUserReducer = persistReducer(persistUserConfig, userReducer);

export const store = configureStore({
  reducer: {
    authState: persistedAuthReducer,
    user: persistedUserReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
});

export let persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
