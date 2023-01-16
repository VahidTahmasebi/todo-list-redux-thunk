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

export const addAsyncTodos = createAsyncThunk(
  "todos/AddAsyncTodos",
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

const initialState = {
  todos: [],
  error: null,
  loading: false,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
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
    [addAsyncTodos.fulfilled]: (state, action) => {
      state.todos.push(action.payload);
    },
  },
});
export default todoSlice.reducer;
