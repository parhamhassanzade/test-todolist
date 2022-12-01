import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "Todo",
  initialState: {
    count: 0,
    task: [],
    Dones: 0,
    notDone: 0,
  },
  reducers: {
    // increment: (state) => {
    //   state.count += 1;
    // },
    // decrement: (state) => {
    //   state.count -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.count += action.payload;
    // },

    addTask: (state, action) => {
      state.task.push(action.payload);
    },
  },
});

export const { addTask } = todoSlice.actions;

export default todoSlice.reducer;
