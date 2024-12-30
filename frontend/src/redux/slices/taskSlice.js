import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk pour récupérer les tâches
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async (filters) => {
  const response = await axios.get('http://localhost:1000/tasks/tasks', { params: filters });
  return response.data;
});

export const addTask = createAsyncThunk('tasks/addTask', async (taskData) => {
  const response = await axios.post('http://localhost:1000/tasks/create', taskData); // Endpoint pour ajouter une tâche
  return response.data;
});

export const editTask = createAsyncThunk('tasks/editTask', async ({ id, taskData }) => {
  const response = await axios.put(`http://localhost:1000/tasks/update/${id}`, taskData); // Endpoint pour ajouter une tâche
  return response.data;
});

export const getTask = createAsyncThunk('tasks/getTask', async (id) => {
  const response = await axios.get(`http://localhost:1000/tasks/${id}`); // Endpoint pour recuperer une tache
  return response.data;
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (id) => {
  const response = await axios.delete(`http://localhost:1000/tasks/${id}`); // Endpoint pour supprimer une tache
  return { id };
});

// Thunk pour la recherche des tâches
export const searchTasks = createAsyncThunk('tasks/searchTasks', async (keyword) => {
  const response = await axios.get('http://localhost:1000/tasks/search', { params: { keyword } });
  return response.data;
});

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [], // Ensure tasks is an empty array initially
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
        state.tasks = Array.isArray(action.payload) ? action.payload : []; // Ensure the payload is an array
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(editTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex(task => task._id === action.payload._id);
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      })
      .addCase(getTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex(task => task._id === action.payload._id);
        if (index !== -1) {
          state.tasks[index] = action.payload;
        } else {
          state.tasks.push(action.payload);
        }
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(task => task._id !== action.payload.id);
      })
      .addCase(searchTasks.fulfilled, (state, action) => {
        state.tasks = Array.isArray(action.payload) ? action.payload : []; // Ensure the payload is an array
      });
  },
});

export const { setFilter } = tasksSlice.actions;

export default tasksSlice.reducer;
