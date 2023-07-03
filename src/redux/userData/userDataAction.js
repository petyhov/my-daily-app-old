import { createAction } from '@reduxjs/toolkit';

import userDataTypes from './userDataTypes';

const actions = {
  setUserData: createAction(userDataTypes.setUserData),
};

export default actions;
