import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/taskSlice";
import alertReducer from "../features/alertSlice";

export const store = configureStore({
  reducer: {
    task: taskReducer,
    alert: alertReducer,
  },
});
