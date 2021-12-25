import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { projectsListSlice, userAuthSlice } from "./reducers";

const rootReducer = combineReducers({
  userAuth: userAuthSlice,
  projectsList: projectsListSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
