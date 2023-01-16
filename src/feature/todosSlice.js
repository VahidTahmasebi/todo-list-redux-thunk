import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// create async get todo
export const getAsyncTodos = createAsyncThunk(
  "todos/getAsyncTodos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos",
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addSyncTodos = createAsyncThunk(
  "todos/AddSyncTodos",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        { id: Date.now(), title: payload.title, completed: false },
      );
      return response.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  },
);

const todoSlice = createSlice({
  name: "todos",
  extraReducers: {
    [getAsyncTodos.fulfilled]: (state, action) => {
      return { ...state, todos: action.payload, loading: false, error: null };
    },
    [getAsyncTodos.pending]: (state) => {
      return { ...state, todos: [], loading: true, error: null };
    },
    [getAsyncTodos.rejected]: (state, { payload }) => {
      return { ...state, todos: [], loading: false, error: payload.message };
    },
    [addSyncTodos.fulfilled]: (state, action) => {
      state.todos.push(action.payload);
    },
  },
});
export default todoSlice.reducer;
