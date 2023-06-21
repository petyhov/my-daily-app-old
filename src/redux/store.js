import { configureStore } from '@reduxjs/toolkit';

import { appConfigReducer } from './appConfig';
import { answersCounterReducer } from './answersCounter';

const store = configureStore({
  reducer: {
    appConfig: appConfigReducer,
    answersCounter: answersCounterReducer,
  },
});

export default store;
