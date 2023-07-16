import { createReducer } from '@reduxjs/toolkit';

import userDataAction from './userDataAction';
import { setCookie } from '@/utils';

const initalState = {};

const reducer = createReducer(initalState, {
  [userDataAction.setUserData]: (_, action) => {
    setCookie('userData', action.payload);
    return action.payload;
  },
});

export default reducer;
