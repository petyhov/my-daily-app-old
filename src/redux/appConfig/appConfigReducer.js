import { createReducer } from '@reduxjs/toolkit';
import appConfigAction from './appConfigAction';

const initalState = {
  deviceWidth: 0,
  showSidebar: false,
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
});

export default reducer;
