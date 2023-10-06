import { createReducer } from '@reduxjs/toolkit';

import appConfigAction from './appConfigAction';

const initalState = {
  deviceWidth: 0,
  showSidebar: false,
  userPassword: '',
  isLoggedIn: false,
};

const reducer = createReducer(initalState, {
  [appConfigAction.setShowSidebar]: (state, action) => {
    return {
      ...state,
      showSidebar: action.payload,
    };
  },
});

export default reducer;
