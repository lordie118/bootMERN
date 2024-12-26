import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk pour récupérer les tâches
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async (filters) => {
  const response = await axios.get('http://localhost:1000/tasks/tasks', { params: filters });
  console.log("dvfregg")
  return response.data;
});

export const addTask = createAsyncThunk('tasks/addTask', async (taskData, { dispatch }) => {
    await axios.post('http://localhost:1000/tasks/create', taskData); // Endpoint pour ajouter une tâche
    dispatch(fetchTasks()); // Recharge la liste des tâches après l'ajout
  });

// Thunk pour la recherche des tâches
export const searchTasks = createAsyncThunk('tasks/searchTasks', async (keyword) => {
  const response = await axios.get('http://localhost:1000/tasks/search', { params: { keyword } });
  return response.data;
});

export  const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    filters: {
      priority: '',
      dueDate: '',
      status: '',
    },
    loading: false,
    error: null,
  },
  reducers: {
    setFilter(state, action) {
      state.filters = { ...state.filters, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(searchTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
      });
  },
});

export const { setFilter } = tasksSlice.actions;

export default tasksSlice.reducer;
