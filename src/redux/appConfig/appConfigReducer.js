import { createReducer } from '@reduxjs/toolkit';

import { setCookie } from '@/utils';

import appConfigAction from './appConfigAction';

const initalState = {
  deviceWidth: 0,
  showSidebar: false,
  userPassword: '',
  isLoggedIn: false,
};

const reducer = createReducer(initalState, {
  [appConfigAction.setDeviceWidth]: (state, action) => {
    return { ...state, deviceWidth: action.payload };
  },
  [appConfigAction.setShowSidebar]: (state, action) => {
    return {
      ...state,
      showSidebar: action.payload,
    };
  },
  [appConfigAction.setUserPassword]: (state, action) => {
    return {
      ...state,
      userPassword: action.payload,
    };
  },
  [appConfigAction.setLoggedIn]: (state, action) => {
    setCookie('setLoggedIn', action.payload);
    return {
      ...state,
      isLoggedIn: action.payload,
    };
  },
});

export default reducer;
