import { createAction } from '@reduxjs/toolkit';

import { appConfigTypes } from './';

const actions = {
  setDeviceWidth: createAction(appConfigTypes.setDeviceWidth),
};

export default actions;
