import { createSlice } from "@reduxjs/toolkit";

export type ProjectsListState = {
  data: Array<any>;
};

const initialState: ProjectsListState = {
  data: [],
};

const projectsListSlice = createSlice({
  name: "projectsList",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase("STORE_DATA", (state, action: any) => {
        state.data = action.payload;
      })
      .addCase("ADD_PROJECT", (state, action: any) => {
        state.data = [...state.data, action.payload];
      });
  },
});

export default projectsListSlice.reducer;
