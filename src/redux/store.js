import { configureStore } from '@reduxjs/toolkit';

import { appConfigReducer } from './appConfig';
import { taskCounterReducer } from './taskCounter';

const store = configureStore({
  reducer: {
    appConfig: appConfigReducer,
    taskCounter: taskCounterReducer,
  },
});

export default store;
