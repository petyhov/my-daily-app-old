import { configureStore } from '@reduxjs/toolkit';

import { appConfigReducer } from './appConfig';

import { userTasksReducer } from './userTasks';

const store = configureStore({
  reducer: {
    userTasks: userTasksReducer,
    appConfig: appConfigReducer,
  },
});

export default store;
