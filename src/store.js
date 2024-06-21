// store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Redux/Reducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
