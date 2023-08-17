import { createReducer } from '@reduxjs/toolkit';

import userDataAction from './userDataAction';
import { setCookie, getCookie } from '@/utils';

const initalState = typeof window === 'undefined' ? {} : getCookie('userData');

const reducer = createReducer(initalState, {
  [userDataAction.setUserData]: (_, action) => {
    setCookie('userData', action.payload);
    return action.payload;
  },
});

export default reducer;
