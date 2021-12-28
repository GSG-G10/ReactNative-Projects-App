import { createSlice } from "@reduxjs/toolkit";

export type ProjectsListState = {
  data: Array<any>;
  filteredData: Array<any>;
};

const initialState: ProjectsListState = {
  data: [],
  filteredData: [],
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
      })
      .addCase("FILTER_PROJECTS", (state, action: any) => {
        state.filteredData = state.data.filter((item:any) => item.name.startsWith(action.payload))
        
      });
  },
});

export default projectsListSlice.reducer;
