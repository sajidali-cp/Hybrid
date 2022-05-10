import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./reducers/userReducer";
import settingsReducer from "./reducers/settingsReducer";
import walletReducer from "./reducers/walletReducer";
import kycReducer from "./reducers/kycReducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["user", "settings", "wallet", "kyc"],
};

const reducers = combineReducers({
  user: userReducer,
  settings: settingsReducer,
  wallet: walletReducer,
  kyc: kycReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
