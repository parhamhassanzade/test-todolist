import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    alltasks: 0,
    tasks: [],
    Dones: 0,
    notDone: 0,
  },
  reducers: {
    // decrement: (state) => {
    //   state.count -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.count += action.payload;
    // },

    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    increment: (state) => {
      state.alltasks += 1;
    },
    CountUnFinished: (state) => {
      state.notDone += 1;
    },
  },
});

export const { addTask, increment, CountUnFinished } = todoSlice.actions;

export default todoSlice.reducer;
