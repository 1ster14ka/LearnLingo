import { configureStore } from "@reduxjs/toolkit";
import teachersReducer from "./Teachers/teachersSlice.js";
import authReducer from "./Auth/authSlice.js";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storageModule from "redux-persist/lib/storage";

const storage = storageModule.default;
const persistConfig = {
  key: "auth",
  version: 1,
  storage,
  whitelist: ["user", "isLoggedIn", "tokenExpirationTime"],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    teachers: teachersReducer,
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
