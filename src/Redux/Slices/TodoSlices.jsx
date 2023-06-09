import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState:[],
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
    clearTodo (state) {
      state.length = 0;
    },
    removeTodo (state, action) {
      state.splice(action.payload,1)
  },
  },
});


export const { addTodo, clearTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
