import { createAction } from '@reduxjs/toolkit';

import appConfigTypes from './appConfigTypes';

const actions = {
  setDeviceWidth: createAction(appConfigTypes.setDeviceWidth),
};

export default actions;
