import { createAction } from '@reduxjs/toolkit';

import appConfigTypes from './appConfigTypes';

const actions = {
  setShowSidebar: createAction(appConfigTypes.setShowSidebar),
};

export default actions;
