import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import counterReducer from "./slices/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
