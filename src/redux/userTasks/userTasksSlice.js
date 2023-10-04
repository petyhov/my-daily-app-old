import { createSlice } from '@reduxjs/toolkit';
import { fetchUserTasks } from './userTasksOperations';

const initialState = {
  tasks: [],
  isLoading: true,
  isError: false,
};

const userTasksSlice = createSlice({
  name: 'userTasks',
  initialState,
  reducers: {
    updateTaskAction(state) {
      console.log('STATe', state);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserTasks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUserTasks.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
      console.log('action.payload', action.payload);
      state.tasks = action.payload;
    });
    builder.addCase(fetchUserTasks.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.searchResult = [];
    });
  },
});

export const { updateTaskAction } = userTasksSlice.actions;

export default userTasksSlice.reducer;
