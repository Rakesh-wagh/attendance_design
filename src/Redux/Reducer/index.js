// reducers/index.js
import { combineReducers } from "@reduxjs/toolkit";
import formReducer from "../Slices/FormSlice"; // Your FORM reducer

const rootReducer = combineReducers({
  form: formReducer,
  // Add other reducers here if needed
});

export default rootReducer;
