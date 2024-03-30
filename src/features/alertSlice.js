import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openAlertStore: false,
  alertMessageStore: "",
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    openAlert: (state, actions) => {
      state.openAlertStore = true;
      state.alertMessageStore = actions.payload.message;
    },
    closeAlert: (state) => {
      state.openAlertStore = false;
    },
  },
});

export const { openAlert, closeAlert } = alertSlice.actions;
export default alertSlice.reducer;
