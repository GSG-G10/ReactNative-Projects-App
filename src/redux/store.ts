import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { projectsListSlice, userAuthSlice, imageSlice } from "./reducers";

const rootReducer = combineReducers({
  userAuth: userAuthSlice,
  projectsList: projectsListSlice,
  postImageUri: imageSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
