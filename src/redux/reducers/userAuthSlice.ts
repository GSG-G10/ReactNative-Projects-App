import { createSlice } from "@reduxjs/toolkit";

export type UserAuthenticationState = {
  value: object;
};

const initialState: UserAuthenticationState = {
  value: {
    isAuth: false,
    id: "",
  },
};

const userAuthSlice = createSlice({
  name: "User authentication",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase("CREATE_AUTH", (state, action: any) => {
      state.value = action.payload;
    });
  },
});

export default userAuthSlice.reducer;
