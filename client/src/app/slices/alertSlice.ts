import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";

export interface AlertState {
  loading?: boolean;
  success?: string | string[];
  errors?: string | string[];
}

const initialState: AlertState = {
  loading: false,
  success: "",
  errors: "",
};

export const authSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert: (state, action: PayloadAction<AlertState>) => {
      return action.payload;
    },
  },
});

export const { setAlert } = authSlice.actions;

export const selectAlert = (state: RootState) => state.alert;

export default authSlice.reducer;
