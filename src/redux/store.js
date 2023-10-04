import { configureStore } from '@reduxjs/toolkit';

import { appConfigReducer } from './appConfig';
import { answersCounterReducer } from './answersCounter';
import { userDataReducer } from './userData';
import { userTasksReducer } from './userTasks';

import { storageMiddleware } from './middlewares';

const store = configureStore({
  reducer: {
    appConfig: appConfigReducer,
    answersCounter: answersCounterReducer,
    userData: userDataReducer,
    userTasks: userTasksReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
