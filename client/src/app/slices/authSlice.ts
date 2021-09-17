import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { postAPI } from "utils/FetchData";
import { IUser, IUserLogin } from "utils/types";
import { setAlert } from "./alertSlice";

export interface AuthState {
  user: IUser;
  token: string;
}

const initialState: AuthState = {
  user: {} as IUser,
  token: "",
};

export const login = createAsyncThunk(
  "counter/login",
  async (userLogin: IUserLogin, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setAlert({ loading: true }));
      const response = await postAPI("login", userLogin);
      // The value we return becomes the `fulfilled` action payload
      dispatch(setAlert({ loading: false, success: "Login success!" }));

      return response.data;
    } catch (error: any) {
      dispatch(setAlert({ loading: false, errors: "Login failed!" }));
      return rejectWithValue(error.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      const { user, access_token } = action.payload;
      state.token = access_token;
      state.user = user;
    });
  },
});

export const selectUser = (state: RootState) => state.auth.user;
export const selectToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;
