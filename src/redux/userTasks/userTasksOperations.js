import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiStatusConstants } from '@/configs';

import { userTasksActions } from './';

export const fetchUserTasks = createAsyncThunk(
  'userTasks',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/api/userTasks`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateUserTask = (arg) => async (dispatch) => {
  try {
    const { _id } = arg;
    dispatch(
      userTasksActions.updateTask({ _id, value: apiStatusConstants.pending })
    );
    const result = await axios.put(`/api/userTasks`, arg);
    console.log('result', result);
  } catch (e) {
    console.log('ERROR ', arg);
    // const { _id, value } = arg;
    // dispatch(userTasksActions.updateTask());
  }
};
