import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

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

export const updateUserTasks = (arg) => async (dispatch) => {
  try {
    dispatch()
    const response = await axios.put(`/api/userTasks`, arg);
    console.log('RESPONSE2', response.status);
    return response;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
};
