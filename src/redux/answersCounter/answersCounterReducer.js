import { createReducer } from '@reduxjs/toolkit';

import answersCounterActions from './answersCounterActions';

const initState = {
  correctAnswerCount: 0,
  wrongAnswerCount: 0,
};

const reducer = createReducer(initState, {
  [answersCounterActions.increaseCorrectAnswer]: (state) => {
    return { ...state, correctAnswerCount: state.correctAnswerCount + 1 };
  },
  [answersCounterActions.increaseWrongAnswer]: (state) => {
    return { ...state, wrongAnswerCount: state.wrongAnswerCount + 1 };
  },
});

export default reducer;
