import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// create async get todo
export const getAsyncTodos = createAsyncThunk(
  "todos/getAsyncTodos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:3002/todos");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// create async add todo
export const addAsyncTodos = createAsyncThunk(
  "todos/AddAsyncTodos",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:3002/todos", {
        id: Date.now(),
        title: payload.title,
        completed: false,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  },
);
export const toggleCompleteAsync = createAsyncThunk(
  "todos/toggleCompleteAsync",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://localhost:3002/todos/${payload.id}`,
        { title: payload.title, completed: payload.completed },
      );
      return response.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  },
);

export const deleteAsyncTodo = createAsyncThunk(
  "todos/deleteAsyncTodo",
  async (payload, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:3002/todos/${payload.id}`);
      return { id: payload.id };
    } catch (error) {
      return rejectWithValue([], error);
    }
  },
);

// store state
const initialState = {
  todos: [],
  error: null,
  loading: false,
};

// reducers
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
    [toggleCompleteAsync.fulfilled]: (state, action) => {
      const selectedTodo = state.todos.find((t) => t.id === action.payload.id);
      selectedTodo.completed = action.payload.completed;
    },
    [deleteAsyncTodo.fulfilled]: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload.id);
    },
  },
});
export default todoSlice.reducer;
