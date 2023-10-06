import { createSlice } from '@reduxjs/toolkit';

import { fetchUserTasks, userTasksActions } from './';

const initialState = {
  tasks: [],
  isLoading: true,
  isError: false,
};

const userTasksSlice = createSlice({
  name: 'userTasks',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(userTasksActions.updateTask, (state, { payload }) => {
      const { _id, value } = payload;
      state.tasks.map((task) => {
        if (task._id === _id) {
          task.isDone = value;
        }
        return task;
      });
    });
    builder.addCase(fetchUserTasks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUserTasks.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.tasks = action.payload;
    });
    builder.addCase(fetchUserTasks.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.searchResult = [];
    });
  },
});

export default userTasksSlice.reducer;
