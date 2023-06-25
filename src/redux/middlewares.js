import answersCounterTypes from './answersCounter/answersCounterTypes';
import { saveToLocalStorage } from '@/utils';

export const storageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if ([...Object.values(answersCounterTypes)].includes(action.type)) {
    saveToLocalStorage('answersCounter', store.getState()['answersCounter']);
  }
  return result;
};
