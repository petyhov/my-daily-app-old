import { createReducer } from '@reduxjs/toolkit';
import appConfigAction from './appConfigAction';

const initalState = {
  deviceWidth: 0,
};

const reducer = createReducer(initalState, {
  [appConfigAction.setDeviceWidth]: (state, action) => {
    return { deviceWidth: action.payload };
  },
});

export default reducer;
