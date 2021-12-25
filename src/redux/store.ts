import {combineReducers,configureStore} from '@reduxjs/toolkit';

import projectsListSlice from './projectsListSlice';

const rootReducer =  combineReducers({ 
  projectsList: projectsListSlice,

})

const store = configureStore({
    reducer: rootReducer
  })

export default store