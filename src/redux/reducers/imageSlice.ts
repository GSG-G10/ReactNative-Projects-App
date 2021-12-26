import { createSlice } from "@reduxjs/toolkit";

export type ProjectsListState = {
  uri: string;
};

const initialState: ProjectsListState = {
  uri: "",
};

const imageSlice = createSlice({
  name: "image",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase("SET_URI", (state, action: any) => {
      state.uri = action.payload;
    });
  },
});

export default imageSlice.reducer;
