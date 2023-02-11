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
import userCartReducer from './slices/userCart-slice';
import { api } from './apiCalls';

// PERSIST CONFIG
const persistAuthConfig = {
  key: 'auth',
  storage,
};

const persistUserConfig = {
  key: 'user',
  storage,
};

const persistUserCartConfig = {
  key: 'userCart',
  storage,
};

const persistedAuthReducer = persistReducer(
  persistAuthConfig,
  authStateReducer
);
const persistedUserReducer = persistReducer(persistUserConfig, userReducer);
const persistedUserCartReducer = persistReducer(
  persistUserCartConfig,
  userCartReducer
);

export const store = configureStore({
  reducer: {
    authState: persistedAuthReducer,
    user: persistedUserReducer,
    userCart: persistedUserCartReducer,
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
