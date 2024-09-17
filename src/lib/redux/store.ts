import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import createWebStorage from 'redux-persist/es/storage/createWebStorage'
import cart from './feature/slices/cart';
 

const rootReducer = combineReducers({
  // Add your reducers here
  cart,
})

export function createPersistStore() {
  const isServer = typeof window === "undefined";
  if (isServer) {
      return {
          getItem() {
              return Promise.resolve(null);
          },
          setItem() {
              return Promise.resolve();
          },
          removeItem() {
              return Promise.resolve();
          },
      };
  }
  return createWebStorage("local");
}

const storage = typeof window !== "undefined"
    ? createWebStorage("local")
    : createPersistStore();

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: [],
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

