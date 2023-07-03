import { createReducer } from '@reduxjs/toolkit';
import userDataAction from './userDataAction';

const initalState = {};

const reducer = createReducer(initalState, {
  [userDataAction.setUserData]: (_, action) => {
    return action.payload;
  },
});

export default reducer;
