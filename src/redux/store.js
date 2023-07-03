import { configureStore } from '@reduxjs/toolkit';
import { appConfigReducer } from './appConfig';
import { answersCounterReducer } from './answersCounter';
import { userDataReducer } from './userData';
import { storageMiddleware } from './middlewares';

const store = configureStore({
  reducer: {
    appConfig: appConfigReducer,
    answersCounter: answersCounterReducer,
    userData: userDataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storageMiddleware),
});

export default store;
