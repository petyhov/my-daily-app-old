import { createAction } from '@reduxjs/toolkit';

import appConfigTypes from './appConfigTypes';

const actions = {
  setDeviceWidth: createAction(appConfigTypes.setDeviceWidth),
  setShowSidebar: createAction(appConfigTypes.setShowSidebar),
};

export default actions;
