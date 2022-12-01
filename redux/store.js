import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "./todo";
export default configureStore({
  reducer: {
    todo: todoSliceReducer,
  },
});
