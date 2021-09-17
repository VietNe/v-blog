import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { postAPI } from "utils/FetchData";
import { IUser, IUserLogin } from "utils/types";

export interface AuthState {
  user: IUser;
  token: string;
  //   status: "idle" | "loading" | "failed";
}

const initialState: AuthState = {
  user: {} as IUser,
  token: "",
};

export const login = createAsyncThunk(
  "counter/fetchCount",
  async (userLogin: IUserLogin, { rejectWithValue }) => {
    try {
      const response = await postAPI("login", userLogin);
      // The value we return becomes the `fulfilled` action payload
      return response.data;
    } catch (error: any) {
      console.log(error);
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

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;
export const selectToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;
